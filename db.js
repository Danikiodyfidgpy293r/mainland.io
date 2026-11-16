/* ============================================================
   db.js — IndexedDB-хранилище с шифрованием
   - Хранит пользователей, чаты, конвои, настройки, отложенные сообщения
   - Поля текста/медиа шифруются AES-GCM, если включён режим
   - Автоматическая миграция из localStorage (старые данные)
   ============================================================ */

const IDB = (() => {
  const DB_NAME = 'mainland';
  const DB_VERSION = 1;
  let dbPromise = null;

  function open(){
    if (dbPromise) return dbPromise;
    dbPromise = new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = e => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('kv')) db.createObjectStore('kv');
        if (!db.objectStoreNames.contains('chats')) db.createObjectStore('chats', { keyPath: 'cid' });
        if (!db.objectStoreNames.contains('scheduled')) db.createObjectStore('scheduled', { keyPath: 'id', autoIncrement: true });
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
    return dbPromise;
  }

  async function tx(store, mode = 'readonly'){
    const db = await open();
    return db.transaction(store, mode).objectStore(store);
  }

  function reqToPromise(req){
    return new Promise((res, rej) => {
      req.onsuccess = () => res(req.result);
      req.onerror = () => rej(req.error);
    });
  }

  async function kvGet(key){
    const store = await tx('kv');
    return reqToPromise(store.get(key));
  }
  async function kvSet(key, value){
    const store = await tx('kv', 'readwrite');
    return reqToPromise(store.put(value, key));
  }
  async function kvDel(key){
    const store = await tx('kv', 'readwrite');
    return reqToPromise(store.delete(key));
  }
  async function kvAll(){
    const store = await tx('kv');
    const keys = await reqToPromise(store.getAllKeys());
    const vals = await reqToPromise(store.getAll());
    const out = {};
    keys.forEach((k, i) => out[k] = vals[i]);
    return out;
  }

  // chats: { cid, msgs: [...] }
  async function getChat(cid){
    const store = await tx('chats');
    const r = await reqToPromise(store.get(cid));
    return r ? r.msgs : [];
  }
  async function setChat(cid, msgs){
    const store = await tx('chats', 'readwrite');
    return reqToPromise(store.put({ cid, msgs }));
  }
  async function deleteChat(cid){
    const store = await tx('chats', 'readwrite');
    return reqToPromise(store.delete(cid));
  }
  async function getAllChats(){
    const store = await tx('chats');
    const arr = await reqToPromise(store.getAll());
    const out = {};
    arr.forEach(x => out[x.cid] = x.msgs);
    return out;
  }

  // scheduled: { id, cid, msg, sendAt }
  async function addScheduled(cid, msg, sendAt){
    const store = await tx('scheduled', 'readwrite');
    return reqToPromise(store.add({ cid, msg, sendAt }));
  }
  async function getDueScheduled(now){
    const store = await tx('scheduled');
    const all = await reqToPromise(store.getAll());
    return all.filter(x => x.sendAt <= now);
  }
  async function deleteScheduled(id){
    const store = await tx('scheduled', 'readwrite');
    return reqToPromise(store.delete(id));
  }
  async function getAllScheduled(){
    const store = await tx('scheduled');
    return reqToPromise(store.getAll());
  }

  // Миграция из localStorage (если были старые данные)
  async function migrateFromLocalStorage(){
    if (await kvGet('_migrated')) return;
    const keys = ['ml_users','ml_convos','ml_contacts','ml_chats','ml_activity','ml_read','ml_typing','ml_hiddenChats'];
    for (const k of keys){
      const v = localStorage.getItem(k);
      if (v){
        try { await kvSet(k, JSON.parse(v)); } catch(e){ console.warn('migrate', k, e); }
      }
    }
    const simple = ['ml_theme','ml_mute','ml_notif'];
    for (const k of simple){
      const v = localStorage.getItem(k);
      if (v != null) await kvSet(k, v);
    }
    await kvSet('_migrated', true);
  }

  return {
    kvGet, kvSet, kvDel, kvAll,
    getChat, setChat, deleteChat, getAllChats,
    addScheduled, getDueScheduled, deleteScheduled, getAllScheduled,
    migrateFromLocalStorage
  };
})();

