/* ============================================================
   app.js — основная логика Mainland
   ============================================================ */

/* ---------- КОНСТАНТЫ ---------- */
const EMOJIS = ['👍','❤️','😂','😮','😢','🔥','🎉','👏'];
const ONLINE_MS = 60000;
const DELETE_ALL_MS = 5 * 60 * 1000;
const EDIT_MS = 5 * 60 * 1000;
const TYPING_TTL = 5000;
const RESTORE_DAYS = 5;
const SUPPORT_ID = 'support';

/* ---------- СОСТОЯНИЕ UI ---------- */
let regState = {};
let currentChatId = null;
let currentOtherId = null;
let currentConvo = null;
let currentTab = 'chats';
let knownMsgIds = new Set();
let replyTarget = null;
let forwardTarget = null;
let deleteTargetId = null;
let profileMediaCat = 'media';
let typingTimeout = null;
let settingsContactState = null;
let newConvoKind = 'group';
let joinTargetId = null;
let chosenMedia = [];
let forgotCode = null;
let forgotAttempts = 0;
let forgotCooldown = 0;
let sessionKey = null; // CryptoKey текущего пользователя
let encryptEnabled = false;

/* ---------- УТИЛИТЫ ---------- */
const $ = id => document.getElementById(id);
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
}
function err(id, msg){ const el = $(id); if(el) el.textContent = msg; }
function isEmail(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
function isPhone(v){ return /^[+]?[\d\s\-()]{10,16}$/.test(v); }
function findUser(idOrNick){
  const v = String(idOrNick || '').toLowerCase();
  return DB.users.find(u => u.nick === v || u.contact === v);
}
function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function me(){ return DB.users.find(u => u.id === DB.session); }
function avatarHTML(u){
  return u.avatar ? `<img src="${u.avatar}" alt="">` : esc((u.name || '?')[0].toUpperCase());
}
function isDeleted(uid){ const u = DB.users.find(x => x.id === uid); return !!(u && u.deleted); }
function myContacts(){ return DB.contacts[DB.session] || []; }
function hashColor(id){ let h = 0; for(const c of String(id)) h = (h * 31 + c.charCodeAt(0)) % 360; return 'hsl(' + h + ',60%,45%)'; }

/* ---------- ШИФРОВАНИЕ ---------- */
async function initEncryption(password){
  const u = me();
  if (!u) return;
  const saltKey = 'salt_' + u.id;
  let saltB64 = await IDB.kvGet(saltKey);
  if (!saltB64){
    const r = await Crypto.deriveKey(password, null);
    saltB64 = r.salt;
    await IDB.kvSet(saltKey, saltB64);
    sessionKey = r.key;
  } else {
    const r = await Crypto.deriveKey(password, saltB64);
    sessionKey = r.key;
  }
  Crypto.setKey(u.id, sessionKey, saltB64);
}
async function encField(plain){
  if (!encryptEnabled || !sessionKey || plain == null) return plain;
  return await Crypto.encryptString(String(plain), sessionKey);
}
async function decField(payload){
  if (!encryptEnabled || !sessionKey) {
    if (payload && typeof payload === 'object' && payload.ct) return '[зашифровано]';
    return payload;
  }
  return await Crypto.decryptString(payload, sessionKey);
}
async function encryptMessageFields(msg){
  const out = { ...msg };
  if (msg.text != null) out.text = await encField(msg.text);
  if (msg.media && typeof msg.media === 'string' && msg.media.startsWith('data:')){
    out.media = await encField(msg.media);
  }
  return out;
}
async function decryptMessageFields(msg){
  const out = { ...msg };
  if (msg.text != null) out.text = await decField(msg.text);
  if (msg.media && typeof msg.media === 'object' && msg.media.ct){
    out.media = await decField(msg.media);
  }
  return out;
}

/* ---------- КОНФИДЕНЦИАЛЬНОСТЬ ---------- */
function priv(uid, key){ const u = DB.users.find(x => x.id === uid); return (u && u.privacy && u.privacy[key]) || 'all'; }
function canFindMe(u){
  if(u.deleted) return false;
  const p = priv(u.id, 'find');
  if(p === 'all') return true;
  if(p === 'none') return false;
  return myContactsOf(u.id).includes(DB.session);
}
function myContactsOf(uid){ return DB.contacts[uid] || []; }
function lastSeenVisible(viewerId, uid){
  const p = priv(uid, 'lastseen');
  if(p === 'all') return true;
  if(p === 'none') return false;
  return myContactsOf(uid).includes(viewerId);
}
function allowedToAddToGroup(targetId){
  const p = priv(targetId, 'groups');
  if(p === 'all') return true;
  if(p === 'none') return false;
  return myContactsOf(targetId).includes(DB.session);
}

/* ---------- ТЕМА / ЗВУК ---------- */
function applyTheme(){
  document.body.classList.toggle('dark', DB.theme === 'dark');
  $('theme-btn').textContent = DB.theme === 'dark' ? '☀' : '☾';
}
function toggleTheme(){ DB.theme = DB.theme === 'dark' ? 'light' : 'dark'; applyTheme(); }
function applyMute(){ $('mute-btn').textContent = DB.mute === '1' ? '🔇' : '🔊'; }
function toggleMute(){ DB.mute = DB.mute === '1' ? '0' : '1'; applyMute(); }

let audioCtx = null;
function playNotifSound(){
  if(DB.mute === '1') return;
  try{
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if(audioCtx.state === 'suspended') audioCtx.resume();
    const t = audioCtx.currentTime;
    [[880, 0], [1174.66, 0.13]].forEach(([freq, delay]) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine'; osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, t + delay);
      gain.gain.exponentialRampToValueAtTime(0.22, t + delay + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + delay + 0.28);
      osc.connect(gain); gain.connect(audioCtx.destination);
      osc.start(t + delay); osc.stop(t + delay + 0.3);
    });
  }catch(e){}
}

/* ---------- НЕПРОЧИТАННЫЕ ---------- */
function markRead(cid){
  const r = DB.read;
  (r[DB.session] = r[DB.session] || {})[cid] = Date.now();
  DB.read = r;
}
function myHidden(){ return DB.hiddenChats[DB.session] || []; }
function amIParticipant(cid){
  if(cid === SUPPORT_ID) return true;
  if(cid.includes(DB.session)) return true;
  const c = DB.convos.find(x => x.id === cid);
  return !!(c && c.members.includes(DB.session));
}
function unreadCount(cid, msgs){
  if(myHidden().includes(cid)) return 0;
  const since = (DB.read[DB.session] || {})[cid] || 0;
  return msgs.filter(m => m.from !== DB.session && m.ts > since && !m.deletedForAll && !(m.deletedFor || []).includes(DB.session)).length;
}
function totalUnread(){
  let n = 0;
  for(const [cid, msgs] of Object.entries(DB.chats)) if(amIParticipant(cid)) n += unreadCount(cid, msgs);
  return n;
}
function updateTabBadge(){
  const n = totalUnread();
  const b = $('tab-badge');
  b.textContent = n > 99 ? '99+' : n;
  b.style.display = n > 0 ? 'inline-block' : 'none';
}
function unhideChat(cid){
  const h = DB.hiddenChats;
  if((h[DB.session] || []).includes(cid)){
    h[DB.session] = h[DB.session].filter(x => x !== cid);
    DB.hiddenChats = h;
  }
}

/* ---------- АКТИВНОСТЬ ---------- */
function ping(){ if(!DB.session) return; const a = DB.activity; a[DB.session] = Date.now(); DB.activity = a; }
function isOnline(uid){ return !isDeleted(uid) && (DB.activity[uid] || 0) > Date.now() - ONLINE_MS; }
function lastSeenText(uid){
  if(!lastSeenVisible(DB.session, uid)) return 'скрыто настройками приватности';
  if(isOnline(uid)) return 'online';
  const ts = DB.activity[uid] || (DB.users.find(u=>u.id===uid)||{}).created || Date.now();
  return 'был(а) в сети ' + new Date(ts).toLocaleString('ru-RU',{day:'numeric',month:'long',hour:'2-digit',minute:'2-digit'});
}

