# Mainland — локальный мессенджер

## Структура
- `index.html` — разметка
- `style.css` — стили (адаптивные, тёмная тема, safe-area)
- `crypto.js` — WebCrypto (PBKDF2 + AES-GCM)
- `qr.js` — генератор QR (ISO 18004, v1–10, ECC M)
- `db.js` — IndexedDB + кеш в памяти
- `app.js` — логика приложения

## Запуск
Открыть через локальный сервер (нужно для камеры/микрофона):
```bash
python3 -m http.server 8000
# или
npx serve