/* ============================================================
   DB — синхронная обёртка над IndexedDB с кешем в памяти,
   чтобы существующий код на DB.xxx продолжал работать.
   ============================================================ */
const DB = {
  _cache: {
    users: [], convos: [], contacts: {}, chats: {},
    activity: {}, read: {}, typing: {}, hiddenChats: {},
    session: null, theme: 'light', mute: '0', notif: '0',
    encryption: '0', ready: false
  },
  _saveQueue: new Set(),
  _debounce: null,

  async init(){
    if (this._cache.ready) return;
    await IDB.migrateFromLocalStorage();
    const all = await IDB.kvAll();
    const c = this._cache;
    c.users = all['ml_users'] || [];
    c.convos = all['ml_convos'] || [];
    c.contacts = all['ml_contacts'] || {};
    c.activity = all['ml_activity'] || {};
    c.read = all['ml_read'] || {};
    c.typing = all['ml_typing'] || {};
    c.hiddenChats = all['ml_hiddenChats'] || {};
    c.session = all['ml_session'] || null;
    c.theme = all['ml_theme'] || 'light';
    c.mute = all['ml_mute'] || '0';
    c.notif = all['ml_notif'] || '0';
    c.encryption = all['ml_encryption'] || '0';
    c.chats = await IDB.getAllChats();
    c.ready = true;
  },

  _mark(key){
    this._saveQueue.add(key);
    clearTimeout(this._debounce);
    this._debounce = setTimeout(() => this._flush(), 50);
  },
  async _flush(){
    const keys = [...this._saveQueue];
    this._saveQueue.clear();
    for (const k of keys){
      try {
        if (k === 'chats'){
          for (const [cid, msgs] of Object.entries(this._cache.chats)) await IDB.setChat(cid, msgs);
        } else {
          const map = {
            users:'ml_users', convos:'ml_convos', contacts:'ml_contacts',
            activity:'ml_activity', read:'ml_read', typing:'ml_typing',
            hiddenChats:'ml_hiddenChats', session:'ml_session',
            theme:'ml_theme', mute:'ml_mute', notif:'ml_notif',
            encryption:'ml_encryption'
          };
          if (map[k]) await IDB.kvSet(map[k], this._cache[k]);
        }
      } catch(e){ console.error('flush', k, e); }
    }
  },

  get users(){ return this._cache.users; },
  set users(v){ this._cache.users = v; this._mark('users'); },
  get convos(){ return this._cache.convos; },
  set convos(v){ this._cache.convos = v; this._mark('convos'); },
  get contacts(){ return this._cache.contacts; },
  set contacts(v){ this._cache.contacts = v; this._mark('contacts'); },
  get chats(){ return this._cache.chats; },
  set chats(v){ this._cache.chats = v; this._mark('chats'); },
  get activity(){ return this._cache.activity; },
  set activity(v){ this._cache.activity = v; this._mark('activity'); },
  get read(){ return this._cache.read; },
  set read(v){ this._cache.read = v; this._mark('read'); },
  get typing(){ return this._cache.typing; },
  set typing(v){ this._cache.typing = v; this._mark('typing'); },
  get hiddenChats(){ return this._cache.hiddenChats; },
  set hiddenChats(v){ this._cache.hiddenChats = v; this._mark('hiddenChats'); },
  get session(){ return this._cache.session; },
  set session(v){ this._cache.session = v; this._mark('session'); },
  get theme(){ return this._cache.theme; },
  set theme(v){ this._cache.theme = v; this._mark('theme'); },
  get mute(){ return this._cache.mute; },
  set mute(v){ this._cache.mute = v; this._mark('mute'); },
  get notif(){ return this._cache.notif; },
  set notif(v){ this._cache.notif = v; this._mark('notif'); },
  get encryption(){ return this._cache.encryption; },
  set encryption(v){ this._cache.encryption = v; this._mark('encryption'); },
};