/* ---------- ТЕХПОДДЕРЖКА ---------- */
function ensureSupportChat(){
  if(!DB.session) return;
  if(!DB.users.some(u => u.id === 'support')){
    DB.users = [...DB.users, { id:'support', nick:'support', name:'🛟 Техподдержка', contact:'support@mainland', pass:'', created:Date.now(), system:true }];
  }
  const chats = DB.chats;
  if(!chats[SUPPORT_ID]){
    chats[SUPPORT_ID] = [{
      id: 'm' + Date.now(), from: 'support', system: true,
      text: '🛟 Это ваш личный чат поддержки. Сообщения видны только вам. Опишите проблему или пожелание.',
      ts: Date.now(), reactions: {}
    }];
    DB.chats = chats;
  }
}

/* ---------- УВЕДОМЛЕНИЯ ---------- */
function showToast(sender, preview, onClick){
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<div class="avatar">${avatarHTML(sender)}</div>
    <div class="t-info"><div class="t-name">${esc(sender.name)}</div><div class="t-text">${preview}</div></div>`;
  toast.onclick = () => { dismiss(); onClick && onClick(); };
  $('toasts').appendChild(toast);
  const dismiss = () => { toast.classList.add('out'); setTimeout(() => toast.remove(), 300); };
  setTimeout(dismiss, 5000);
}
function msgPreview(m){
  if(!m) return '';
  if(m.system) return esc(m.text);
  if(m.deletedForAll) return '🚫 Сообщение удалено';
  if(m.mediaType === 'voice') return '🎤 Голосовое сообщение';
  if(m.mediaType === 'videocircle') return '📹 Видеосообщение';
  if(m.mediaType === 'document') return '📄 ' + esc(m.fileName || 'Документ');
  if(m.mediaType === 'location') return '📍 Местоположение';
  if(m.mediaType === 'contact') return '👤 Контакт';
  if(m.media) return m.mediaType === 'video' ? '🎬 Видео' : '📷 Фото';
  if(m.forwarded) return '↪ ' + esc(typeof m.text === 'string' ? m.text : 'Медиа');
  return esc(typeof m.text === 'string' ? m.text : '');
}

/* ---------- ВХОД / РЕГИСТРАЦИЯ ---------- */
function sendCode(resend){
  const v = $('reg-id').value.trim();
  err('reg1-err','');
  if(!isEmail(v) && !isPhone(v)) return err('reg1-err','Введите корректный номер или email.');
  const exist = findUser(v);
  if(exist && exist.deleted) return err('reg1-err','Этот номер/почта принадлежал удалённому аккаунту.');
  if(exist) return err('reg1-err','Этот номер/почта уже зарегистрирован.');
  regState = { contact: v, code: String(Math.floor(100000 + Math.random()*900000)) };
  $('reg-dest').textContent = v;
  $('demo-code').textContent = regState.code;
  $('reg-code').value = '';
  err('reg2-err','');
  showScreen('scr-reg-step2');
}
function verifyCode(){
  err('reg2-err','');
  if($('reg-code').value.trim() !== regState.code) return err('reg2-err','Неверный код. Попробуйте ещё раз.');
  err('reg3-err','');
  showScreen('scr-reg-step3');
}
async function doRegister(){
  err('reg3-err','');
  const nick = $('reg-nick').value.trim().toLowerCase();
  const name = $('reg-name').value.trim();
  const p1 = $('reg-pass').value, p2 = $('reg-pass2').value;
  if(nick.length < 3 || !/^[a-z0-9_\.]+$/.test(nick)) return err('reg3-err','Ник: мин. 3 символа, латиница/цифры/_/.');
  if(DB.users.some(u => u.nick === nick)) return err('reg3-err','Этот никнейм занят.');
  if(!name) return err('reg3-err','Укажите имя.');
  if(p1.length < 6) return err('reg3-err','Пароль должен быть не короче 6 символов.');
  if(p1 !== p2) return err('reg3-err','Пароли не совпадают.');
  const user = { id: 'u' + Date.now(), contact: regState.contact, nick, name, pass: p1, created: Date.now(),
    privacy: { find:'all', lastseen:'all', groups:'all' } };
  DB.users = [...DB.users, user];
  DB.session = user.id;
  await initEncryption(p1);
  ping();
  enterApp();
}
async function doLogin(){
  err('login-err','');
  const v = $('login-id').value.trim().toLowerCase();
  const u = findUser(v);
  if(!u || u.pass !== $('login-pass').value) return err('login-err','Неверный логин или пароль.');
  if(u.deleted){
    const left = RESTORE_DAYS * 24 * 60 * 60 * 1000 - (Date.now() - (u.deletedAt || 0));
    if(left > 0){
      const days = Math.ceil(left / (24 * 60 * 60 * 1000));
      if(confirm('Этот аккаунт был удалён.\nПричина: ' + (u.deletedReason || 'не указана') + '\n\nЕго ещё можно восстановить (осталось ~' + days + ' дн.). Восстановить и войти?')){
        const users = DB.users;
        const acc = users.find(x => x.id === u.id);
        acc.deleted = false; acc.deletedReason = null; acc.deletedAt = null;
        DB.users = users;
      } else return;
    } else {
      return err('login-err', 'Аккаунт удалён более ' + RESTORE_DAYS + ' дней назад и восстановлению не подлежит.');
    }
  }
  DB.session = u.id;
  encryptEnabled = DB.encryption === '1';
  await initEncryption($('login-pass').value);
  ping();
  enterApp();
}
function doLogout(){
  clearInterval(incomingTimer);
  DB.session = null;
  Crypto.clearAll();
  sessionKey = null;
  $('login-pass').value = '';
  showScreen('scr-login');
}
function deleteAccount(){
  const reason = prompt('Укажите причину удаления аккаунта — она будет видна другим пользователям:');
  if(reason === null) return;
  if(!reason.trim()) return alert('Причина не указана — удаление отменено.');
  if(!confirm('Удалить аккаунт?\n\nВ течение ' + RESTORE_DAYS + ' дней его можно восстановить, просто войдя снова. По истечении срока аккаунт исчезнет безвозвратно.')) return;
  const users = DB.users;
  const u = users.find(x => x.id === DB.session);
  u.deleted = true;
  u.deletedReason = reason.trim();
  u.deletedAt = Date.now();
  DB.users = users;
  doLogout();
  alert('Аккаунт удалён.');
}
async function enterApp(){
  const u = me();
  if(!u || u.deleted) return doLogout();
  $('drawer-nick').textContent = '@' + u.nick;
  if('Notification' in window && Notification.permission === 'default') Notification.requestPermission();
  ensureSupportChat();
  await processScheduled();
  openMain();
}

/* ---------- ГЛАВНЫЙ ИНТЕРФЕЙС ---------- */
function openMain(){
  if(me() && me().deleted) return doLogout();
  currentChatId = null;
  currentConvo = null;
  currentOtherId = null;
  cancelReply();
  showScreen('scr-main');
  renderList();
  updateTabBadge();
  startTimers();
}
function switchTab(tab){
  currentTab = tab;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  $('tab-' + tab).classList.add('active');
  $('search-box-wrap').style.display = (tab === 'chats') ? 'none' : 'block';
  $('create-row').style.display = (tab === 'search') ? 'flex' : 'none';
  $('search-input').placeholder = tab === 'contacts' ? 'Поиск по контактам...' : 'Найти людей, группы и каналы...';
  renderList();
}
function statusBadge(uid){
  if(uid === 'support') return '<div class="sub">личный чат поддержки</div>';
  if(isDeleted(uid)) return '<div class="sub deleted">🚫 аккаунт удалён</div>';
  return isOnline(uid)
    ? '<div class="sub onl">● онлайн</div>'
    : '<div class="sub">' + esc(lastSeenText(uid)) + '</div>';
}
function renderList(){
  const q = $('search-input').value.trim().toLowerCase();
  const list = $('list');
  let html = '';
  if(currentTab === 'search'){
    const found = DB.users.filter(u =>
      u.id !== DB.session && u.id !== 'support' && canFindMe(u) &&
      (!q || u.nick.toLowerCase().includes(q) || u.name.toLowerCase().includes(q) || u.contact.toLowerCase().includes(q))
    );
    const foundConvos = DB.convos.filter(c => !c.hidden && (!q || c.title.toLowerCase().includes(q)));
    if(!found.length && !foundConvos.length){ list.innerHTML = '<div class="empty">Ничего не найдено</div>'; return; }
    if(foundConvos.length){
      html += '<div class="sec-title">Группы и каналы</div>';
      html += foundConvos.map(c => {
        const member = c.members.includes(DB.session);
        return `<div class="item" onclick="${member ? `openConvoChat('${c.id}')` : `openJoinConvo('${c.id}')`}">
          <div class="avatar sq">${esc(c.title[0].toUpperCase())}</div>
          <div class="info"><div class="name">${esc(c.title)}</div><div class="sub">${c.kind === 'channel' ? '📢 канал' : '👥 группа'} · ${c.members.length} ${c.kind === 'channel' ? 'подписчиков' : 'участников'}</div></div>
          <div class="action">${member ? 'Открыть →' : '＋ Вступить'}</div>
        </div>`;
      }).join('');
    }
    if(found.length){
      html += '<div class="sec-title">Люди</div>';
      html += found.map(u => {
        const inContacts = myContacts().includes(u.id);
        const sub = u.deleted
          ? '<div class="sub deleted">🚫 аккаунт удалён</div>'
          : `<div class="sub">@${esc(u.nick)} · ${esc(u.contact)}</div>`;
        return `<div class="item" onclick="userClick('${u.id}')">
          <div class="avatar ${u.deleted ? 'deleted' : ''}">${avatarHTML(u)}<div class="dot ${isOnline(u.id)?'on':''}"></div></div>
          <div class="info"><div class="name">${esc(u.name)}</div>${sub}</div>
          <div class="action">${u.deleted ? '—' : (inContacts ? 'Написать →' : '+ Добавить')}</div>
        </div>`;
      }).join('');
    }
  }
  if(currentTab === 'contacts'){
    const contacts = myContacts()
      .map(id => DB.users.find(u => u.id === id)).filter(Boolean)
      .filter(u => !q || u.nick.toLowerCase().includes(q) || u.name.toLowerCase().includes(q) || u.contact.toLowerCase().includes(q));
    if(!contacts.length){ list.innerHTML = '<div class="empty">Контактов пока нет.<br>Найдите людей во вкладке «Поиск».</div>'; return; }
    html = contacts.map(u => `<div class="item" onclick="openProfile('${u.id}')">
      <div class="avatar ${u.deleted ? 'deleted' : ''}">${avatarHTML(u)}<div class="dot ${isOnline(u.id)?'on':''}"></div></div>
      <div class="info"><div class="name">${esc(u.name)}</div>${statusBadge(u.id)}</div>
      ${u.deleted ? '' : `<div class="action" onclick="event.stopPropagation();openChat('${u.id}')">Написать →</div>`}
    </div>`).join('');
  }
  if(currentTab === 'chats'){
    const entries = [];
    ensureSupportChat();
    const sMsgs = DB.chats[SUPPORT_ID] || [];
    if(sMsgs.length) entries.push({ cid: SUPPORT_ID, kind:'support', msgs: sMsgs, last: sMsgs[sMsgs.length-1] });
    for(const [cid, msgs] of Object.entries(DB.chats)){
      if(cid === SUPPORT_ID) continue;
      if(!amIParticipant(cid) || myHidden().includes(cid) || !msgs.length) continue;
      if(cid.includes('|')){
        const otherId = cid.split('|').find(x => x !== DB.session);
        const u = DB.users.find(x => x.id === otherId);
        if(u) entries.push({ cid, kind:'user', u, msgs, last: msgs[msgs.length-1] });
      } else {
        const c = DB.convos.find(x => x.id === cid);
        if(c && c.members.includes(DB.session)) entries.push({ cid, kind:c.kind, convo:c, msgs, last: msgs[msgs.length-1] });
      }
    }
    const filtered = entries
      .filter(c => {
        if(!q) return true;
        if(c.kind === 'support') return 'техподдержка'.includes(q);
        if(c.u) return c.u.nick.toLowerCase().includes(q) || c.u.name.toLowerCase().includes(q);
        return c.convo.title.toLowerCase().includes(q);
      })
      .sort((a,b) => {
        if(a.kind === 'support') return -1;
        if(b.kind === 'support') return 1;
        return b.last.ts - a.last.ts;
      });
    if(!filtered.length){ list.innerHTML = '<div class="empty">Чатов пока нет.<br>Найдите людей или создайте группу!</div>'; return; }
    html = filtered.map(c => {
      if(c.kind === 'support'){
        const un = unreadCount(c.cid, c.msgs);
        return `<div class="item ${un ? 'unread' : ''}" onclick="openSupport()">
          <div class="avatar sq" style="background:#2ecc71;">🛟</div>
          <div class="info"><div class="name">🛟 Техподдержка</div><div class="sub">${msgPreview(c.last)}</div></div>
          ${un ? `<div class="unread-badge">${un}</div>` : ''}
        </div>`;
      }
      const un = unreadCount(c.cid, c.msgs);
      if(c.kind === 'user'){
        const u = c.u;
        let preview, subCls = '';
        if(u.deleted){ preview = '🚫 аккаунт удалён — переписка невозможна'; subCls = 'deleted'; }
        else { preview = msgPreview(c.last); if(c.last.replyTo) preview = '↩ ' + preview; }
        return `<div class="item ${un ? 'unread' : ''}" onclick="openChat('${u.id}')">
          <div class="avatar ${u.deleted ? 'deleted' : ''}">${avatarHTML(u)}<div class="dot ${isOnline(u.id)?'on':''}"></div></div>
          <div class="info"><div class="name">${esc(u.name)}</div><div class="sub ${subCls}">${preview}</div></div>
          ${un ? `<div class="unread-badge">${un}</div>` : ''}
        </div>`;
      }
      const convo = c.convo;
      let preview = msgPreview(c.last);
      if(c.last.replyTo) preview = '↩ ' + preview;
      return `<div class="item ${un ? 'unread' : ''}" onclick="openConvoChat('${convo.id}')">
        <div class="avatar sq">${esc(convo.title[0].toUpperCase())}</div>
        <div class="info"><div class="name">${esc(convo.title)}</div><div class="sub">${convo.kind === 'channel' ? '📢' : '👥'} ${preview}</div></div>
        ${un ? `<div class="unread-badge">${un}</div>` : ''}
      </div>`;
    }).join('');
  }
  list.innerHTML = html;
}
function userClick(userId){
  if(isDeleted(userId)) return;
  const c = DB.contacts;
  const mine = c[DB.session] || [];
  if(!mine.includes(userId)){
    c[DB.session] = [...mine, userId];
    DB.contacts = c;
    renderList();
  } else {
    openChat(userId);
  }
}

/* ---------- ГРУППЫ / КАНАЛЫ ---------- */
function openCreate(kind){
  newConvoKind = kind;
  $('nc-title-h').textContent = kind === 'channel' ? 'Создать канал' : 'Создать группу';
  $('nc-title').placeholder = kind === 'channel' ? 'Название канала' : 'Название группы';
  $('nc-title').value = '';
  $('nc-private').checked = false;
  $('newconvo-modal').classList.add('open');
  setTimeout(() => $('nc-title').focus(), 60);
}
async function createConvo(){
  const title = $('nc-title').value.trim();
  if(title.length < 2) return alert('Введите название (минимум 2 символа).');
  const convo = {
    id: 'g' + Date.now(), kind: newConvoKind, title,
    ownerId: DB.session, members: [DB.session],
    hidden: $('nc-private').checked, created: Date.now()
  };
  DB.convos = [...DB.convos, convo];
  $('newconvo-modal').classList.remove('open');
  await pushMessage(convo.id, { id:'m'+Date.now(), from:DB.session, text: newConvoKind === 'channel' ? '📢 Канал создан' : '👥 Группа создана', ts:Date.now(), reactions:{}, system:true });
  if(newConvoKind === 'group') openConvoProfile(convo.id);
  else openConvoChat(convo.id);
}
function openJoinConvo(id){
  const c = DB.convos.find(x => x.id === id);
  if(!c) return;
  joinTargetId = id;
  $('join-title').textContent = (c.kind === 'channel' ? '📢 ' : '👥 ') + c.title;
  $('join-note').textContent = (c.kind === 'channel' ? 'Канал' : 'Группа') + ' · ' + c.members.length + (c.kind === 'channel' ? ' подписчиков' : ' участников') + (c.hidden ? ' · приватный' : ' · публичный');
  $('join-modal').classList.add('open');
}
function joinConvo(){
  const convos = DB.convos;
  const c = convos.find(x => x.id === joinTargetId);
  $('join-modal').classList.remove('open');
  if(!c) return;
  if(!c.members.includes(DB.session)) c.members.push(DB.session);
  DB.convos = convos;
  openConvoChat(c.id);
}
function openConvoChat(cid){
  const convo = DB.convos.find(x => x.id === cid);
  if(!convo) return;
  currentConvo = convo;
  currentOtherId = null;
  currentChatId = cid;
  unhideChat(cid);
  markRead(cid);
  cancelReply();
  $('chat-avatar').classList.remove('deleted');
  $('chat-avatar').classList.add('sq');
  $('chat-dot').style.display = 'none';
  $('chat-avatar-inner').innerHTML = esc(convo.title[0].toUpperCase());
  $('chat-name').textContent = convo.title;
  updateConvoHeader();
  const inp = $('msg-input');
  if(convo.kind === 'channel' && convo.ownerId !== DB.session){
    inp.disabled = true;
    inp.placeholder = 'Только владелец канала может писать';
  } else {
    inp.disabled = false;
    inp.placeholder = 'Сообщение...';
  }
  showScreen('scr-chat');
  renderMessages();
  updateTabBadge();
}
function updateConvoHeader(){
  if(!currentConvo) return;
  const c = currentConvo;
  const n = c.members.length;
  const onlineN = c.members.filter(id => isOnline(id)).length;
  $('chat-sub').textContent = (c.kind === 'channel' ? '📢 канал' : '👥 группа') + ' · ' + n + (c.kind === 'channel' ? ' подписчиков' : ' участников') + ' · ' + onlineN + ' онлайн';
  $('chat-sub').style.color = 'var(--muted)';
}
function canPostHere(){
  if(currentChatId === SUPPORT_ID) return true;
  if(!currentConvo) return !isDeleted(currentOtherId);
  if(currentConvo.kind === 'channel') return currentConvo.ownerId === DB.session;
  return true;
}

/* ---------- ОТКРЫТИЕ ЧАТА ---------- */
function chatIdWith(otherId){ return [DB.session, otherId].sort().join('|'); }
function openChat(otherId){
  if(otherId === 'support') return openSupport();
  currentOtherId = otherId;
  currentConvo = null;
  currentChatId = chatIdWith(otherId);
  unhideChat(currentChatId);
  markRead(currentChatId);
  const u = DB.users.find(x => x.id === otherId);
  if(!u) return;
  $('chat-name').textContent = u.name;
  updateChatHeader();
  cancelReply();
  const inp = $('msg-input');
  if(u.deleted){
    inp.disabled = true;
    inp.placeholder = 'Невозможно отправить сообщение — аккаунт удалён';
  } else {
    inp.disabled = false;
    inp.placeholder = 'Сообщение...';
  }
  showScreen('scr-chat');
  renderMessages();
  updateTabBadge();
}
function openSupport(){
  ensureSupportChat();
  currentConvo = null; currentOtherId = 'support';
  currentChatId = SUPPORT_ID;
  markRead(SUPPORT_ID);
  $('chat-name').textContent = '🛟 Техподдержка';
  $('chat-sub').textContent = 'личный чат — виден только вам';
  $('chat-sub').style.color = 'var(--muted)';
  $('chat-avatar-inner').innerHTML = '🛟';
  $('chat-avatar').classList.add('sq');
  $('chat-avatar').classList.remove('deleted');
  $('chat-dot').style.display = 'none';
  $('msg-input').disabled = false;
  $('msg-input').placeholder = 'Опишите проблему...';
  showScreen('scr-chat');
  renderMessages();
}
function updateChatHeader(){
  if(currentChatId === SUPPORT_ID) return;
  const u = DB.users.find(x => x.id === currentOtherId);
  if(!u) return;
  $('chat-avatar').classList.remove('sq');
  $('chat-dot').style.display = 'block';
  $('chat-avatar-inner').innerHTML = avatarHTML(u);
  $('chat-avatar').classList.toggle('deleted', !!u.deleted);
  $('chat-dot').className = 'dot' + (!u.deleted && isOnline(u.id) ? ' on' : '');
  const st = $('chat-sub');
  if(u.deleted){
    st.textContent = '🚫 аккаунт удалён';
    st.style.color = 'var(--danger)';
    return;
  }
  st.textContent = isOnline(u.id) ? '● онлайн' : lastSeenText(u.id);
  st.style.color = isOnline(u.id) ? 'var(--ok)' : 'var(--muted)';
}

/* ---------- РЕНДЕР СООБЩЕНИЙ ---------- */
function renderMessages(){
  const raw = (DB.chats[currentChatId] || []).filter(m => !(m.deletedFor || []).includes(DB.session));
  const box = $('messages');
  box.innerHTML = '';
  (async () => {
    for (const m of raw){
      const dec = await decryptMessageFields(m);
      box.insertAdjacentHTML('beforeend', renderOneMessage(dec));
    }
    if(!raw.length) box.innerHTML = '<div class="empty">Напишите первое сообщение 👋</div>';
    box.scrollTop = box.scrollHeight;
  })();
}
function renderOneMessage(m){
  const t = new Date(m.ts).toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'});
  if(m.system){
    return `<div class="system-msg" data-mid="${m.id}">${esc(m.text)} · ${t}</div>`;
  }
  if(m.deletedForAll){
    return `<div class="msg-wrap ${m.from === DB.session ? 'me' : 'them'}" data-mid="${m.id}">
      <div class="msg ${m.from === DB.session ? 'me' : 'them'} deleted-msg">🚫 Сообщение удалено</div>
    </div>`;
  }
  const body = m.media ? mediaBody(m) : esc(m.text);
  const edited = m.edited ? ' <span class="edited">(изменено)</span>' : '';
  const fwd = m.forwarded ? '<span class="fwd-label">↪ Пересланное сообщение</span>' : '';
  const own = m.from === DB.session;
  const ticks = own ? msgStatus(m) : '';
  const sender = (currentConvo && !own)
    ? `<div class="sender" style="color:${hashColor(m.from)}">${esc((DB.users.find(u=>u.id===m.from)||{}).name || 'Пользователь')}</div>`
    : '';
  const editBtn = own
    ? (Date.now() - m.ts > EDIT_MS
        ? `<button onclick="editExpired()" style="opacity:.35;cursor:not-allowed">✎</button>`
        : `<button onclick="editMessage('${m.id}')">✎</button>`)
    : '';
  const reactions = Object.entries(m.reactions || {})
    .map(([e, ids]) => `<span class="reaction ${ids.includes(DB.session)?'mine':''}" onclick="toggleReaction('${m.id}','${e}')">${e} ${ids.length}</span>`)
    .join('');
  const actions = `
    <div class="msg-actions">
      <button onclick="toggleEmojiBar('${m.id}')">😊</button>
      <button onclick="startReply('${m.id}')">↩</button>
      <button onclick="startForward('${m.id}')">↪</button>
      ${editBtn}
      <button onclick="deleteMessage('${m.id}')">🗑</button>
    </div>
    <div class="emoji-bar" id="emoji-${m.id}">${EMOJIS.map(e => `<span onclick="toggleReaction('${m.id}','${e}')">${e}</span>`).join('')}</div>`;
  return `<div class="msg-wrap ${own?'me':'them'}" id="mw-${m.id}" data-mid="${m.id}">
    <div class="msg ${own?'me':'them'}">${sender}${fwd}${quoteHTML(m.replyTo)}${body}${edited}<span class="time">${t}${ticks}</span></div>
    ${reactions ? `<div class="reactions">${reactions}</div>` : ''}
    ${actions}
  </div>`;
}
function msgStatus(m){
  if(currentConvo || !currentChatId || currentChatId === SUPPORT_ID) return '';
  const otherId = currentChatId.split('|').find(x => x !== DB.session);
  const readTs = ((DB.read[otherId] || {})[currentChatId]) || 0;
  if(readTs >= m.ts) return '<span class="ticks read">✓✓</span>';
  return '<span class="ticks">✓</span>';
}
function quoteHTML(q){
  if(!q) return '';
  const jump = q.id ? `onclick="jumpToMsg('${q.id}')"` : '';
  return `<div class="quote" ${jump}><div class="q-name">${esc(q.name)}</div><div class="q-text">${esc(q.preview)}</div></div>`;
}
function jumpToMsg(id){
  const el = $('mw-' + id);
  if(!el) return;
  el.scrollIntoView({ behavior:'smooth', block:'center' });
  el.classList.remove('flash');
  void el.offsetWidth;
  el.classList.add('flash');
}
function mediaBody(m){
  if(m.mediaType === 'voice'){
    let bars = '';
    for(let i = 0; i < 26; i++){
      const h = 5 + ((m.id.charCodeAt(i % m.id.length) + i * 7) % 15);
      bars += `<i style="height:${h}px"></i>`;
    }
    return `<div class="voice-msg" onclick="toggleVoice('${m.id}', this)">
      <button class="v-play">▶</button>
      <div class="wave" onclick="seekVoice(event, '${m.id}', this)">${bars}</div>
      <span class="v-dur" id="dur-${m.id}">${fmtDur(m.duration || 0)}</span>
      <audio class="voice-audio" id="aud-${m.id}" src="${m.media}" preload="auto" onerror="mediaError(this)"></audio>
    </div>`;
  }
  if(m.mediaType === 'videocircle'){
    return `<div class="vcircle-wrap">
      <video class="vcircle" id="vc-${m.id}" src="${m.media}" playsinline preload="metadata" onerror="mediaError(this)"
        onclick="event.stopPropagation();this.muted=false; this.paused ? this.play() : this.pause();"
        ondblclick="videoSeek(event,'${m.id}')"></video>
      <div style="font-size:11px;opacity:.6;margin-top:3px;">📹 Видеосообщение · ${fmtDur(m.duration || 0)}</div>
    </div>`;
  }
  if(m.mediaType === 'video') return `<video src="${m.media}" controls playsinline onerror="mediaError(this)"></video>`;
  if(m.mediaType === 'document') return `<div class="file-item"><span class="f-ico">📄</span><a href="${m.media}" download="${esc(m.fileName || 'document')}">${esc(m.fileName || 'Скачать документ')}</a></div>`;
  return `<img src="${m.media}" onerror="mediaError(this)" onclick="window.open('${m.media}')">`;
}

/* ---------- ОТПРАВКА / ХРАНЕНИЕ ---------- */
async function pushMessage(cid, msg){
  // шифруем перед сохранением, если включено
  const stored = encryptEnabled ? await encryptMessageFields(msg) : msg;
  const chats = DB.chats;
  (chats[cid] = chats[cid] || []).push(stored);
  DB.chats = chats;
  knownMsgIds.add(msg.id);
  ping();
}

async function sendMsg(){
  const text = $('msg-input').value.trim();
  if(!text) return;
  if(!canPostHere()) return;
  await pushMessage(currentChatId, {
    id: 'm' + Date.now(), from: DB.session, text, ts: Date.now(), reactions: {},
    replyTo: replyTarget
  });
  $('msg-input').value = '';
  cancelReply();
  renderMessages();
}

/* ---------- ОТЛОЖЕННЫЕ СООБЩЕНИЯ (IndexedDB) ---------- */
async function scheduleSend(){
  closeSendModal();
  const when = prompt('Когда отправить? Формат: YYYY-MM-DD HH:MM',
    new Date(Date.now() + 3600000).toISOString().slice(0,16).replace('T',' '));
  if(!when) return;
  const ts = new Date(when.replace(' ', 'T')).getTime();
  if(!ts || ts <= Date.now()) return alert('Укажите будущую дату.');
  const text = $('msg-input').value.trim();
  if(!text) return alert('Введите сообщение.');
  const msg = {
    id: 'm' + Date.now(), from: DB.session, text, ts: Date.now(), reactions: {},
    replyTo: replyTarget
  };
  await IDB.addScheduled(currentChatId, msg, ts);
  $('msg-input').value = '';
  cancelReply();
  showToast({ name: 'Запланировано ✓' }, 'Будет отправлено ' + new Date(ts).toLocaleString('ru-RU'), () => {});
}
async function processScheduled(){
  const due = await IDB.getDueScheduled(Date.now());
  for (const item of due){
    await pushMessage(item.cid, item.msg);
    await IDB.deleteScheduled(item.id);
  }
}
async function silentSend(){
  closeSendModal();
  const text = $('msg-input').value.trim();
  if(!text) return;
  await pushMessage(currentChatId, {
    id: 'm' + Date.now(), from: DB.session, text,
    ts: Date.now(), reactions: {}, replyTo: replyTarget, silent: true
  });
  $('msg-input').value = '';
  cancelReply();
  renderMessages();
}
function closeSendModal(){ $('send-modal').classList.remove('open'); }

/* ---------- QR ---------- */
function showQR(userId){
  const u = DB.users.find(x => x.id === userId);
  if(!u) return;
  const data = 'mainland://user/' + u.nick;
  $('qr-title').textContent = 'QR-код @' + u.nick;
  $('qr-note').textContent = 'Отсканируйте, чтобы найти @' + u.nick;
  $('qr-modal').classList.add('open');
  try { QR.render($('qr-canvas'), data, { size: 220, margin: 2, color: '#1e2433', background: '#ffffff' }); }
  catch(e){ alert('Не удалось сгенерировать QR: ' + e.message); }
}
function copyNick(nick){
  const val = '@' + nick;
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(val).then(() => alert('Ник скопирован: ' + val)).catch(() => prompt('Скопируйте ник:', val));
  } else prompt('Скопируйте ник:', val);
}

/* ---------- ГОЛОС / ВИДЕО ---------- */
function fmtDur(ms){
  const s = Math.round(ms / 1000);
  return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
}
function mediaError(el){ el.outerHTML = '<div style="font-size:13px;opacity:.7;padding:6px 0;">⚠️ Не удалось воспроизвести файл</div>'; }
function updateVoiceProgress(id){
  const a = $('aud-' + id); if(!a) return;
  const wrap = a.closest('.voice-msg');
  const bars = wrap.querySelectorAll('.wave i');
  const p = a.duration ? a.currentTime / a.duration : 0;
  const n = Math.floor(bars.length * p);
  bars.forEach((b, i) => b.classList.toggle('played', i <= n));
}
function toggleVoice(id, el){
  const a = $('aud-' + id);
  if(!a) return;
  document.querySelectorAll('audio.voice-audio').forEach(x => {
    if(x !== a && !x.paused){
      x.pause();
      const b = x.closest('.voice-msg').querySelector('.v-play');
      if(b) b.textContent = '▶';
    }
  });
  const btn = el.querySelector('.v-play');
  if(a.paused){ a.play().catch(()=>{}); btn.textContent = '⏸'; }
  else { a.pause(); btn.textContent = '▶'; }
  a.ontimeupdate = () => { const d=$('dur-'+id); if(d) d.textContent=fmtDur(a.currentTime*1000); updateVoiceProgress(id); };
  a.onended = () => { btn.textContent = '▶'; updateVoiceProgress(id); };
}
function seekVoice(event,id,track){
  event.stopPropagation();
  const a = $('aud-'+id);
  if(!a || !Number.isFinite(a.duration) || a.duration<=0) return;
  const r = track.getBoundingClientRect();
  a.currentTime = Math.max(0, Math.min(a.duration, (event.clientX-r.left)/r.width*a.duration));
  updateVoiceProgress(id);
}
function videoSeek(e, id){
  const v = document.getElementById('vc-' + id);
  if(!v || !v.duration) return;
  const r = v.getBoundingClientRect();
  const dx = e.clientX - (r.left + r.width/2);
  const dy = e.clientY - (r.top + r.height/2);
  let ang = Math.atan2(dy, dx) * 180 / Math.PI + 90;
  if(ang < 0) ang += 360;
  v.currentTime = v.duration * (ang / 360);
  e.stopPropagation();
}

let mediaRecorder = null, recChunks = [], recStream = null, recStart = 0, recTimerInt = null, recMode = null;
async function startVoiceRec(){
  if(!canPostHere()) return alert('Невозможно отправить сообщение.');
  if(typeof MediaRecorder === 'undefined') return alert('Ваш браузер не поддерживает запись.');
  try { recStream = await navigator.mediaDevices.getUserMedia({ audio: true }); }
  catch(e){ return alert('Нет доступа к микрофону (нужен HTTPS/localhost).'); }
  beginRecording('voice');
}
async function startVideoRec(){
  if(!canPostHere()) return alert('Невозможно отправить сообщение.');
  if(typeof MediaRecorder === 'undefined') return alert('Ваш браузер не поддерживает запись.');
  try { recStream = await navigator.mediaDevices.getUserMedia({ video: { width: 480, height: 480 }, audio: true }); }
  catch(e){ return alert('Нет доступа к камере (нужен HTTPS/localhost).'); }
  beginRecording('video');
}
function beginRecording(mode){
  recMode = mode; recChunks = [];
  const ov = $('rec-overlay');
  ov.dataset.locked = '0'; ov.dataset.cancel = '0';
  if(mode === 'video'){
    const pv = $('rec-preview');
    pv.srcObject = recStream;
    pv.style.display = 'block';
  } else {
    $('rec-preview').style.display = 'none';
  }
  const mimeCandidates = mode === 'video' ? ['video/mp4','video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/webm'] : ['audio/mp4','audio/webm;codecs=opus','audio/webm'];
  const mimeType = mimeCandidates.find(t => MediaRecorder.isTypeSupported?.(t));
  mediaRecorder = new MediaRecorder(recStream, mimeType ? {mimeType} : undefined);
  mediaRecorder.ondataavailable = e => { if(e.data.size) recChunks.push(e.data); };
  mediaRecorder.onstop = saveRecording;
  mediaRecorder.start();
  recStart = Date.now();
  recTimerInt = setInterval(() => { $('rec-timer').textContent = fmtDur(Date.now() - recStart); }, 250);
  ov.classList.add('open');
}
function stopRecording(){ if(mediaRecorder && mediaRecorder.state !== 'inactive') mediaRecorder.stop(); }
function cancelRecording(){
  if(mediaRecorder){ mediaRecorder.onstop = null; if(mediaRecorder.state !== 'inactive') mediaRecorder.stop(); }
  cleanupRec();
}
function cleanupRec(){
  clearInterval(recTimerInt);
  if(recStream) recStream.getTracks().forEach(t => t.stop());
  $('rec-preview').style.display = 'none';
  $('rec-overlay').classList.remove('open');
}
function saveRecording(){
  const blob = new Blob(recChunks, { type: mediaRecorder.mimeType || 'audio/webm' });
  const dur = Date.now() - recStart;
  cleanupRec();
  const reader = new FileReader();
  reader.onload = async e => {
    await pushMessage(currentChatId, {
      id: 'm' + Date.now(), from: DB.session, text: '', ts: Date.now(), reactions: {},
      media: e.target.result, mediaType: recMode === 'video' ? 'videocircle' : 'voice',
      duration: dur, replyTo: replyTarget
    });
    cancelReply();
    renderMessages();
  };
  reader.readAsDataURL(blob);
}

/* ---------- HOLD-TO-RECORD ---------- */
(function(){
  function bindHold(btn, mode){
    if(!btn) return;
    let startX=0,startY=0,locked=false,cancel=false,active=false;
    btn.addEventListener('pointerdown', async e => {
      e.preventDefault();
      active = true; locked = false; cancel = false;
      startX = e.clientX; startY = e.clientY;
      if(mode === 'voice') await startVoiceRec(); else await startVideoRec();
      if(!mediaRecorder || mediaRecorder.state === 'inactive'){ active=false; return; }
      const ov = $('rec-overlay');
      const move = ev => {
        if(!active) return;
        const dy = startY - ev.clientY;
        if(dy > 60 && !locked){ locked = true; ov.dataset.locked = '1'; }
        if(locked && ev.clientX < startX - 60){ cancel = true; ov.dataset.cancel = '1'; }
      };
      const up = () => {
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', up);
        active = false;
        if(cancel){ cancelRecording(); }
        else if(!locked){ stopRecording(); }
      };
      window.addEventListener('pointermove', move);
      window.addEventListener('pointerup', up);
    });
    btn.addEventListener('contextmenu', e => e.preventDefault());
  }
  bindHold($('btn-voice'), 'voice');
  bindHold($('btn-video'), 'video');
})();

/* ---------- HOLD-TO-SEND-MENU ---------- */
(function(){
  const btn = $('btn-send');
  if(!btn) return;
  let holdTimer = null, held = false;
  const start = () => { held = false; holdTimer = setTimeout(() => { held = true; $('send-modal').classList.add('open'); }, 500); };
  const end = () => { clearTimeout(holdTimer); if(!held) sendMsg(); };
  btn.addEventListener('pointerdown', start);
  btn.addEventListener('pointerup', end);
  btn.addEventListener('pointerleave', () => clearTimeout(holdTimer));
})();

/* ---------- ВЛОЖЕНИЯ ---------- */
function openAttach(){ $('attach-modal').classList.add('open'); }
function closeAttach(){ $('attach-modal').classList.remove('open'); }
function selectMedia(input){
  chosenMedia = [...input.files];
  closeAttach();
  if(!chosenMedia.length) return;
  $('selected-preview').innerHTML = chosenMedia.map(f => f.type.startsWith('video') ? '<video muted src="'+URL.createObjectURL(f)+'"></video>' : '<img src="'+URL.createObjectURL(f)+'">').join('');
  $('caption-modal').classList.add('open');
  input.value = '';
}
async function sendSelectedMedia(noCaption=false){
  if(!chosenMedia.length) return;
  const cap = noCaption ? '' : $('caption-input').value.trim();
  const fs = [...chosenMedia];
  chosenMedia = [];
  $('caption-modal').classList.remove('open');
  $('caption-input').value = '';
  if(!canPostHere()) return alert('Невозможно отправить сообщение.');
  for (let i = 0; i < fs.length; i++){
    const f = fs[i];
    await new Promise(res => {
      const done = async data => {
        await pushMessage(currentChatId, {
          id: 'm' + Date.now() + i, from: DB.session,
          text: i === 0 ? cap : '', ts: Date.now(), reactions: {},
          media: data, mediaType: f.type.startsWith('video') ? 'video' : 'image'
        });
        res();
      };
      if(f.type.startsWith('image')) compressImage(f, 1280, .8, done);
      else { const r = new FileReader(); r.onload = e => done(e.target.result); r.readAsDataURL(f); }
    });
  }
  renderMessages();
}
async function sendDocuments(input){
  const fs = [...input.files];
  closeAttach();
  input.value = '';
  if(!fs.length) return;
  if(!canPostHere()) return alert('Невозможно отправить сообщение.');
  for (let i = 0; i < fs.length; i++){
    const f = fs[i];
    await new Promise(res => {
      const r = new FileReader();
      r.onload = async e => {
        await pushMessage(currentChatId, {
          id: 'm' + Date.now() + i, from: DB.session, text: f.name,
          ts: Date.now(), reactions: {},
          media: e.target.result, mediaType: 'document', fileName: f.name
        });
        res();
      };
      r.readAsDataURL(f);
    });
  }
  renderMessages();
}
function attachLocation(){
  closeAttach();
  if(!navigator.geolocation) return alert('Геолокация не поддерживается.');
  navigator.geolocation.getCurrentPosition(
    async pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      await pushMessage(currentChatId, {
        id: 'm' + Date.now(), from: DB.session, ts: Date.now(), reactions: {},
        text: `📍 Моё местоположение\nhttps://maps.google.com/?q=${lat},${lng}`,
        mediaType: 'location'
      });
      renderMessages();
    },
    () => alert('Не удалось получить геолокацию.'),
    { enableHighAccuracy: true, timeout: 8000 }
  );
}
function attachContact(){
  closeAttach();
  const contacts = myContacts().map(id => DB.users.find(u => u.id === id)).filter(Boolean);
  if(!contacts.length) return alert('Нет контактов.');
  const pick = prompt('Введите @ник или имя контакта:\n' + contacts.map(u => '@' + u.nick + ' — ' + u.name).join('\n'));
  if(!pick) return;
  const clean = pick.replace(/^@/, '').trim().toLowerCase();
  const u = contacts.find(x => x.nick.toLowerCase() === clean || x.name.toLowerCase() === clean);
  if(!u) return alert('Контакт не найден.');
  pushMessage(currentChatId, {
    id: 'm' + Date.now(), from: DB.session, ts: Date.now(), reactions: {},
    text: `👤 Контакт: ${u.name}\n@${u.nick}\n${u.contact}`,
    mediaType: 'contact'
  }).then(renderMessages);
}
function attachOther(){
  closeAttach();
  const text = prompt('Введите текст:');
  if(!text || !text.trim()) return;
  pushMessage(currentChatId, {
    id: 'm' + Date.now(), from: DB.session, text: text.trim(),
    ts: Date.now(), reactions: {}
  }).then(renderMessages);
}
function compressImage(file, maxSize, quality, cb){
  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.onload = () => {
      let w = img.width, h = img.height;
      if(Math.max(w, h) > maxSize){ const k = maxSize / Math.max(w, h); w = Math.round(w * k); h = Math.round(h * k); }
      const c = document.createElement('canvas');
      c.width = w; c.height = h;
      c.getContext('2d').drawImage(img, 0, 0, w, h);
      try { cb(c.toDataURL('image/jpeg', quality)); }
      catch(err){ cb(e.target.result); }
    };
    img.onerror = () => cb(e.target.result);
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

/* ---------- НАСТРОЙКИ ---------- */
function openSettings(){
  const u = me();
  if(!u) return;
  $('set-avatar').innerHTML = avatarHTML(u);
  $('set-name').value = u.name;
  $('set-nick').value = u.nick;
  $('set-about').value = u.about || '';
  $('set-contact-cur').textContent = u.contact;
  $('set-created').innerHTML = 'В Mainland с <b>' + new Date(u.created).toLocaleDateString('ru-RU',{day:'numeric',month:'long',year:'numeric'}) + '</b>';
  $('set-contact').value = '';
  settingsContactState = null;
  $('set-contact-code-wrap').style.display = 'none';
  $('set-contact-btn').textContent = 'Отправить код';
  err('set-profile-err',''); err('set-contact-err',''); err('set-pass-err','');
  ['set-pass-cur','set-pass-new','set-pass-new2'].forEach(id => $(id).value = '');
  $('set-sound').checked = DB.mute !== '1';
  $('set-dark').checked = DB.theme === 'dark';
  $('set-notif').checked = ('Notification' in window && Notification.permission === 'granted' && DB.notif !== '1');
  $('set-encrypt').checked = DB.encryption === '1';
  renderPrivacySegs();
  showScreen('scr-settings');
}
function renderPrivacySegs(){
  ['find','lastseen','groups'].forEach(key => {
    const seg = $('seg-' + key);
    const cur = priv(DB.session, key);
    seg.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.v === cur));
  });
}
function setPrivacy(key, value){
  const users = DB.users;
  const u = users.find(x => x.id === DB.session);
  u.privacy = u.privacy || {};
  u.privacy[key] = value;
  DB.users = users;
  renderPrivacySegs();
}
function saveProfile(){
  err('set-profile-err','');
  const name = $('set-name').value.trim();
  const nick = $('set-nick').value.trim().toLowerCase();
  const about = $('set-about').value.trim();
  if(!name) return err('set-profile-err','Укажите имя.');
  if(nick.length < 3 || !/^[a-z0-9_\.]+$/.test(nick)) return err('set-profile-err','Ник: мин. 3 символа, латиница/цифры/_/.');
  if(DB.users.some(x => x.nick === nick && x.id !== DB.session)) return err('set-profile-err','Этот никнейм занят.');
  const users = DB.users;
  const u = users.find(x => x.id === DB.session);
  u.name = name; u.nick = nick; u.about = about;
  DB.users = users;
  $('drawer-nick').textContent = '@' + nick;
  $('set-avatar').innerHTML = avatarHTML(u);
  alert('Профиль сохранён ✅');
}
function changeContact(){
  err('set-contact-err','');
  const u = me();
  if(!settingsContactState){
    const v = $('set-contact').value.trim();
    if(!isEmail(v) && !isPhone(v)) return err('set-contact-err','Введите корректный номер или email.');
    if(v === u.contact) return err('set-contact-err','Новый контакт совпадает с текущим.');
    const exist = findUser(v);
    if(exist && exist.id !== u.id) return err('set-contact-err','Этот контакт уже привязан к другому аккаунту.');
    settingsContactState = { newContact: v, code: String(Math.floor(100000 + Math.random()*900000)) };
    $('set-contact-code-wrap').style.display = 'block';
    $('set-demo-code').textContent = settingsContactState.code;
    $('set-contact-btn').textContent = 'Подтвердить';
    return;
  }
  if($('set-contact-code').value.trim() !== settingsContactState.code) return err('set-contact-err','Неверный код.');
  const users = DB.users;
  users.find(x => x.id === DB.session).contact = settingsContactState.newContact;
  DB.users = users;
  settingsContactState = null;
  $('set-contact').value = '';
  $('set-contact-code').value = '';
  $('set-contact-code-wrap').style.display = 'none';
  $('set-contact-btn').textContent = 'Отправить код';
  $('set-contact-cur').textContent = me().contact;
  alert('Контакт обновлён ✅');
}
function changePassword(){
  err('set-pass-err','');
  const cur = $('set-pass-cur').value, p1 = $('set-pass-new').value, p2 = $('set-pass-new2').value;
  if(cur !== me().pass) return err('set-pass-err','Текущий пароль указан неверно.');
  if(p1.length < 6) return err('set-pass-err','Новый пароль — минимум 6 символов.');
  if(p1 !== p2) return err('set-pass-err','Новые пароли не совпадают.');
  const users = DB.users;
  users.find(x => x.id === DB.session).pass = p1;
  DB.users = users;
  ['set-pass-cur','set-pass-new','set-pass-new2'].forEach(id => $(id).value = '');
  alert('Пароль изменён 🔒');
}
function toggleSound(){ DB.mute = $('set-sound').checked ? '0' : '1'; applyMute(); }
function toggleDarkSetting(){ DB.theme = $('set-dark').checked ? 'dark' : 'light'; applyTheme(); }
function toggleNotifSetting(){
  if(!$('set-notif').checked){ DB.notif = '1'; return; }
  DB.notif = '0';
  if(!('Notification' in window)){ $('set-notif').checked = false; DB.notif = '1'; return alert('Браузер не поддерживает уведомления.'); }
  if(Notification.permission === 'denied'){
    $('set-notif').checked = false; DB.notif = '1';
    return alert('Уведомления заблокированы в браузере.');
  }
  if(Notification.permission === 'default') Notification.requestPermission().then(p => {
    $('set-notif').checked = (p === 'granted');
    if(p !== 'granted') DB.notif = '1';
  });
}
async function toggleEncryption(){
  const on = $('set-encrypt').checked;
  if(on){
    const p = prompt('Введите пароль для шифрования данных (тот же, что при входе):');
    if(!p){ $('set-encrypt').checked = false; return; }
    await initEncryption(p);
    encryptEnabled = true;
    DB.encryption = '1';
    alert('Шифрование включено. Новые сообщения будут шифроваться.');
  } else {
    encryptEnabled = false;
    DB.encryption = '0';
    alert('Шифрование отключено.');
  }
}

