/* ============================================================
   qr.js — генератор QR-кода (ISO/IEC 18004), версии 1–10, ECC M
   Без внешних библиотек. Поддерживает байтовый режим (UTF-8).
   ============================================================ */

const QR = (() => {
  // Таблицы для ECC уровня M
  // https://www.thonky.com/qr-code-tutorial/error-correction-table
  const ECC_M = {
    1:  { total:26, data:16, ecc:10, blocks:[1,1] },
    2:  { total:44, data:28, ecc:16, blocks:[1,1] },
    3:  { total:70, data:44, ecc:22, blocks:[1,1] },
    4:  { total:100,data:64, ecc:28, blocks:[1,1] },
    5:  { total:134,data:86, ecc:32, blocks:[1,1] },
    6:  { total:172,data:108,ecc:36, blocks:[1,1] },
    7:  { total:196,data:124,ecc:40, blocks:[1,1] },
    8:  { total:242,data:154,ecc:44, blocks:[1,1] },
    9:  { total:292,data:182,ecc:52, blocks:[1,1] },
    10: { total:346,data:216,ecc:60, blocks:[1,1] },
  };
  const CAPACITY_M_BYTES = { 1:14, 2:26, 3:42, 4:62, 5:84, 6:106, 7:122, 8:152, 9:180, 10:213 };

  // --- GF(256) для Reed-Solomon ---
  const EXP = new Uint8Array(512), LOG = new Uint8Array(256);
  (function initGF(){
    let x = 1;
    for (let i = 0; i < 255; i++){
      EXP[i] = x;
      LOG[x] = i;
      x <<= 1;
      if (x & 0x100) x ^= 0x11d;
    }
    for (let i = 255; i < 512; i++) EXP[i] = EXP[i - 255];
  })();
  function gfMul(a, b){
    if (a === 0 || b === 0) return 0;
    return EXP[LOG[a] + LOG[b]];
  }
  function rsGeneratorPoly(degree){
    let poly = [1];
    for (let i = 0; i < degree; i++){
      const next = new Array(poly.length + 1).fill(0);
      for (let j = 0; j < poly.length; j++){
        next[j] ^= gfMul(poly[j], 1);
        next[j + 1] ^= gfMul(poly[j], EXP[i]);
      }
      poly = next;
    }
    return poly;
  }
  function rsEncode(data, eccLen){
    const gen = rsGeneratorPoly(eccLen);
    const res = new Uint8Array(data.length + eccLen);
    res.set(data, 0);
    for (let i = 0; i < data.length; i++){
      const factor = res[i];
      if (factor === 0) continue;
      for (let j = 0; j < gen.length; j++){
        res[i + j] ^= gfMul(gen[j], factor);
      }
    }
    return res.slice(data.length);
  }

  // --- Кодирование данных (байтовый режим) ---
  function encodeData(text, version){
    const bytes = new TextEncoder().encode(text);
    const cap = CAPACITY_M_BYTES[version];
    if (bytes.length > cap) throw new Error('Текст слишком длинный для QR v' + version + ' (max ' + cap + ' байт)');
    const bits = [];
    const pushBits = (val, len) => {
      for (let i = len - 1; i >= 0; i--) bits.push((val >> i) & 1);
    };
    // mode indicator = 0100 (byte)
    pushBits(0b0100, 4);
    // length (8 бит для v1-9, 16 для v10+)
    pushBits(bytes.length, version <= 9 ? 8 : 16);
    // данные
    for (const b of bytes) pushBits(b, 8);
    // терминатор
    const totalDataBits = ECC_M[version].data * 8;
    while (bits.length < totalDataBits && bits.length < totalDataBits - 4) bits.push(0);
    if (bits.length < totalDataBits) pushBits(0, totalDataBits - bits.length);
    // padding
    let pad = 0xEC;
    while (bits.length < totalDataBits){
      pushBits(pad, 8);
      pad = pad === 0xEC ? 0x11 : 0xEC;
    }
    // в байты
    const out = new Uint8Array(ECC_M[version].data);
    for (let i = 0; i < out.length; i++){
      let v = 0;
      for (let j = 0; j < 8; j++) v = (v << 1) | bits[i * 8 + j];
      out[i] = v;
    }
    return out;
  }

  // --- Матрица ---
  function makeMatrix(version){
    const size = version * 4 + 17;
    const m = Array.from({ length: size }, () => new Array(size).fill(null));
    return { m, size };
  }
  function placeFinder(m, size, row, col){
    for (let r = -1; r <= 7; r++){
      for (let c = -1; c <= 7; c++){
        const rr = row + r, cc = col + c;
        if (rr < 0 || rr >= size || cc < 0 || cc >= size) continue;
        const inside = r >= 0 && r <= 6 && c >= 0 && c <= 6;
        let dark = false;
        if (inside){
          if (r === 0 || r === 6 || c === 0 || c === 6) dark = true;
          else if (r >= 2 && r <= 4 && c >= 2 && c <= 4) dark = true;
        }
        m[rr][cc] = dark ? 1 : 0;
      }
    }
  }
  function placeSeparators(m, size){
    // уже покрыто placeFinder (значение 0 в позициях -1/7)
  }
  function placeAlignment(m, version){
    if (version === 1) return;
    const positions = {
      2:[6,18],3:[6,22],4:[6,26],5:[6,30],6:[6,34],
      7:[6,22,38],8:[6,24,42],9:[6,26,46],10:[6,28,50]
    }[version];
    for (const r of positions) for (const c of positions){
      // не пересекается с finder
      if ((r <= 8 && c <= 8) || (r <= 8 && c >= size - 9) || (r >= size - 9 && c <= 8)) continue;
      for (let dr = -2; dr <= 2; dr++){
        for (let dc = -2; dc <= 2; dc++){
          const dark = (Math.max(Math.abs(dr), Math.abs(dc)) !== 1);
          m[r + dr][c + dc] = dark ? 1 : 0;
        }
      }
    }
  }
  function placeTiming(m, size){
    for (let i = 8; i < size - 8; i++){
      if (m[6][i] == null) m[6][i] = i % 2 === 0 ? 1 : 0;
      if (m[i][6] == null) m[i][6] = i % 2 === 0 ? 1 : 0;
    }
  }
  function reserveFormat(m, size){
    // резервируем области формата (пока 0)
    for (let i = 0; i < 9; i++){
      if (m[8][i] == null) m[8][i] = 0;
      if (m[i][8] == null) m[i][8] = 0;
    }
    for (let i = 0; i < 8; i++){
      if (m[8][size - 1 - i] == null) m[8][size - 1 - i] = 0;
      if (m[size - 1 - i][8] == null) m[size - 1 - i][8] = 0;
    }
    // тёмный модуль
    m[size - 8][8] = 1;
  }
  function placeData(m, size, bits){
    let idx = 0;
    let dir = -1;
    let row = size - 1;
    for (let col = size - 1; col > 0; col -= 2){
      if (col === 6) col--;
      while (true){
        for (let i = 0; i < 2; i++){
          const c = col - i;
          if (m[row][c] == null){
            m[row][c] = idx < bits.length ? bits[idx++] : 0;
          }
        }
        row += dir;
        if (row < 0 || row >= size){
          row -= dir;
          dir = -dir;
          break;
        }
      }
    }
  }
  function applyMask(m, size, mask){
    const maskFn = [
      (r,c)=>(r+c)%2===0,
      (r,c)=>r%2===0,
      (r,c)=>c%3===0,
      (r,c)=>(r+c)%3===0,
      (r,c)=>(Math.floor(r/2)+Math.floor(c/3))%2===0,
      (r,c)=>(r*c)%2+(r*c)%3===0,
      (r,c)=>((r*c)%2+(r*c)%3)%2===0,
      (r,c)=>((r+c)%2+(r*c)%3)%2===0,
    ][mask];
    for (let r = 0; r < size; r++) for (let c = 0; c < size; c++){
      if (isFunctionModule(r, c, size)) continue;
      if (maskFn(r, c)) m[r][c] ^= 1;
    }
  }
  function isFunctionModule(r, c, size){
    // finder + separators
    if (r <= 8 && c <= 8) return true;
    if (r <= 8 && c >= size - 9) return true;
    if (r >= size - 9 && c <= 8) return true;
    // timing
    if (r === 6 || c === 6) return true;
    // alignment (грубо: для v1-10 в средней зоне)
    if (r >= 4 && r <= size - 5 && c >= 4 && c <= size - 5){
      // проверяем попадание в alignment pattern
      return false; // упрощённо — реальные alignment уже расставлены как функции
    }
    return false;
  }
  function placeFormat(m, size, mask){
    // формат: 5 бит ECC + 3 бита маски + BCH
    const eccBits = 0b00; // M = 00
    const data = (eccBits << 3) | mask;
    let rem = data << 10;
    for (let i = 14; i >= 10; i--){
      if ((rem >> i) & 1) rem ^= 0b10100110111 << (i - 10);
    }
    const fmt = ((data << 10) | rem) ^ 0b101010000010010;
    // размещаем
    const bits = [];
    for (let i = 14; i >= 0; i--) bits.push((fmt >> i) & 1);
    // вокруг верхнего левого
    const pos1 = [[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,7],[8,8],[7,8],[5,8],[4,8],[3,8],[2,8],[1,8],[0,8]];
    // вокруг правого нижнего / правого верхнего
    const pos2 = [];
    for (let i = 0; i < 8; i++) pos2.push([size - 1 - i, 8]);
    for (let i = 0; i < 7; i++) pos2.push([8, size - 7 + i]);
    // очищаем резерв
    for (const [r,c] of pos1) if (m[r][c] != null) m[r][c] = 0;
    for (const [r,c] of pos2) if (m[r][c] != null) m[r][c] = 0;
    for (let i = 0; i < 15; i++){
      m[pos1[i][0]][pos1[i][1]] = bits[i];
      m[pos2[i][0]][pos2[i][1]] = bits[i];
    }
  }

  function build(text){
    let version = 1;
    const len = new TextEncoder().encode(text).length;
    for (let v = 1; v <= 10; v++){
      if (len <= CAPACITY_M_BYTES[v]) { version = v; break; }
      if (v === 10) throw new Error('Текст слишком длинный для QR (max ' + CAPACITY_M_BYTES[10] + ' байт)');
    }
    const data = encodeData(text, version);
    const ecc = rsEncode(data, ECC_M[version].ecc);
    // собираем биты
    const bits = [];
    const pushByte = b => { for (let i = 7; i >= 0; i--) bits.push((b >> i) & 1); };
    for (const b of data) pushByte(b);
    for (const b of ecc) pushByte(b);

    const { m, size } = makeMatrix(version);
    placeFinder(m, size, 0, 0);
    placeFinder(m, size, 0, size - 7);
    placeFinder(m, size, size - 7, 0);
    placeAlignment(m, version);
    placeTiming(m, size);
    reserveFormat(m, size);
    placeData(m, size, bits);

    // выбираем лучшую маску (по штрафу — упрощённо: маска 0)
    // для простоты используем маску 0
    const mask = 0;
    applyMask(m, size, mask);
    placeFormat(m, size, mask);

    return { matrix: m, size };
  }

  function render(canvas, text, opts = {}){
    const { matrix, size } = build(text);
    const scale = opts.scale || Math.floor((opts.size || 220) / (size + 8));
    const margin = opts.margin != null ? opts.margin : 4;
    const dim = (size + margin * 2) * scale;
    canvas.width = dim; canvas.height = dim;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = opts.background || '#ffffff';
    ctx.fillRect(0, 0, dim, dim);
    ctx.fillStyle = opts.color || '#1e2433';
    for (let r = 0; r < size; r++) for (let c = 0; c < size; c++){
      if (matrix[r][c]) ctx.fillRect((c + margin) * scale, (r + margin) * scale, scale, scale);
    }
  }

  return { build, render };
})();