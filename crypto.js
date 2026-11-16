/* ============================================================
   crypto.js — шифрование данных в покое (at-rest)
   - Ключ выводится из пароля пользователя через PBKDF2-SHA256
   - Данные шифруются AES-GCM (256 бит)
   - Соль и IV хранятся рядом с шифротекстом
   ============================================================ */

const Crypto = (() => {
  const enc = new TextEncoder();
  const dec = new TextDecoder();
  const PBKDF2_ITER = 150000;
  const KEY_CACHE = new Map(); // uid -> CryptoKey

  function bufToB64(buf){
    const bytes = new Uint8Array(buf);
    let bin = '';
    for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin);
  }
  function b64ToBuf(b64){
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes.buffer;
  }
  function randBytes(n){
    const b = new Uint8Array(n);
    crypto.getRandomValues(b);
    return b;
  }

  async function deriveKey(password, saltB64){
    const salt = saltB64 ? new Uint8Array(b64ToBuf(saltB64)) : randBytes(16);
    const baseKey = await crypto.subtle.importKey(
      'raw', enc.encode(password), 'PBKDF2', false, ['deriveKey']
    );
    const key = await crypto.subtle.deriveKey(
      { name:'PBKDF2', salt, iterations:PBKDF2_ITER, hash:'SHA-256' },
      baseKey,
      { name:'AES-GCM', length:256 },
      false,
      ['encrypt','decrypt']
    );
    return { key, salt: bufToB64(salt) };
  }

  async function encryptString(plaintext, key){
    if (plaintext == null) return null;
    const iv = randBytes(12);
    const ct = await crypto.subtle.encrypt(
      { name:'AES-GCM', iv }, key, enc.encode(String(plaintext))
    );
    return {
      v: 1,
      iv: bufToB64(iv),
      ct: bufToB64(ct)
    };
  }

  async function decryptString(payload, key){
    if (payload == null) return null;
    if (typeof payload === 'string') return payload; // не зашифровано
    try {
      const iv = new Uint8Array(b64ToBuf(payload.iv));
      const ct = b64ToBuf(payload.ct);
      const pt = await crypto.subtle.decrypt({ name:'AES-GCM', iv }, key, ct);
      return dec.decode(pt);
    } catch(e){
      console.warn('decrypt failed', e);
      return '[не удалось расшифровать]';
    }
  }

  // Кеш ключей: uid -> { key, salt }
  async function getKey(uid, password, saltB64){
    const cached = KEY_CACHE.get(uid);
    if (cached) return cached;
    const { key, salt } = await deriveKey(password, saltB64);
    const result = { key, salt };
    KEY_CACHE.set(uid, result);
    return result;
  }
  function setKey(uid, key, salt){ KEY_CACHE.set(uid, { key, salt }); }
  function clearKey(uid){ KEY_CACHE.delete(uid); }
  function clearAll(){ KEY_CACHE.clear(); }

  return {
    deriveKey, encryptString, decryptString,
    getKey, setKey, clearKey, clearAll,
    bufToB64, b64ToBuf, randBytes
  };
})();