/* ---------- ПРОФИЛЬ ---------- */
function openMyProfile(){
  const u = me();
  $('profile-header-title').textContent = 'Мой профиль';
  $('media-cats').style.display = 'none';
  $('media-grid').style.display = 'none';
  $('links-list').style.display = 'none';
  $('profile-chat-btn').style.display = 'none';
  $('profile-card').innerHTML = `
    <div class="avatar" style="width:110px;height:110px;font-size:40px;margin:0 auto;cursor:pointer;" onclick="$('avatar-input').click()">${avatarHTML(u)}</div>
    <h2>${esc(u.name)}</h2>
    <div class="pnick pnick-row">
      @${esc(u.nick)}
      <button class="theme-btn" onclick="copyNick('${u.nick}')">📋</button>
      <button class="theme-btn" onclick="showQR('${u.id}')">🔳</button>
    </div>
    <div class="p-details">
      <div><b>Номер / почта</b><br>${esc(u.contact)}</div>
      <div><b>В Mainland с</b><br>${new Date(u.created).toLocaleDateString('ru-RU',{day:'numeric',month:'long',year:'numeric'})}</div>
      ${u.about ? `<div><b>О себе</b><br>${esc(u.about)}</div>` : ''}
    </div>
    <button style="margin-top:16px;" onclick="openSettings()">⚙️ Настройки</button>`;
  showScreen('scr-profile');
}
function saveAvatar(input){
  const file = input.files[0];
  if(!file) return;
  compressImage(file, 256, 0.85, dataURL => {
    const users = DB.users;
    const u = users.find(x => x.id === DB.session);
    u.avatar = dataURL;
    DB.users = users;
    openMyProfile();
  });
  input.value = '';
}
function openProfile(userId){
  if(userId === 'support') return openSupport();
  currentOtherId = userId;
  currentConvo = null;
  currentChatId = chatIdWith(userId);
  const u = DB.users.find(x => x.id === userId);
  if(!u) return;
  const onl = isOnline(userId);
  const inContacts = myContacts().includes(userId);
  const del = !!u.deleted;
  $('profile-header-title').textContent = 'Профиль';
  $('media-cats').style.display = 'flex';
  $('media-grid').style.display = 'grid';
  $('profile-chat-btn').style.display = del ? 'none' : 'inline-block';
  $('profile-chat-btn').onclick = () => openChat(userId);
  $('profile-card').innerHTML = `
    <div class="avatar ${del ? 'deleted' : ''}" style="position:relative;">${avatarHTML(u)}<div class="dot ${onl?'on':''}" style="width:18px;height:18px;border-width:3px;"></div></div>
    <h2>${esc(u.name)}</h2>
    <div class="pnick pnick-row">
      @${esc(u.nick)}
      <button class="theme-btn" onclick="copyNick('${u.nick}')">📋</button>
      <button class="theme-btn" onclick="showQR('${u.id}')">🔳</button>
    </div>
    <div class="status ${onl?'onl':''}">${del ? '🚫 аккаунт удалён' : (onl ? '● онлайн' : esc(lastSeenText(userId)))}</div>
    ${del ? `<div class="deleted-banner">🗑 Аккаунт удалён.<br>Причина: ${esc(u.deletedReason || 'не указана')}</div>` : ''}
    <div class="p-details">
      <div><b>Номер / почта</b><br>${esc(u.contact)}</div>
      <div><b>В Mainland с</b><br>${new Date(u.created).toLocaleDateString('ru-RU',{day:'numeric',month:'long',year:'numeric'})}</div>
      <div><b>Статус контакта</b><br>${del ? '🚫 Удалён' : (inContacts ? '✅ В контактах' : '➕ Не добавлен')}</div>
      ${u.about ? `<div><b>О себе</b><br>${esc(u.about)}</div>` : ''}
    </div>`;
  profileMediaCat = 'media';
  document.querySelectorAll('.mcat').forEach(x => x.classList.remove('active'));
  $('mcat-media').classList.add('active');
  renderProfileMedia();
  showScreen('scr-profile');
}

/* ---------- ТЕХПОДДЕРЖКА (модалка) ---------- */
function sendSupport(){
  ensureSupportChat();
  const text = $('support-text').value.trim();
  if(!text) return;
  pushMessage(SUPPORT_ID, { id:'m'+Date.now(), from:DB.session, text, ts:Date.now(), reactions:{} });
  pushMessage(SUPPORT_ID, { id:'m'+(Date.now()+1), from:'support', system:true,
    text:'✅ Обращение принято.', ts:Date.now()+1, reactions:{} });
  $('support-text').value = '';
  $('support-modal').classList.remove('open');
  openSupport();
}

/* ---------- ВОССТАНОВЛЕНИЕ ПАРОЛЯ ---------- */
function openForgot(){
  $('forgot-modal').classList.add('open');
  $('forgot-contact').value = $('login-id').value.trim();
  $('forgot-code').value = '';
  $('forgot-newpass').value = '';
  err('forgot-error','');
}
function forgotSendCode(){
  err('forgot-error','');
  const v = $('forgot-contact').value.trim();
  const u = findUser(v);
  if(!u) return err('forgot-error','Аккаунт не найден.');
  if(Date.now() < forgotCooldown) return err('forgot-error','Повторная отправка через ' + Math.ceil((forgotCooldown - Date.now())/1000) + ' сек.');
  forgotCode = String(Math.floor(100000 + Math.random()*900000));
  forgotAttempts = 0;
  forgotCooldown = Date.now() + 60000;
  console.log('[DEMO] Код восстановления для', v, ':', forgotCode);
  $('forgot-error').textContent = 'Код отправлен. (Демо-код — в консоли)';
}
function forgotReset(){
  err('forgot-error','');
  const v = $('forgot-contact').value.trim();
  const u = findUser(v);
  if(!u) return err('forgot-error','Аккаунт не найден.');
  if(forgotAttempts >= 3) return err('forgot-error','Слишком много попыток.');
  if(!forgotCode || $('forgot-code').value.trim() !== forgotCode){
    forgotAttempts++;
    return err('forgot-error','Неверный код. Осталось: ' + (3 - forgotAttempts));
  }
  const p = $('forgot-newpass').value;
  if(p.length < 8) return err('forgot-error','Пароль — минимум 8 символов.');
  const users = DB.users;
  users.find(x => x.id === u.id).pass = p;
  DB.users = users;
  forgotCode = null;
  $('forgot-modal').classList.remove('open');
  alert('Пароль изменён 🔒');
}

/* ---------- МЕНЮ ---------- */
function toggleDrawer(){ $('main-drawer').classList.toggle('open'); }
document.addEventListener('click', e => {
  const d = $('main-drawer');
  if(d && !d.contains(e.target) && !e.target.closest('.menu-toggle')) d.classList.remove('open');
});

/* ---------- ТАЙМЕРЫ ---------- */
let statusTimer = null, incomingTimer = null;
function startTimers(){
  clearInterval(statusTimer); clearInterval(incomingTimer);
  ping();
  knownMsgIds = new Set();
  const r = DB.read;
  r[DB.session] = r[DB.session] || {};
  for(const [cid, msgs] of Object.entries(DB.chats)){
    if(amIParticipant(cid)){
      msgs.forEach(m => knownMsgIds.add(m.id));
      if(!r[DB.session][cid]) r[DB.session][cid] = Date.now();
    }
  }
  DB.read = r;
  statusTimer = setInterval(() => {
    ping();
    if(me() && me().deleted) return doLogout();
    if($('scr-main').classList.contains('active')) renderList();
    if($('scr-chat').classList.contains('active') && currentOtherId){ updateChatHeader(); renderMessages(); }
    if($('scr-chat').classList.contains('active') && currentConvo) updateConvoHeader();
  }, 30000);
  incomingTimer = setInterval(processScheduled, 5000);
}

/* ---------- СТАРТ ---------- */
(async function boot(){
  await DB.init();
  applyTheme();
  applyMute();
  if (DB.session && me()){
    encryptEnabled = DB.encryption === '1';
    // Ключ будет выведен при следующем входе (пароль неизвестен при загрузке)
    enterApp();
  } else {
    showScreen('scr-login');
  }
})();