
/* ============================================================
   I18N (Локализация)
   ============================================================ */
const TRANSLATIONS = {
  ru: {
    welcome_back:"С возвращением!", login:"Вход", phone_or_email:"Номер телефона или email", password:"Пароль", login_btn:"Войти", forgot_pass:"Забыли пароль?", no_account:"Нет аккаунта?", register:"Зарегистрироваться",
    step1:"Шаг 1 из 3", your_phone:"Ваш номер или почта", phone_or_email_req:"Номер телефона (обязательно) или почта", send_code:"Отправить код", have_account:"Уже есть аккаунт?",
    step2:"Шаг 2 из 3", enter_code:"Введите код", code_sent_to:"Код отправлен на", demo_code:"Демо-код:", code:"Код подтверждения", confirm:"Подтвердить", resend_code:"Отправить код повторно",
    step3:"Шаг 3 из 3", almost_done:"Почти готово", nickname:"Никнейм (уникальный)", name:"Ваше имя", create_pass:"Придумайте пароль (мин. 6 символов)", repeat_pass:"Повторите пароль", create_acc:"Создать аккаунт",
    my_profile:"👤 Мой профиль / QR", settings:"⚙️ Настройки", support:"🛟 Техническая поддержка", logout:"↪ Выйти",
    chats:"💬 Чаты", contacts:"👥 Контакты", search:"🔍 Поиск", search_placeholder:"Найти по нику, имени или номеру...", create_group:"＋ Создать группу", create_channel:"＋ Создать канал",
    msg_placeholder:"Сообщение...", cancel:"Отмена", close:"Закрыть", create:"Создать", join:"Вступить", done:"Готово", send:"Отправить", confirm_change:"Подтвердить и сменить пароль",
    profile:"👤 Профиль", avatar_hint:"Нажмите на фото,<br>чтобы сменить аватарку", about:"О себе", save_profile:"Сохранить профиль",
    contact:"📱 Контакт", current:"Текущий:", new_contact:"Новый номер или email",
    security:"🔒 Безопасность", cur_pass:"Текущий пароль", new_pass:"Новый пароль", repeat_new_pass:"Повторите новый пароль", change_pass:"Сменить пароль",
    privacy:"🔐 Конфиденциальность", who_find:"Кто может меня найти в поиске", who_lastseen:"Кто видит «был(а) в сети»", who_groups:"Кто может добавлять меня в группы", all:"Все", none:"Никто",
    appearance:"💬 Оформление чата", font_size:"Размер шрифта", small:"Маленький", medium:"Средний", large:"Большой", wallpaper:"Обои чата", default:"Стандарт", dark:"Тёмные", pattern:"Узор",
    notifications:"🔔 Уведомления и оформление", sound_notif:"🔊 Звук уведомлений", browser_notif:"🖥 Браузерные уведомления", dark_theme:"🌙 Тёмная тема", encryption:"🔐 Шифрование данных",
    data_memory:"📁 Данные и память", autoload:"Автозагрузка медиа", never:"Никогда", wifi:"По Wi-Fi", always:"Всегда", click_open:"🔍 Открывать фото при нажатии",
    language:"🌐 Язык", open_support:"Открыть чат поддержки", write_ticket:"Написать обращение",
    account:"⚙️ Аккаунт", delete_acc_note:"После удаления аккаунт можно восстановить в течение <b>5 дней</b>, войдя снова.", delete_acc:"🗑 Удалить аккаунт",
    media:"🖼 Медиа", voice:"🎤 Голосовые", files:"📁 Файлы", links:"🔗 Ссылки", open_chat:"💬 Открыть чат",
    fwd_msg:"Переслать сообщение", del_msg:"Удалить сообщение?", del_for_all:"🗑 Удалить у всех", del_for_me:"Удалить у себя", del_chat_title:"Удалить чат?", del_chat_all:"🗑 Удалить у всех — чат исчезнет у обоих",
    title_label:"Название", private_hint:"🔒 Приватный — скрыть из поиска", add_members:"Добавить участников",
    rec_hint:"Зажмите 🎤/🎥 — запись.", attach:"Прикрепить", location:"Карта", other:"Другое",
    sending:"Отправка", schedule:"🗓 Отправить по расписанию", silent:"🔕 Отправить бесшумно",
    restore_acc:"Восстановление аккаунта", restore_note:"Подтвердите владение аккаунтом кодом.", get_code:"Получить код", new_pass_8:"Новый пароль (от 8 символов)",
    support_private:"Обращения видны только вам.", send_to_support:"Отправить в чат поддержки", go_to_support:"Перейти в чат поддержки",
    caption:"Подпись к медиа (необязательно)", no_caption:"Без подписи", qr:"QR-код"
  },
  en: {
    welcome_back:"Welcome back!", login:"Log in", phone_or_email:"Phone number or email", password:"Password", login_btn:"Log in", forgot_pass:"Forgot password?", no_account:"No account?", register:"Register",
    step1:"Step 1 of 3", your_phone:"Your phone or email", phone_or_email_req:"Phone number (required) or email", send_code:"Send code", have_account:"Already have an account?",
    step2:"Step 2 of 3", enter_code:"Enter code", code_sent_to:"Code sent to", demo_code:"Demo code:", code:"Verification code", confirm:"Confirm", resend_code:"Resend code",
    step3:"Step 3 of 3", almost_done:"Almost done", nickname:"Nickname (unique)", name:"Your name", create_pass:"Create password (min. 6 chars)", repeat_pass:"Repeat password", create_acc:"Create account",
    my_profile:"👤 My profile / QR", settings:"⚙️ Settings", support:"🛟 Tech Support", logout:"↪ Log out",
    chats:"💬 Chats", contacts:"👥 Contacts", search:"🔍 Search", search_placeholder:"Search by nick, name or phone...", create_group:"＋ Create group", create_channel:"＋ Create channel",
    msg_placeholder:"Message...", cancel:"Cancel", close:"Close", create:"Create", join:"Join", done:"Done", send:"Send", confirm_change:"Confirm and change password",
    profile:"👤 Profile", avatar_hint:"Click on photo<br>to change avatar", about:"About me", save_profile:"Save profile",
    contact:"📱 Contact", current:"Current:", new_contact:"New phone or email",
    security:"🔒 Security", cur_pass:"Current password", new_pass:"New password", repeat_new_pass:"Repeat new password", change_pass:"Change password",
    privacy:"🔐 Privacy", who_find:"Who can find me in search", who_lastseen:"Who sees 'last seen'", who_groups:"Who can add me to groups", all:"Everyone", none:"Nobody",
    appearance:"💬 Chat Appearance", font_size:"Font size", small:"Small", medium:"Medium", large:"Large", wallpaper:"Chat wallpaper", default:"Default", dark:"Dark", pattern:"Pattern",
    notifications:"🔔 Notifications & Appearance", sound_notif:"🔊 Notification sound", browser_notif:"🖥 Browser notifications", dark_theme:"🌙 Dark theme", encryption:"🔐 Data encryption",
    data_memory:"📁 Data & Storage", autoload:"Media auto-download", never:"Never", wifi:"Wi-Fi only", always:"Always", click_open:"🔍 Open photo on click",
    language:"🌐 Language", open_support:"Open support chat", write_ticket:"Write a ticket",
    account:"⚙️ Account", delete_acc_note:"After deletion, you can restore your account within <b>5 days</b> by logging in again.", delete_acc:"🗑 Delete account",
    media:"🖼 Media", voice:"🎤 Voice", files:"📁 Files", links:"🔗 Links", open_chat:"💬 Open chat",
    fwd_msg:"Forward message", del_msg:"Delete message?", del_for_all:"🗑 Delete for everyone", del_for_me:"Delete for me", del_chat_title:"Delete chat?", del_chat_all:"🗑 Delete for everyone — chat disappears for both",
    title_label:"Title", private_hint:"🔒 Private — hide from search", add_members:"Add members",
    rec_hint:"Hold 🎤/🎥 to record.", attach:"Attach", location:"Location", other:"Other",
    sending:"Sending", schedule:"🗓 Schedule send", silent:"🔕 Send silently",
    restore_acc:"Account recovery", restore_note:"Confirm account ownership with a code.", get_code:"Get code", new_pass_8:"New password (min. 8 chars)",
    support_private:"Tickets are visible only to you.", send_to_support:"Send to support chat", go_to_support:"Go to support chat",
    caption:"Media caption (optional)", no_caption:"No caption", qr:"QR Code"
  },
  es: {
    welcome_back:"¡Bienvenido de nuevo!", login:"Iniciar sesión", phone_or_email:"Teléfono o correo", password:"Contraseña", login_btn:"Entrar", forgot_pass:"¿Olvidaste tu contraseña?", no_account:"¿No tienes cuenta?", register:"Registrarse",
    step1:"Paso 1 de 3", your_phone:"Tu teléfono o correo", phone_or_email_req:"Teléfono (obligatorio) o correo", send_code:"Enviar código", have_account:"¿Ya tienes cuenta?",
    step2:"Paso 2 de 3", enter_code:"Ingresa el código", code_sent_to:"Código enviado a", demo_code:"Código demo:", code:"Código de verificación", confirm:"Confirmar", resend_code:"Reenviar código",
    step3:"Paso 3 de 3", almost_done:"Casi listo", nickname:"Apodo (único)", name:"Tu nombre", create_pass:"Crea contraseña (mín. 6)", repeat_pass:"Repite contraseña", create_acc:"Crear cuenta",
    my_profile:"👤 Mi perfil / QR", settings:"⚙️ Ajustes", support:"🛟 Soporte", logout:"↪ Salir",
    chats:"💬 Chats", contacts:"👥 Contactos", search:"🔍 Buscar", search_placeholder:"Buscar por apodo, nombre o teléfono...", create_group:"＋ Crear grupo", create_channel:"＋ Crear canal",
    msg_placeholder:"Mensaje...", cancel:"Cancelar", close:"Cerrar", create:"Crear", join:"Unirse", done:"Listo", send:"Enviar", confirm_change:"Confirmar y cambiar contraseña",
    profile:"👤 Perfil", avatar_hint:"Haz clic en la foto<br>para cambiarla", about:"Sobre mí", save_profile:"Guardar perfil",
    contact:"📱 Contacto", current:"Actual:", new_contact:"Nuevo teléfono o correo",
    security:"🔒 Seguridad", cur_pass:"Contraseña actual", new_pass:"Nueva contraseña", repeat_new_pass:"Repite nueva contraseña", change_pass:"Cambiar contraseña",
    privacy:"🔐 Privacidad", who_find:"Quién puede encontrarme", who_lastseen:"Quién ve 'última vez'", who_groups:"Quién puede añadirme a grupos", all:"Todos", none:"Nadie",
    appearance:"💬 Apariencia del chat", font_size:"Tamaño de letra", small:"Pequeño", medium:"Mediano", large:"Grande", wallpaper:"Fondo del chat", default:"Estándar", dark:"Oscuro", pattern:"Patrón",
    notifications:"🔔 Notificaciones y Apariencia", sound_notif:"🔊 Sonido de notificación", browser_notif:"🖥 Notificaciones del navegador", dark_theme:"🌙 Tema oscuro", encryption:"🔐 Cifrado de datos",
    data_memory:"📁 Datos y almacenamiento", autoload:"Descarga automática", never:"Nunca", wifi:"Solo Wi-Fi", always:"Siempre", click_open:"🔍 Abrir foto al hacer clic",
    language:"🌐 Idioma", open_support:"Abrir chat de soporte", write_ticket:"Escribir ticket",
    account:"⚙️ Cuenta", delete_acc_note:"Después de eliminar, puedes restaurar tu cuenta en <b>5 días</b> iniciando sesión.", delete_acc:"🗑 Eliminar cuenta",
    media:"🖼 Multimedia", voice:"🎤 Voz", files:"📁 Archivos", links:"🔗 Enlaces", open_chat:"💬 Abrir chat",
    fwd_msg:"Reenviar mensaje", del_msg:"¿Eliminar mensaje?", del_for_all:"🗑 Eliminar para todos", del_for_me:"Eliminar para mí", del_chat_title:"¿Eliminar chat?", del_chat_all:"🗑 Eliminar para todos — el chat desaparece para ambos",
    title_label:"Título", private_hint:"🔒 Privado — ocultar de la búsqueda", add_members:"Añadir miembros",
    rec_hint:"Mantén 🎤/🎥 para grabar.", attach:"Adjuntar", location:"Ubicación", other:"Otro",
    sending:"Enviando", schedule:"🗓 Programar envío", silent:"🔕 Enviar en silencio",
    restore_acc:"Recuperación de cuenta", restore_note:"Confirma la propiedad de la cuenta con un código.", get_code:"Obtener código", new_pass_8:"Nueva contraseña (mín. 8)",
    support_private:"Los tickets son visibles solo para ti.", send_to_support:"Enviar al chat de soporte", go_to_support:"Ir al chat de soporte",
    caption:"Leyenda del archivo (opcional)", no_caption:"Sin leyenda", qr:"Código QR"
  },
  fr: {
    welcome_back:"Bon retour !", login:"Se connecter", phone_or_email:"Téléphone ou e-mail", password:"Mot de passe", login_btn:"Entrer", forgot_pass:"Mot de passe oublié ?", no_account:"Pas de compte ?", register:"S'inscrire",
    step1:"Étape 1 sur 3", your_phone:"Votre téléphone ou e-mail", phone_or_email_req:"Téléphone (obligatoire) ou e-mail", send_code:"Envoyer le code", have_account:"Déjà un compte ?",
    step2:"Étape 2 sur 3", enter_code:"Entrez le code", code_sent_to:"Code envoyé à", demo_code:"Code démo :", code:"Code de vérification", confirm:"Confirmer", resend_code:"Renvoyer le code",
    step3:"Étape 3 sur 3", almost_done:"Presque fini", nickname:"Pseudo (unique)", name:"Votre nom", create_pass:"Créez un mot de passe (min. 6)", repeat_pass:"Répétez le mot de passe", create_acc:"Créer un compte",
    my_profile:"👤 Mon profil / QR", settings:"⚙️ Paramètres", support:"🛟 Support", logout:"↪ Déconnexion",
    chats:"💬 Discussions", contacts:"👥 Contacts", search:"🔍 Recherche", search_placeholder:"Rechercher par pseudo, nom...", create_group:"＋ Créer un groupe", create_channel:"＋ Créer une chaîne",
    msg_placeholder:"Message...", cancel:"Annuler", close:"Fermer", create:"Créer", join:"Rejoindre", done:"Terminé", send:"Envoyer", confirm_change:"Confirmer et changer",
    profile:"👤 Profil", avatar_hint:"Cliquez sur la photo<br>pour la changer", about:"À propos", save_profile:"Enregistrer",
    contact:"📱 Contact", current:"Actuel :", new_contact:"Nouveau téléphone ou e-mail",
    security:"🔒 Sécurité", cur_pass:"Mot de passe actuel", new_pass:"Nouveau mot de passe", repeat_new_pass:"Répétez le nouveau", change_pass:"Changer",
    privacy:"🔐 Confidentialité", who_find:"Qui peut me trouver", who_lastseen:"Qui voit 'vu(e) récemment'", who_groups:"Qui peut m'ajouter aux groupes", all:"Tout le monde", none:"Personne",
    appearance:"💬 Apparence", font_size:"Taille de police", small:"Petit", medium:"Moyen", large:"Grand", wallpaper:"Fond d'écran", default:"Par défaut", dark:"Sombre", pattern:"Motif",
    notifications:"🔔 Notifications", sound_notif:"🔊 Son", browser_notif:"🖥 Notifications navigateur", dark_theme:"🌙 Thème sombre", encryption:"🔐 Chiffrement",
    data_memory:"📁 Données", autoload:"Téléchargement auto", never:"Jamais", wifi:"Wi-Fi", always:"Toujours", click_open:"🔍 Ouvrir la photo au clic",
    language:"🌐 Langue", open_support:"Ouvrir le support", write_ticket:"Écrire un ticket",
    account:"⚙️ Compte", delete_acc_note:"Vous pouvez restaurer votre compte sous <b>5 jours</b> en vous reconnectant.", delete_acc:"🗑 Supprimer le compte",
    media:"🖼 Médias", voice:"🎤 Vocaux", files:"📁 Fichiers", links:"🔗 Liens", open_chat:"💬 Ouvrir la discussion",
    fwd_msg:"Transférer", del_msg:"Supprimer ?", del_for_all:"🗑 Pour tout le monde", del_for_me:"Pour moi", del_chat_title:"Supprimer la discussion ?", del_chat_all:"🗑 Pour tout le monde — disparaît pour les deux",
    title_label:"Titre", private_hint:"🔒 Privé — masquer", add_members:"Ajouter des membres",
    rec_hint:"Maintenez 🎤/🎥 pour enregistrer.", attach:"Joindre", location:"Lieu", other:"Autre",
    sending:"Envoi", schedule:"🗓 Planifier", silent:"🔕 Envoyer en silence",
    restore_acc:"Récupération", restore_note:"Confirmez avec un code.", get_code:"Obtenir le code", new_pass_8:"Nouveau mot de passe (min. 8)",
    support_private:"Visible uniquement par vous.", send_to_support:"Envoyer au support", go_to_support:"Aller au support",
    caption:"Légende (optionnel)", no_caption:"Sans légende", qr:"Code QR"
  },
  de: {
    welcome_back:"Willkommen zurück!", login:"Anmelden", phone_or_email:"Telefon oder E-Mail", password:"Passwort", login_btn:"Anmelden", forgot_pass:"Passwort vergessen?", no_account:"Kein Konto?", register:"Registrieren",
    step1:"Schritt 1 von 3", your_phone:"Ihre Telefonnummer oder E-Mail", phone_or_email_req:"Telefon (erforderlich) oder E-Mail", send_code:"Code senden", have_account:"Bereits ein Konto?",
    step2:"Schritt 2 von 3", enter_code:"Code eingeben", code_sent_to:"Code gesendet an", demo_code:"Demo-Code:", code:"Bestätigungscode", confirm:"Bestätigen", resend_code:"Code erneut senden",
    step3:"Schritt 3 von 3", almost_done:"Fast fertig", nickname:"Spitzname (einzigartig)", name:"Ihr Name", create_pass:"Passwort erstellen (min. 6)", repeat_pass:"Passwort wiederholen", create_acc:"Konto erstellen",
    my_profile:"👤 Mein Profil / QR", settings:"⚙️ Einstellungen", support:"🛟 Support", logout:"↪ Abmelden",
    chats:"💬 Chats", contacts:"👥 Kontakte", search:"🔍 Suche", search_placeholder:"Nach Name suchen...", create_group:"＋ Gruppe erstellen", create_channel:"＋ Kanal erstellen",
    msg_placeholder:"Nachricht...", cancel:"Abbrechen", close:"Schließen", create:"Erstellen", join:"Beitreten", done:"Fertig", send:"Senden", confirm_change:"Bestätigen und ändern",
    profile:"👤 Profil", avatar_hint:"Klicken Sie auf das Foto<br>um es zu ändern", about:"Über mich", save_profile:"Profil speichern",
    contact:"📱 Kontakt", current:"Aktuell:", new_contact:"Neue Telefonnummer oder E-Mail",
    security:"🔒 Sicherheit", cur_pass:"Aktuelles Passwort", new_pass:"Neues Passwort", repeat_new_pass:"Neues Passwort wiederholen", change_pass:"Passwort ändern",
    privacy:"🔐 Datenschutz", who_find:"Wer kann mich finden", who_lastseen:"Wer sieht 'zuletzt online'", who_groups:"Wer kann mich zu Gruppen hinzufügen", all:"Alle", none:"Niemand",
    appearance:"💬 Chat-Design", font_size:"Schriftgröße", small:"Klein", medium:"Mittel", large:"Groß", wallpaper:"Hintergrund", default:"Standard", dark:"Dunkel", pattern:"Muster",
    notifications:"🔔 Benachrichtigungen", sound_notif:"🔊 Ton", browser_notif:"🖥 Browser-Benachrichtigungen", dark_theme:"🌙 Dunkles Design", encryption:"🔐 Verschlüsselung",
    data_memory:"📁 Daten & Speicher", autoload:"Auto-Download", never:"Nie", wifi:"Nur WLAN", always:"Immer", click_open:"🔍 Foto beim Klicken öffnen",
    language:"🌐 Sprache", open_support:"Support-Chat öffnen", write_ticket:"Ticket schreiben",
    account:"⚙️ Konto", delete_acc_note:"Sie können Ihr Konto innerhalb von <b>5 Tagen</b> wiederherstellen.", delete_acc:"🗑 Konto löschen",
    media:"🖼 Medien", voice:"🎤 Sprachnachrichten", files:"📁 Dateien", links:"🔗 Links", open_chat:"💬 Chat öffnen",
    fwd_msg:"Weiterleiten", del_msg:"Löschen?", del_for_all:"🗑 Für alle löschen", del_for_me:"Für mich löschen", del_chat_title:"Chat löschen?", del_chat_all:"🗑 Für alle löschen — Chat verschwindet für beide",
    title_label:"Titel", private_hint:"🔒 Privat — aus Suche ausblenden", add_members:"Mitglieder hinzufügen",
    rec_hint:"Halten Sie 🎤/🎥 zum Aufnehmen.", attach:"Anhängen", location:"Standort", other:"Andere",
    sending:"Senden", schedule:"🗓 Zeitgesteuert senden", silent:"🔕 Lautlos senden",
    restore_acc:"Kontowiederherstellung", restore_note:"Bestätigen Sie mit einem Code.", get_code:"Code anfordern", new_pass_8:"Neues Passwort (min. 8)",
    support_private:"Nur für Sie sichtbar.", send_to_support:"An Support senden", go_to_support:"Zum Support-Chat",
    caption:"Bildunterschrift (optional)", no_caption:"Ohne Beschriftung", qr:"QR-Code"
  },
  zh: {
    welcome_back:"欢迎回来！", login:"登录", phone_or_email:"电话或邮箱", password:"密码", login_btn:"登录", forgot_pass:"忘记密码？", no_account:"没有账号？", register:"注册",
    step1:"第 1 步，共 3 步", your_phone:"您的电话或邮箱", phone_or_email_req:"电话号码（必填）或邮箱", send_code:"发送验证码", have_account:"已有账号？",
    step2:"第 2 步，共 3 步", enter_code:"输入验证码", code_sent_to:"验证码已发送至", demo_code:"演示验证码：", code:"验证码", confirm:"确认", resend_code:"重新发送",
    step3:"第 3 步，共 3 步", almost_done:"快完成了", nickname:"昵称（唯一）", name:"您的名字", create_pass:"创建密码（至少6位）", repeat_pass:"重复密码", create_acc:"创建账号",
    my_profile:"👤 我的主页 / 二维码", settings:"⚙️ 设置", support:"🛟 技术支持", logout:"↪ 退出",
    chats:"💬 聊天", contacts:"👥 联系人", search:"🔍 搜索", search_placeholder:"搜索昵称、名字...", create_group:"＋ 创建群组", create_channel:"＋ 创建频道",
    msg_placeholder:"消息...", cancel:"取消", close:"关闭", create:"创建", join:"加入", done:"完成", send:"发送", confirm_change:"确认并修改",
    profile:"👤 个人资料", avatar_hint:"点击照片<br>更换头像", about:"关于我", save_profile:"保存资料",
    contact:"📱 联系方式", current:"当前：", new_contact:"新电话或邮箱",
    security:"🔒 安全", cur_pass:"当前密码", new_pass:"新密码", repeat_new_pass:"重复新密码", change_pass:"修改密码",
    privacy:"🔐 隐私", who_find:"谁可以找到我", who_lastseen:"谁可以看到最后上线时间", who_groups:"谁可以添加我到群组", all:"所有人", none:"没有人",
    appearance:"💬 聊天外观", font_size:"字体大小", small:"小", medium:"中", large:"大", wallpaper:"聊天背景", default:"默认", dark:"深色", pattern:"图案",
    notifications:"🔔 通知与外观", sound_notif:"🔊 通知音", browser_notif:"🖥 浏览器通知", dark_theme:"🌙 深色主题", encryption:"🔐 数据加密",
    data_memory:"📁 数据与存储", autoload:"媒体自动下载", never:"从不", wifi:"仅 Wi-Fi", always:"总是", click_open:"🔍 点击打开照片",
    language:"🌐 语言", open_support:"打开支持聊天", write_ticket:"写工单",
    account:"⚙️ 账号", delete_acc_note:"删除后，您可以在 <b>5 天</b>内重新登录恢复账号。", delete_acc:"🗑 删除账号",
    media:"🖼 媒体", voice:"🎤 语音", files:"📁 文件", links:"🔗 链接", open_chat:"💬 打开聊天",
    fwd_msg:"转发消息", del_msg:"删除消息？", del_for_all:"🗑 为所有人删除", del_for_me:"为我删除", del_chat_title:"删除聊天？", del_chat_all:"🗑 为所有人删除 — 双方聊天都会消失",
    title_label:"标题", private_hint:"🔒 私密 — 从搜索中隐藏", add_members:"添加成员",
    rec_hint:"按住 🎤/🎥 录音。", attach:"附件", location:"位置", other:"其他",
    sending:"发送中", schedule:"🗓 定时发送", silent:"🔕 静音发送",
    restore_acc:"账号恢复", restore_note:"使用验证码确认账号所有权。", get_code:"获取验证码", new_pass_8:"新密码（至少8位）",
    support_private:"仅您可见。", send_to_support:"发送至支持聊天", go_to_support:"前往支持聊天",
    caption:"媒体说明（可选）", no_caption:"无说明", qr:"二维码"
  },
  ar: {
    welcome_back:"مرحبًا بعودتك!", login:"تسجيل الدخول", phone_or_email:"الهاتف أو البريد الإلكتروني", password:"كلمة المرور", login_btn:"دخول", forgot_pass:"هل نسيت كلمة المرور؟", no_account:"ليس لديك حساب؟", register:"تسجيل",
    step1:"الخطوة 1 من 3", your_phone:"هاتفك أو بريدك", phone_or_email_req:"رقم الهاتف (مطلوب) أو البريد", send_code:"إرسال الرمز", have_account:"لديك حساب بالفعل؟",
    step2:"الخطوة 2 من 3", enter_code:"أدخل الرمز", code_sent_to:"تم إرسال الرمز إلى", demo_code:"رمز تجريبي:", code:"رمز التحقق", confirm:"تأكيد", resend_code:"إعادة إرسال",
    step3:"الخطوة 3 من 3", almost_done:"أوشكنا على الانتهاء", nickname:"الاسم المستعار (فريد)", name:"اسمك", create_pass:"إنشاء كلمة مرور (6 أحرف على الأقل)", repeat_pass:"تأكيد كلمة المرور", create_acc:"إنشاء حساب",
    my_profile:"👤 ملفي / رمز QR", settings:"⚙️ الإعدادات", support:"🛟 الدعم الفني", logout:"↪ تسجيل الخروج",
    chats:"💬 الدردشات", contacts:"👥 جهات الاتصال", search:"🔍 بحث", search_placeholder:"البحث بالاسم أو الهاتف...", create_group:"＋ إنشاء مجموعة", create_channel:"＋ إنشاء قناة",
    msg_placeholder:"رسالة...", cancel:"إلغاء", close:"إغلاق", create:"إنشاء", join:"انضمام", done:"تم", send:"إرسال", confirm_change:"تأكيد وتغيير",
    profile:"👤 الملف الشخصي", avatar_hint:"انقر على الصورة<br>لتغييرها", about:"عني", save_profile:"حفظ الملف",
    contact:"📱 جهة الاتصال", current:"الحالي:", new_contact:"هاتف أو بريد جديد",
    security:"🔒 الأمان", cur_pass:"كلمة المرور الحالية", new_pass:"كلمة المرور الجديدة", repeat_new_pass:"تأكيد كلمة المرور", change_pass:"تغيير كلمة المرور",
    privacy:"🔐 الخصوصية", who_find:"من يمكنه إيجادي", who_lastseen:"من يرى آخر ظهور", who_groups:"من يمكنه إضافتي للمجموعات", all:"الجميع", none:"لا أحد",
    appearance:"💬 مظهر الدردشة", font_size:"حجم الخط", small:"صغير", medium:"متوسط", large:"كبير", wallpaper:"خلفية الدردشة", default:"افتراضي", dark:"داكن", pattern:"نمط",
    notifications:"🔔 الإشعارات والمظهر", sound_notif:"🔊 صوت الإشعارات", browser_notif:"🖥 إشعارات المتصفح", dark_theme:"🌙 الوضع الداكن", encryption:"🔐 تشفير البيانات",
    data_memory:"📁 البيانات والذاكرة", autoload:"تنزيل الوسائط تلقائيًا", never:"أبدًا", wifi:"Wi-Fi فقط", always:"دائمًا", click_open:"🔍 فتح الصورة عند النقر",
    language:"🌐 اللغة", open_support:"فتح دردشة الدعم", write_ticket:"كتابة تذكرة",
    account:"⚙️ الحساب", delete_acc_note:"يمكنك استعادة حسابك خلال <b>5 أيام</b> بتسجيل الدخول مجددًا.", delete_acc:"🗑 حذف الحساب",
    media:"🖼 وسائط", voice:"🎤 صوتيات", files:"📁 ملفات", links:"🔗 روابط", open_chat:"💬 فتح الدردشة",
    fwd_msg:"إعادة توجيه", del_msg:"حذف الرسالة؟", del_for_all:"🗑 حذف للجميع", del_for_me:"حذف لي", del_chat_title:"حذف الدردشة؟", del_chat_all:"🗑 حذف للجميع — تختفي الدردشة للطرفين",
    title_label:"العنوان", private_hint:"🔒 خاص — إخفاء من البحث", add_members:"إضافة أعضاء",
    rec_hint:"استمر بالضغط على 🎤/🎥 للتسجيل.", attach:"إرفاق", location:"الموقع", other:"أخرى",
    sending:"جاري الإرسال", schedule:"🗓 جدولة الإرسال", silent:"🔕 إرسال صامت",
    restore_acc:"استعادة الحساب", restore_note:"أكد ملكية الحساب برمز.", get_code:"الحصول على رمز", new_pass_8:"كلمة مرور جديدة (8 أحرف على الأقل)",
    support_private:"مرئية لك فقط.", send_to_support:"إرسال إلى الدعم", go_to_support:"الذهاب إلى الدعم",
    caption:"تعليق الوسائط (اختياري)", no_caption:"بدون تعليق", qr:"رمز QR"
  },
  tr: {
    welcome_back:"Tekrar hoş geldiniz!", login:"Giriş yap", phone_or_email:"Telefon veya e-posta", password:"Şifre", login_btn:"Giriş", forgot_pass:"Şifrenizi mi unuttunuz?", no_account:"Hesabınız yok mu?", register:"Kayıt ol",
    step1:"1. Adım / 3", your_phone:"Telefon veya e-posta", phone_or_email_req:"Telefon numarası (zorunlu) veya e-posta", send_code:"Kod gönder", have_account:"Zaten hesabınız var mı?",
    step2:"2. Adım / 3", enter_code:"Kodu girin", code_sent_to:"Kod şuraya gönderildi:", demo_code:"Demo kodu:", code:"Doğrulama kodu", confirm:"Onayla", resend_code:"Kodu tekrar gönder",
    step3:"3. Adım / 3", almost_done:"Neredeyse bitti", nickname:"Takma ad (benzersiz)", name:"Adınız", create_pass:"Şifre oluşturun (min. 6 karakter)", repeat_pass:"Şifreyi tekrarla", create_acc:"Hesap oluştur",
    my_profile:"👤 Profilim / QR", settings:"⚙️ Ayarlar", support:"🛟 Destek", logout:"↪ Çıkış yap",
    chats:"💬 Sohbetler", contacts:"👥 Kişiler", search:"🔍 Ara", search_placeholder:"İsim veya telefonla ara...", create_group:"＋ Grup oluştur", create_channel:"＋ Kanal oluştur",
    msg_placeholder:"Mesaj...", cancel:"İptal", close:"Kapat", create:"Oluştur", join:"Katıl", done:"Tamam", send:"Gönder", confirm_change:"Onayla ve değiştir",
    profile:"👤 Profil", avatar_hint:"Fotoğrafa tıklayarak<br>değiştirin", about:"Hakkımda", save_profile:"Profili kaydet",
    contact:"📱 İletişim", current:"Mevcut:", new_contact:"Yeni telefon veya e-posta",
    security:"🔒 Güvenlik", cur_pass:"Mevcut şifre", new_pass:"Yeni şifre", repeat_new_pass:"Yeni şifreyi tekrarla", change_pass:"Şifre değiştir",
    privacy:"🔐 Gizlilik", who_find:"Beni kimler bulabilir", who_lastseen:"Son görülmeyi kimler görür", who_groups:"Beni gruplara kimler ekleyebilir", all:"Herkes", none:"Hiç kimse",
    appearance:"💬 Sohbet Görünümü", font_size:"Yazı boyutu", small:"Küçük", medium:"Orta", large:"Büyük", wallpaper:"Sohbet duvar kağıdı", default:"Varsayılan", dark:"Koyu", pattern:"Desen",
    notifications:"🔔 Bildirimler ve Görünüm", sound_notif:"🔊 Bildirim sesi", browser_notif:"🖥 Tarayıcı bildirimleri", dark_theme:"🌙 Karanlık tema", encryption:"🔐 Veri şifreleme",
    data_memory:"📁 Veri ve Depolama", autoload:"Medya otomatik indirme", never:"Asla", wifi:"Sadece Wi-Fi", always:"Her zaman", click_open:"🔍 Tıklayınca fotoğrafı aç",
    language:"🌐 Dil", open_support:"Destek sohbetini aç", write_ticket:"Talep yaz",
    account:"⚙️ Hesap", delete_acc_note:"Hesabınızı <b>5 gün</b> içinde tekrar giriş yaparak kurtarabilirsiniz.", delete_acc:"🗑 Hesabı sil",
    media:"🖼 Medya", voice:"🎤 Sesli", files:"📁 Dosyalar", links:"🔗 Bağlantılar", open_chat:"💬 Sohbeti aç",
    fwd_msg:"İlet", del_msg:"Mesaj silinsin mi?", del_for_all:"🗑 Herkesten sil", del_for_me:"Benden sil", del_chat_title:"Sohbet silinsin mi?", del_chat_all:"🗑 Herkesten sil — sohbet her ikisinden de kaybolur",
    title_label:"Başlık", private_hint:"🔒 Gizli — aramadan gizle", add_members:"Üye ekle",
    rec_hint:"Kaydetmek için 🎤/🎥 basılı tutun.", attach:"Ekle", location:"Konum", other:"Diğer",
    sending:"Gönderiliyor", schedule:"🗓 Zamanlanmış gönderim", silent:"🔕 Sessiz gönder",
    restore_acc:"Hesap kurtarma", restore_note:"Bir kod ile hesap sahipliğini doğrulayın.", get_code:"Kod al", new_pass_8:"Yeni şifre (min. 8 karakter)",
    support_private:"Sadece sizin görebileceğiniz.", send_to_support:"Desteğe gönder", go_to_support:"Destek sohbetine git",
    caption:"Medya açıklaması (isteğe bağlı)", no_caption:"Açıklamasız", qr:"QR Kod"
  }
};

function t(key) {
  const lang = DB.language || 'ru';
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS['ru'][key] || key;
}

function setLanguage(lang) {
  DB.language = lang;
  document.documentElement.lang = lang;
  const dict = TRANSLATIONS[lang] || TRANSLATIONS['ru'];
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (dict[key].includes('<')) el.innerHTML = dict[key];
      else el.textContent = dict[key];
    }
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.placeholder = dict[key];
  });

  const selLang = $('select-lang');
  if (selLang) selLang.value = lang;
  
  DB.flush();
}

/* ============================================================
   QR
   ============================================================ */
const QR = (() => {
  const ECC_M = { 1:{total:26,data:16,ecc:10},2:{total:44,data:28,ecc:16},3:{total:70,data:44,ecc:22},4:{total:100,data:64,ecc:28},5:{total:134,data:86,ecc:32},6:{total:172,data:108,ecc:36},7:{total:196,data:124,ecc:40},8:{total:242,data:154,ecc:44},9:{total:292,data:182,ecc:52},10:{total:346,data:216,ecc:60} };
  const CAP = {1:14,2:26,3:42,4:62,5:84,6:106,7:122,8:152,9:180,10:213};
  const EXP=new Uint8Array(512),LOG=new Uint8Array(256);
  (function(){let x=1;for(let i=0;i<255;i++){EXP[i]=x;LOG[x]=i;x<<=1;if(x&0x100)x^=0x11d;}for(let i=255;i<512;i++)EXP[i]=EXP[i-255];})();
  function mul(a,b){if(!a||!b)return 0;return EXP[LOG[a]+LOG[b]];}
  function gen(d){let p=[1];for(let i=0;i<d;i++){const n=new Array(p.length+1).fill(0);for(let j=0;j<p.length;j++){n[j]^=p[j];n[j+1]^=mul(p[j],EXP[i]);}p=n;}return p;}
  function rsEncode(data,eccLen){const g=gen(eccLen);const r=new Uint8Array(data.length+eccLen);r.set(data,0);for(let i=0;i<data.length;i++){const f=r[i];if(!f)continue;for(let j=0;j<g.length;j++)r[i+j]^=mul(g[j],f);}return r.slice(data.length);}
  function encode(text,ver){
    const bytes=new TextEncoder().encode(text);const bits=[];const push=(v,l)=>{for(let i=l-1;i>=0;i--)bits.push((v>>i)&1);};
    push(4,4);push(bytes.length,ver<=9?8:16);for(const b of bytes)push(b,8);
    const total=ECC_M[ver].data*8;while(bits.length<total-4)bits.push(0);if(bits.length<total)push(0,total-bits.length);
    let pad=0xEC;while(bits.length<total){push(pad,8);pad=pad===0xEC?0x11:0xEC;}
    const out=new Uint8Array(ECC_M[ver].data);for(let i=0;i<out.length;i++){let v=0;for(let j=0;j<8;j++)v=(v<<1)|bits[i*8+j];out[i]=v;}return out;
  }
  function finder(m,s,r,c){for(let dr=-1;dr<=7;dr++)for(let dc=-1;dc<=7;dc++){const rr=r+dr,cc=c+dc;if(rr<0||rr>=s||cc<0||cc>=s)continue;const inside=dr>=0&&dr<=6&&dc>=0&&dc<=6;let d=false;if(inside){if(dr===0||dr===6||dc===0||dc===6)d=true;else if(dr>=2&&dr<=4&&dc>=2&&dc<=4)d=true;}m[rr][cc]=d?1:0;}}
  function timing(m,s){for(let i=8;i<s-8;i++){if(m[6][i]==null)m[6][i]=i%2===0?1:0;if(m[i][6]==null)m[i][6]=i%2===0?1:0;}}
  function reserve(m,s){for(let i=0;i<9;i++){if(m[8][i]==null)m[8][i]=0;if(m[i][8]==null)m[i][8]=0;}for(let i=0;i<8;i++){if(m[8][s-1-i]==null)m[8][s-1-i]=0;if(m[s-1-i][8]==null)m[s-1-i][8]=0;}m[s-8][8]=1;}
  function data(m,s,bits){let idx=0,dir=-1,row=s-1;for(let col=s-1;col>0;col-=2){if(col===6)col--;while(true){for(let i=0;i<2;i++){const c=col-i;if(m[row][c]==null)m[row][c]=idx<bits.length?bits[idx++]:0;}row+=dir;if(row<0||row>=s){row-=dir;dir=-dir;break;}}}}
  function maskFn(m,s,k){for(let r=0;r<s;r++)for(let c=0;c<s;c++){if(r<=8&&c<=8)continue;if(r<=8&&c>=s-9)continue;if(r>=s-9&&c<=8)continue;if(r===6||c===6)continue;let f=false;switch(k){case 0:f=(r+c)%2===0;break;case 1:f=r%2===0;break;case 2:f=c%3===0;break;case 3:f=(r+c)%3===0;break;case 4:f=(Math.floor(r/2)+Math.floor(c/3))%2===0;break;case 5:f=(r*c)%2+(r*c)%3===0;break;case 6:f=((r*c)%2+(r*c)%3)%2===0;break;case 7:f=((r+c)%2+(r*c)%3)%2===0;break;}if(f)m[r][c]^=1;}}
  function format(m,s,k){const ecc=0b00;const d=(ecc<<3)|k;let rem=d<<10;for(let i=14;i>=10;i--)if((rem>>i)&1)rem^=0b10100110111<<(i-10);const fmt=((d<<10)|rem)^0b101010000010010;const bits=[];for(let i=14;i>=0;i--)bits.push((fmt>>i)&1);const p1=[[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,7],[8,8],[7,8],[5,8],[4,8],[3,8],[2,8],[1,8],[0,8]];const p2=[];for(let i=0;i<8;i++)p2.push([s-1-i,8]);for(let i=0;i<7;i++)p2.push([8,s-7+i]);for(let i=0;i<15;i++){m[p1[i][0]][p1[i][1]]=bits[i];m[p2[i][0]][p2[i][1]]=bits[i];}}
  function build(text){let ver=1;const len=new TextEncoder().encode(text).length;for(let v=1;v<=10;v++){if(len<=CAP[v]){ver=v;break;}if(v===10)throw new Error('Слишком длинный текст');}const d=encode(text,ver);const ecc=rsEncode(d,ECC_M[ver].ecc);const bits=[];for(const b of d)for(let i=7;i>=0;i--)bits.push((b>>i)&1);for(const b of ecc)for(let i=7;i>=0;i--)bits.push((b>>i)&1);const s=ver*4+17;const m=Array.from({length:s},()=>new Array(s).fill(null));finder(m,s,0,0);finder(m,s,0,s-7);finder(m,s,s-7,0);timing(m,s);reserve(m,s);data(m,s,bits);maskFn(m,s,0);format(m,s,0);return {matrix:m,size:s};}
  function render(canvas,text,opts={}){const {matrix,size}=build(text);const scale=opts.scale||Math.floor((opts.size||220)/(size+8));const margin=opts.margin!=null?opts.margin:4;const dim=(size+margin*2)*scale;canvas.width=dim;canvas.height=dim;const ctx=canvas.getContext('2d');ctx.fillStyle=opts.background||'#fff';ctx.fillRect(0,0,dim,dim);ctx.fillStyle=opts.color||'#1e2433';for(let r=0;r<size;r++)for(let c=0;c<size;c++)if(matrix[r][c])ctx.fillRect((c+margin)*scale,(r+margin)*scale,scale,scale);}
  return {build,render};
})();

/* ============================================================
   IndexedDB
   ============================================================ */
const IDB = (() => {
  const DB_NAME='mainland',DB_VERSION=1;let dbPromise=null;
  function open(){if(dbPromise)return dbPromise;dbPromise=new Promise((res,rej)=>{const req=indexedDB.open(DB_NAME,DB_VERSION);req.onupgradeneeded=e=>{const db=e.target.result;if(!db.objectStoreNames.contains('kv'))db.createObjectStore('kv');if(!db.objectStoreNames.contains('chats'))db.createObjectStore('chats',{keyPath:'cid'});if(!db.objectStoreNames.contains('scheduled'))db.createObjectStore('scheduled',{keyPath:'id',autoIncrement:true});};req.onsuccess=()=>res(req.result);req.onerror=()=>rej(req.error);});return dbPromise;}
  async function tx(store,mode='readonly'){const db=await open();return db.transaction(store,mode).objectStore(store);}
  function p(req){return new Promise((res,rej)=>{req.onsuccess=()=>res(req.result);req.onerror=()=>rej(req.error);});}
  async function kvGet(k){return p((await tx('kv')).get(k));}
  async function kvSet(k,v){return p((await tx('kv','readwrite')).put(v,k));}
  async function kvDel(k){return p((await tx('kv','readwrite')).delete(k));}
  async function kvAll(){const s=await tx('kv');const keys=await p(s.getAllKeys());const vals=await p(s.getAll());const out={};keys.forEach((k,i)=>out[k]=vals[i]);return out;}
  async function getChat(cid){const r=await p((await tx('chats')).get(cid));return r?r.msgs:null;}
  async function setChat(cid,msgs){return p((await tx('chats','readwrite')).put({cid,msgs}));}
  async function deleteChat(cid){return p((await tx('chats','readwrite')).delete(cid));}
  async function getAllChats(){const arr=await p((await tx('chats')).getAll());const out={};arr.forEach(x=>out[x.cid]=x.msgs);return out;}
  async function addScheduled(cid,msg,sendAt){return p((await tx('scheduled','readwrite')).add({cid,msg,sendAt}));}
  async function getDueScheduled(now){const all=await p((await tx('scheduled')).getAll());return all.filter(x=>x.sendAt<=now);}
  async function deleteScheduled(id){return p((await tx('scheduled','readwrite')).delete(id));}
  async function migrateFromLocalStorage(){if(await kvGet('_migrated'))return;const keys=['ml_users','ml_convos','ml_contacts','ml_chats','ml_activity','ml_read','ml_typing','ml_hiddenChats'];for(const k of keys){const v=localStorage.getItem(k);if(v){try{await kvSet(k,JSON.parse(v));}catch(e){}}}const simple=['ml_theme','ml_mute','ml_notif'];for(const k of simple){const v=localStorage.getItem(k);if(v!=null)await kvSet(k,v);}await kvSet('_migrated',true);}
  return {kvGet,kvSet,kvDel,kvAll,getChat,setChat,deleteChat,getAllChats,addScheduled,getDueScheduled,deleteScheduled,migrateFromLocalStorage};
})();

/* ============================================================
   DB — кэш + flush
   ============================================================ */
const DB = {
  _cache:{users:[],convos:[],contacts:{},chats:{},activity:{},read:{},typing:{},hiddenChats:{},session:null,theme:'light',mute:'0',notif:'0',encryption:'0',fontSize:'medium',wallpaper:'default',autoLoad:'wifi',clickOpen:'1',language:'ru',ready:false},
  _saveQueue:new Set(), _debounce:null,
  async init(){
    if(this._cache.ready)return; await IDB.migrateFromLocalStorage(); const all=await IDB.kvAll(); const c=this._cache;
    c.users=all['ml_users']||[]; c.convos=all['ml_convos']||[]; c.contacts=all['ml_contacts']||{}; c.activity=all['ml_activity']||{}; c.read=all['ml_read']||{}; c.typing=all['ml_typing']||{}; c.hiddenChats=all['ml_hiddenChats']||{}; c.session=all['ml_session']||null; c.theme=all['ml_theme']||'light'; c.mute=all['ml_mute']||'0'; c.notif=all['ml_notif']||'0'; c.encryption=all['ml_encryption']||'0'; 
    c.fontSize=all['ml_fontSize']||'medium'; c.wallpaper=all['ml_wallpaper']||'default'; c.autoLoad=all['ml_autoLoad']||'wifi'; c.clickOpen=all['ml_clickOpen']||'1'; c.language=all['ml_language']||'ru';
    c.chats=await IDB.getAllChats(); c.ready=true;
  },
  _mark(key){this._saveQueue.add(key);clearTimeout(this._debounce);this._debounce=setTimeout(()=>this._flush(),50);},
  async _flush(){
    const keys=[...this._saveQueue];this._saveQueue.clear();
    for(const k of keys){
      try{
        if(k==='chats'){for(const [cid,msgs] of Object.entries(this._cache.chats))await IDB.setChat(cid,msgs);}
        else{const map={users:'ml_users',convos:'ml_convos',contacts:'ml_contacts',activity:'ml_activity',read:'ml_read',typing:'ml_typing',hiddenChats:'ml_hiddenChats',session:'ml_session',theme:'ml_theme',mute:'ml_mute',notif:'ml_notif',encryption:'ml_encryption',fontSize:'ml_fontSize',wallpaper:'ml_wallpaper',autoLoad:'ml_autoLoad',clickOpen:'ml_clickOpen',language:'ml_language'};if(map[k])await IDB.kvSet(map[k],this._cache[k]);}
      }catch(e){console.error('flush',k,e);}
    }
  },
  async flush(){clearTimeout(this._debounce);await this._flush();},
};
['users','convos','contacts','chats','activity','read','typing','hiddenChats','session','theme','mute','notif','encryption','fontSize','wallpaper','autoLoad','clickOpen','language'].forEach(k=>{
  Object.defineProperty(DB,k,{get(){return this._cache[k];},set(v){this._cache[k]=v;this._mark(k);}});
});

/* ============================================================
   Crypto
   ============================================================ */
const Crypto=(()=>{
  const enc=new TextEncoder(),dec=new TextDecoder();const ITER=150000;const KEY_CACHE=new Map();
  function b2b(buf){const b=new Uint8Array(buf);let s='';for(let i=0;i<b.length;i++)s+=String.fromCharCode(b[i]);return btoa(s);}
  function b2u(b64){const s=atob(b64);const b=new Uint8Array(s.length);for(let i=0;i<s.length;i++)b[i]=s.charCodeAt(i);return b.buffer;}
  function rnd(n){const b=new Uint8Array(n);crypto.getRandomValues(b);return b;}
  async function derive(password,saltB64){const salt=saltB64?new Uint8Array(b2u(saltB64)):rnd(16);const base=await crypto.subtle.importKey('raw',enc.encode(password),'PBKDF2',false,['deriveKey']);const key=await crypto.subtle.deriveKey({name:'PBKDF2',salt,iterations:ITER,hash:'SHA-256'},base,{name:'AES-GCM',length:256},false,['encrypt','decrypt']);return {key,salt:b2b(salt)};}
  async function encryptString(text,key){if(text==null)return null;const iv=rnd(12);const ct=await crypto.subtle.encrypt({name:'AES-GCM',iv},key,enc.encode(String(text)));return {v:1,iv:b2b(iv),ct:b2b(ct)};}
  async function decryptString(payload,key){if(payload==null)return null;if(typeof payload==='string')return payload;try{const iv=new Uint8Array(b2u(payload.iv));const ct=b2u(payload.ct);return dec.decode(await crypto.subtle.decrypt({name:'AES-GCM',iv},key,ct));}catch(e){return '[не удалось расшифровать]';}}
  function setKey(uid,key,salt){KEY_CACHE.set(uid,{key,salt});}
  function getKey(uid){return KEY_CACHE.get(uid);}
  function clearAll(){KEY_CACHE.clear();}
  return {derive,encryptString,decryptString,setKey,getKey,clearAll};
})();

/* ============================================================
   Константы и состояние
   ============================================================ */
const EMOJIS=['👍','❤️','😂','😮','😢','🔥','🎉','👏'];
const ONLINE_MS=60000; const EDIT_MS=5*60*1000; const DELETE_ALL_MS=5*60*1000; const RESTORE_DAYS=5; const SUPPORT_ID='support';

let regState={}, currentChatId=null, currentOtherId=null, currentConvo=null, currentTab='chats', knownMsgIds=new Set(), replyTarget=null, forwardTarget=null, deleteTargetId=null, profileMediaCat='media', chosenMedia=[], forgotCode=null, forgotAttempts=0, sessionKey=null, encryptEnabled=false, contactCodeState=null, incomingTimer=null, newConvoKind='group', joinTargetId=null, currentLbMedia=null, currentLbMsgId=null, currentLbAttachments=null, currentLbIndex=0;

/* ---------- Утилиты ---------- */
const $=id=>document.getElementById(id);
function showScreen(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));$(id).classList.add('active');}
function err(id,msg){const e=$(id);if(e)e.textContent=msg;}
function isEmail(v){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);}
function isPhone(v){return /^\+?[0-9\s\-()]{10,16}$/.test(v);}
function normContact(v){v=String(v||'').trim();return isEmail(v)?v.toLowerCase():v;}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function me(){return DB.users.find(u=>u.id===DB.session);}
function avatarHTML(u){return u.avatar?`<img src="${u.avatar}" alt="">`:esc((u.name||'?')[0].toUpperCase());}
function isDeleted(uid){const u=DB.users.find(x=>x.id===uid);return !!(u&&u.deleted);}
function myContacts(){return DB.contacts[DB.session]||[];}
function hashColor(id){let h=0;for(const c of String(id))h=(h*31+c.charCodeAt(0))%360;return `hsl(${h},60%,45%)`;}
function fmtDur(ms){const s=Math.round(ms/1000);return Math.floor(s/60)+':'+String(s%60).padStart(2,'0');}
function mediaSizeClass(w,h){if(!w||!h)return 'media-m';const m=Math.max(w,h);if(m<=200)return 'media-s';if(m<=800)return 'media-m';return 'media-l';}
function readMediaDims(file){return new Promise(resolve=>{const url=URL.createObjectURL(file);if(file.type.startsWith('video')){const v=document.createElement('video');v.preload='metadata';v.onloadedmetadata=()=>{resolve({w:v.videoWidth,h:v.videoHeight});URL.revokeObjectURL(url);};v.onerror=()=>{resolve({w:0,h:0});URL.revokeObjectURL(url);};v.src=url;}else if(file.type.startsWith('image/')){const img=new Image();img.onload=()=>{resolve({w:img.naturalWidth,h:img.naturalHeight});URL.revokeObjectURL(url);};img.onerror=()=>{resolve({w:0,h:0});URL.revokeObjectURL(url);};img.src=url;}else{resolve({w:0,h:0});}});}

/* ---------- Шифрование ---------- */
async function initEncryption(password){
  const u=me();if(!u)return;
  const saltKey='salt_'+u.id;let saltB64=await IDB.kvGet(saltKey);
  if(!saltB64){const r=await Crypto.derive(password,null);saltB64=r.salt;await IDB.kvSet(saltKey,saltB64);sessionKey=r.key;}
  else{const r=await Crypto.derive(password,saltB64);sessionKey=r.key;}
  Crypto.setKey(u.id,sessionKey,saltB64);
}
async function encField(p){if(!encryptEnabled||!sessionKey||p==null)return p;return Crypto.encryptString(String(p),sessionKey);}
async function decField(p){if(!encryptEnabled||!sessionKey){if(p&&typeof p==='object'&&p.ct)return '[зашифровано]';return p;}return Crypto.decryptString(p,sessionKey);}
async function encryptMessageFields(m){
  const out={...m};if(m.text!=null)out.text=await encField(m.text);
  if(m.media&&typeof m.media==='string'&&m.media.startsWith('data:'))out.media=await encField(m.media);
  if(Array.isArray(m.attachments)){out.attachments=[];for(const a of m.attachments){const copy={...a};if(copy.media&&typeof copy.media==='string'&&copy.media.startsWith('data:'))copy.media=await encField(copy.media);out.attachments.push(copy);}}
  return out;
}
async function decryptMessageFields(m){
  const out={...m};if(m.text!=null)out.text=await decField(m.text);
  if(m.media&&typeof m.media==='object'&&m.media.ct)out.media=await decField(m.media);
  if(Array.isArray(m.attachments)){out.attachments=[];for(const a of m.attachments){const copy={...a};if(copy.media&&typeof copy.media==='object'&&copy.media.ct)copy.media=await decField(copy.media);out.attachments.push(copy);}}
  return out;
}

/* ---------- Приватность ---------- */
function priv(uid,k){const u=DB.users.find(x=>x.id===uid);return (u&&u.privacy&&u.privacy[k])||'all';}
function myContactsOf(uid){return DB.contacts[uid]||[];}
function canFindMe(u){if(u.deleted)return false;const p=priv(u.id,'find');if(p==='all')return true;if(p==='none')return false;return myContactsOf(u.id).includes(DB.session);}
function lastSeenVisible(v,uid){const p=priv(uid,'lastseen');if(p==='all')return true;if(p==='none')return false;return myContactsOf(uid).includes(v);}

/* ---------- Тема / звук / оформление ---------- */
function applyTheme(){document.body.classList.toggle('dark',DB.theme==='dark');$('theme-btn').textContent=DB.theme==='dark'?'☀':'☾';}
function toggleTheme(){DB.theme=DB.theme==='dark'?'light':'dark';applyTheme();DB.flush();}
function applyMute(){$('mute-btn').textContent=DB.mute==='1'?'🔇':'🔊';}
function toggleMute(){DB.mute=DB.mute==='1'?'0':'1';applyMute();DB.flush();}
function applyFontSize(){const size=DB.fontSize||'medium';document.body.classList.remove('font-small','font-large');if(size==='small')document.body.classList.add('font-small');if(size==='large')document.body.classList.add('font-large');}
function applyWallpaper(){const wp=DB.wallpaper||'default';document.body.setAttribute('data-wallpaper',wp);}

let audioCtx=null;
function playNotifSound(){if(DB.mute==='1')return;try{audioCtx=audioCtx||new (window.AudioContext||window.webkitAudioContext)();if(audioCtx.state==='suspended')audioCtx.resume();const t=audioCtx.currentTime;[[880,0],[1174.66,0.13]].forEach(([f,d])=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type='sine';o.frequency.value=f;g.gain.setValueAtTime(0.0001,t+d);g.gain.exponentialRampToValueAtTime(0.22,t+d+0.02);g.gain.exponentialRampToValueAtTime(0.0001,t+d+0.28);o.connect(g);g.connect(audioCtx.destination);o.start(t+d);o.stop(t+d+0.3);});}catch(e){}}

/* ---------- Непрочитанные ---------- */
function markRead(cid){const r=DB.read;(r[DB.session]=r[DB.session]||{})[cid]=Date.now();DB.read=r;}
function myHidden(){return DB.hiddenChats[DB.session]||[];}
function amIParticipant(cid){if(cid===SUPPORT_ID)return true;if(cid.includes(DB.session))return true;const c=DB.convos.find(x=>x.id===cid);return !!(c&&c.members.includes(DB.session));}
function unreadCount(cid,msgs){if(myHidden().includes(cid))return 0;const since=(DB.read[DB.session]||{})[cid]||0;return msgs.filter(m=>m.from!==DB.session&&m.ts>since&&!m.deletedForAll&&!(m.deletedFor||[]).includes(DB.session)).length;}
function totalUnread(){let n=0;for(const [cid,msgs] of Object.entries(DB.chats))if(amIParticipant(cid))n+=unreadCount(cid,msgs);return n;}
function updateTabBadge(){const n=totalUnread();const b=$('tab-badge');b.textContent=n>99?'99+':n;b.style.display=n>0?'inline-block':'none';}
function unhideChat(cid){const h=DB.hiddenChats;if((h[DB.session]||[]).includes(cid)){h[DB.session]=h[DB.session].filter(x=>x!==cid);DB.hiddenChats=h;}}

/* ---------- Активность ---------- */
function ping(){if(!DB.session)return;const a=DB.activity;a[DB.session]=Date.now();DB.activity=a;}
function isOnline(uid){return !isDeleted(uid)&&(DB.activity[uid]||0)>Date.now()-ONLINE_MS;}
function lastSeenText(uid){if(!lastSeenVisible(DB.session,uid))return t('hidden_privacy');if(isOnline(uid))return 'online';const ts=DB.activity[uid]||(DB.users.find(u=>u.id===uid)||{}).created||Date.now();return t('last_seen')+' '+new Date(ts).toLocaleString(DB.language||'ru',{day:'numeric',month:'long',hour:'2-digit',minute:'2-digit'});}

/* ---------- Поддержка ---------- */
function ensureSupportChat(){if(!DB.session)return;if(!DB.users.some(u=>u.id==='support')){DB.users=[...DB.users,{id:'support',nick:'support',name:'🛟 ' + t('support'),contact:'support@mainland',pass:'',created:Date.now(),system:true}];}const chats=DB.chats;if(!chats[SUPPORT_ID]){chats[SUPPORT_ID]=[{id:'m'+Date.now(),from:'support',system:true,text:'🛟 ' + t('support_welcome'),ts:Date.now(),reactions:{}}];DB.chats=chats;}}

/* ---------- Тосты ---------- */
function showToast(sender,preview,onClick){
  const toast=document.createElement('div');toast.className='toast';
  toast.innerHTML=`<div class="avatar">${avatarHTML(sender)}</div><div class="t-info"><div class="t-name">${esc(sender.name)}</div><div class="t-text">${preview}</div></div>`;
  const dismiss=()=>{toast.classList.add('out');setTimeout(()=>toast.remove(),300);};
  toast.onclick=()=>{dismiss();onClick&&onClick();};$('toasts').appendChild(toast);setTimeout(dismiss,5000);
}
function msgPreview(m){
  if(!m)return '';if(m.system)return esc(m.text);if(m.deletedForAll)return t('msg_deleted');
  if(Array.isArray(m.attachments)&&m.attachments.length)return `📎 ${m.attachments.length} ${t('attachments')}`;
  if(m.mediaType==='voice')return '🎤 '+t('voice');if(m.mediaType==='videocircle')return '📹 '+t('videocircle');
  if(m.mediaType==='document')return '📄 '+esc(m.fileName||t('document'));if(m.mediaType==='location')return '📍 '+t('location');
  if(m.mediaType==='contact')return '👤 '+t('contact');if(m.media)return m.mediaType==='video'?'🎬 '+t('video'):'📷 '+t('photo');
  if(m.forwarded)return '↪ '+esc(typeof m.text==='string'?m.text:t('media'));return esc(typeof m.text==='string'?m.text:'');
}

/* ============================================================
   ВХОД / РЕГИСТРАЦИЯ (Строгая валидация телефона)
   ============================================================ */
function sendCode(){
  const raw=$('reg-id').value.trim();err('reg1-err','');
  
  if(!isEmail(raw) && !isPhone(raw)) {
    return err('reg1-err', t('real_phone_err'));
  }
  
  const v=normContact(raw);const exist=DB.users.find(u=>normContact(u.contact).toLowerCase()===v.toLowerCase());
  if(exist&&exist.deleted)return err('reg1-err',t('contact_deleted'));
  if(exist)return err('reg1-err',t('contact_exists'));
  
  regState={contact:v,code:String(Math.floor(100000+Math.random()*900000))};
  $('reg-dest').textContent=v;$('demo-code').textContent=regState.code;$('reg-code').value='';err('reg2-err','');showScreen('scr-reg-step2');
  
  setTimeout(() => {
    alert(`[${t('sms_simulation')}]\n${t('code')} ${regState.code}\n\n${t('sent_to')} ${v}`);
  }, 300);
}
function verifyCode(){err('reg2-err','');if($('reg-code').value.trim()!==regState.code)return err('reg2-err',t('invalid_code'));err('reg3-err','');showScreen('scr-reg-step3');}
async function doRegister(){
  err('reg3-err','');const nick=$('reg-nick').value.trim().toLowerCase();const name=$('reg-name').value.trim();const p1=$('reg-pass').value,p2=$('reg-pass2').value;
  if(nick.length<3||!/^[a-z0-9_\.]+$/.test(nick))return err('reg3-err',t('nick_err'));
  if(DB.users.some(u=>u.nick===nick))return err('reg3-err',t('nick_taken'));if(!name)return err('reg3-err',t('name_req'));
  if(p1.length<6)return err('reg3-err',t('pass_short'));if(p1!==p2)return err('reg3-err',t('pass_mismatch'));
  if(!regState||!regState.contact)return err('reg3-err',t('contact_req'));
  const contact=normContact(regState.contact);if(DB.users.some(u=>normContact(u.contact).toLowerCase()===contact.toLowerCase()))return err('reg3-err',t('contact_exists'));
  const user={id:'u'+Date.now(),contact,nick,name,pass:p1,created:Date.now(),privacy:{find:'all',lastseen:'all',groups:'all'}};
  DB.users=[...DB.users,user];DB.session=user.id;encryptEnabled=(DB.encryption==='1');
  localStorage.setItem('ml_session_fallback', DB.session); // Дублируем сессию
  await initEncryption(p1);await DB.flush();ping();await enterApp();
}
async function doLogin(){
  err('login-err','');const raw=$('login-id').value.trim();const v=raw.toLowerCase();const pass=$('login-pass').value;
  if(!raw||!pass)return err('login-err',t('login_pass_req'));
  const u=DB.users.find(x=>x.nick===v||normContact(x.contact).toLowerCase()===v);
  if(!u||u.pass!==pass)return err('login-err',t('invalid_login'));
  if(u.deleted){
    const left=RESTORE_DAYS*24*60*60*1000-(Date.now()-(u.deletedAt||0));
    if(left>0){const days=Math.ceil(left/(24*60*60*1000));if(confirm(`${t('acc_deleted')}\n${t('reason')}: ${u.deletedReason||t('no_reason')}\n\n${t('can_restore')} (~${days} ${t('days')}). ${t('restore_q')}`)){const users=DB.users;const acc=users.find(x=>x.id===u.id);acc.deleted=false;acc.deletedReason=null;acc.deletedAt=null;DB.users=users;}else return;}
    else{return err('login-err',t('acc_deleted_long'));}
  }
  DB.session=u.id;encryptEnabled=(DB.encryption==='1');
  localStorage.setItem('ml_session_fallback', DB.session); // Дублируем сессию
  await initEncryption(pass);await DB.flush();ping();await enterApp();
}
async function doLogout(){
  if(incomingTimer){clearInterval(incomingTimer);incomingTimer=null;}
  DB.session=null;localStorage.removeItem('ml_session_fallback');await DB.flush();Crypto.clearAll();sessionKey=null;$('login-pass').value='';showScreen('scr-login');
}
function deleteAccount(){
  const reason=prompt(t('del_reason_prompt'));
  if(reason===null)return;if(!reason.trim())return alert(t('reason_req'));
  if(!confirm(t('del_acc_confirm')))return;
  const users=DB.users;const u=users.find(x=>x.id===DB.session);
  u.deleted=true;u.deletedReason=reason.trim();u.deletedAt=Date.now();DB.users=users;
  DB.flush().then(()=>doLogout());alert(t('acc_deleted_alert'));
}
async function enterApp(){
  const u=me();if(!u||u.deleted)return doLogout();
  $('drawer-nick').textContent='@'+u.nick;if('Notification' in window&&Notification.permission==='default')Notification.requestPermission();
  ensureSupportChat();await DB.flush();await processScheduled();applyTheme();applyMute();applyFontSize();applyWallpaper();setLanguage(DB.language);openMain();startTimers();
}

/* ============================================================
   ГЛАВНЫЙ ИНТЕРФЕЙС
   ============================================================ */
function openMain(){
  if(me()&&me().deleted)return doLogout();
  currentChatId=null;currentConvo=null;currentOtherId=null;cancelReply();
  showScreen('scr-main');renderList();updateTabBadge();
}
function switchTab(tab){
  currentTab=tab;document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));$('tab-'+tab).classList.add('active');
  $('search-box-wrap').style.display=(tab==='chats')?'none':'block';$('create-row').style.display=(tab==='search')?'flex':'none';
  $('search-input').placeholder=tab==='contacts'?t('search_contacts'):t('search_placeholder');renderList();
}
function statusBadge(uid){
  if(uid==='support')return `<div class="sub">${t('support_private')}</div>`;
  if(isDeleted(uid))return `<div class="sub deleted">${t('deleted_acc')}</div>`;
  return isOnline(uid)?`<div class="sub onl">${t('online')}</div>`:`<div class="sub">${esc(lastSeenText(uid))}</div>`;
}
function renderList(){
  const q=$('search-input').value.trim().toLowerCase();const list=$('list');let html='';
  if(currentTab==='search'){
    const found=DB.users.filter(u=>u.id!==DB.session&&u.id!=='support'&&canFindMe(u)&&(!q||u.nick.toLowerCase().includes(q)||u.name.toLowerCase().includes(q)||normContact(u.contact).toLowerCase().includes(q)));
    const foundConvos=DB.convos.filter(c=>!c.hidden&&(!q||c.title.toLowerCase().includes(q)));
    if(!found.length&&!foundConvos.length){list.innerHTML=`<div class="empty">${t('nothing_found')}</div>`;return;}
    if(foundConvos.length){
      html+=`<div class="sec-title">${t('groups_channels')}</div>`;
      html+=foundConvos.map(c=>{const member=c.members.includes(DB.session);return `<div class="item" onclick="${member?`openConvoChat('${c.id}')`:`openJoinConvo('${c.id}')`}"><div class="avatar sq">${esc(c.title[0].toUpperCase())}</div><div class="info"><div class="name">${esc(c.title)}</div><div class="sub">${c.kind==='channel'?'📢 '+t('channel'):'👥 '+t('group')} · ${c.members.length}</div></div><div class="action">${member?t('open')+' →':'＋ '+t('join')}</div></div>`;}).join('');
    }
    if(found.length){
      html+=`<div class="sec-title">${t('people')}</div>`;
      html+=found.map(u=>{const inContacts=myContacts().includes(u.id);const sub=u.deleted?`<div class="sub deleted">${t('deleted_acc')}</div>`:`<div class="sub">@${esc(u.nick)} · ${esc(u.contact)}</div>`;return `<div class="item" onclick="userClick('${u.id}')"><div class="avatar ${u.deleted?'deleted':''}">${avatarHTML(u)}<div class="dot ${isOnline(u.id)?'on':''}"></div></div><div class="info"><div class="name">${esc(u.name)}</div>${sub}</div><div class="action">${u.deleted?'—':(inContacts?t('write')+' →':'+ '+t('add'))}</div></div>`;}).join('');
    }
  }
  if(currentTab==='contacts'){
    const contacts=myContacts().map(id=>DB.users.find(u=>u.id===id)).filter(Boolean).filter(u=>!q||u.nick.toLowerCase().includes(q)||u.name.toLowerCase().includes(q)||normContact(u.contact).toLowerCase().includes(q));
    if(!contacts.length){list.innerHTML=`<div class="empty">${t('no_contacts')}</div>`;return;}
    html=contacts.map(u=>`<div class="item" onclick="openProfile('${u.id}')"><div class="avatar ${u.deleted?'deleted':''}">${avatarHTML(u)}<div class="dot ${isOnline(u.id)?'on':''}"></div></div><div class="info"><div class="name">${esc(u.name)}</div>${statusBadge(u.id)}</div>${u.deleted?'':`<div class="action" onclick="event.stopPropagation();openChat('${u.id}')">${t('write')} →</div>`}</div>`).join('');
  }
  if(currentTab==='chats'){
    const entries=[];ensureSupportChat();const sMsgs=DB.chats[SUPPORT_ID]||[];if(sMsgs.length)entries.push({cid:SUPPORT_ID,kind:'support',msgs:sMsgs,last:sMsgs[sMsgs.length-1]});
    for(const [cid,msgs] of Object.entries(DB.chats)){
      if(cid===SUPPORT_ID)continue;if(!amIParticipant(cid)||myHidden().includes(cid)||!msgs.length)continue;
      if(cid.includes('|')){const otherId=cid.split('|').find(x=>x!==DB.session);const u=DB.users.find(x=>x.id===otherId);if(u)entries.push({cid,kind:'user',u,msgs,last:msgs[msgs.length-1]});}
      else{const c=DB.convos.find(x=>x.id===cid);if(c&&c.members.includes(DB.session))entries.push({cid,kind:c.kind,convo:c,msgs,last:msgs[msgs.length-1]});}
    }
    const filtered=entries.filter(c=>{if(!q)return true;if(c.kind==='support')return 'техподдержка'.includes(q);if(c.u)return c.u.nick.toLowerCase().includes(q)||c.u.name.toLowerCase().includes(q);return c.convo.title.toLowerCase().includes(q);}).sort((a,b)=>{if(a.kind==='support')return -1;if(b.kind==='support')return 1;return b.last.ts-a.last.ts;});
    if(!filtered.length){list.innerHTML=`<div class="empty">${t('no_chats')}</div>`;return;}
    html=filtered.map(c=>{
      if(c.kind==='support'){const un=unreadCount(c.cid,c.msgs);return `<div class="item ${un?'unread':''}" onclick="openSupport()"><div class="avatar sq" style="background:#2ecc71;">🛟</div><div class="info"><div class="name">${t('support')}</div><div class="sub">${msgPreview(c.last)}</div></div>${un?`<div class="unread-badge">${un}</div>`:''}</div>`;}
      const un=unreadCount(c.cid,c.msgs);
      if(c.kind==='user'){
        const u=c.u;let preview,subCls='';if(u.deleted){preview=t('deleted_acc');subCls='deleted';}else{preview=msgPreview(c.last);if(c.last.replyTo)preview='↩ '+preview;}
        return `<div class="item ${un?'unread':''}" onclick="openChat('${u.id}')"><div class="avatar ${u.deleted?'deleted':''}">${avatarHTML(u)}<div class="dot ${isOnline(u.id)?'on':''}"></div></div><div class="info"><div class="name">${esc(u.name)}</div><div class="sub ${subCls}">${preview}</div></div>${un?`<div class="unread-badge">${un}</div>`:''}</div>`;
      }
      const convo=c.convo;let preview=msgPreview(c.last);if(c.last.replyTo)preview='↩ '+preview;
      return `<div class="item ${un?'unread':''}" onclick="openConvoChat('${convo.id}')"><div class="avatar sq">${esc(convo.title[0].toUpperCase())}</div><div class="info"><div class="name">${esc(convo.title)}</div><div class="sub">${convo.kind==='channel'?'📢':'👥'} ${preview}</div></div>${un?`<div class="unread-badge">${un}</div>`:''}</div>`;
    }).join('');
  }
  list.innerHTML=html;
}
function userClick(userId){
  if(isDeleted(userId))return;
  const c=DB.contacts;const mine=c[DB.session]||[];
  if(!mine.includes(userId)){c[DB.session]=[...mine,userId];DB.contacts=c;renderList();}else openChat(userId);
}

/* ---------- Группы/каналы ---------- */
function openCreate(kind){
  newConvoKind=kind;$('nc-title-h').textContent=kind==='channel'?t('create_channel'):t('create_group');
  $('nc-title').placeholder=t('title_label');
  $('nc-title').value='';$('nc-private').checked=false;$('newconvo-modal').classList.add('open');setTimeout(()=>$('nc-title').focus(),60);
}
async function createConvo(){
  const title=$('nc-title').value.trim();if(title.length<2)return alert(t('title_err'));
  const convo={id:'g'+Date.now(),kind:newConvoKind,title,ownerId:DB.session,members:[DB.session],hidden:$('nc-private').checked,created:Date.now()};
  DB.convos=[...DB.convos,convo];$('newconvo-modal').classList.remove('open');
  await pushMessage(convo.id,{id:'m'+Date.now(),from:DB.session,text:newConvoKind==='channel'?'📢 '+t('channel_created'):'👥 '+t('group_created'),ts:Date.now(),reactions:{},system:true});
  if(newConvoKind==='group')openConvoProfile(convo.id);else openConvoChat(convo.id);
}
function openJoinConvo(id){
  const c=DB.convos.find(x=>x.id===id);if(!c)return;joinTargetId=id;
  $('join-title').textContent=(c.kind==='channel'?'📢 ':'👥 ')+c.title;
  $('join-note').textContent=(c.kind==='channel'?t('channel'):t('group'))+' · '+c.members.length+(c.hidden?' · '+t('private'):' · '+t('public'));
  $('join-modal').classList.add('open');
}
function joinConvo(){
  const convos=DB.convos;const c=convos.find(x=>x.id===joinTargetId);$('join-modal').classList.remove('open');
  if(!c)return;if(!c.members.includes(DB.session))c.members.push(DB.session);DB.convos=convos;openConvoChat(c.id);
}
function openConvoChat(cid){
  const convo=DB.convos.find(x=>x.id===cid);if(!convo)return;
  currentConvo=convo;currentOtherId=null;currentChatId=cid;unhideChat(cid);markRead(cid);cancelReply();
  $('chat-avatar').classList.remove('deleted');$('chat-avatar').classList.add('sq');$('chat-dot').style.display='none';
  $('chat-avatar-inner').innerHTML=esc(convo.title[0].toUpperCase());$('chat-name').textContent=convo.title;updateConvoHeader();
  const inp=$('msg-input');if(convo.kind==='channel'&&convo.ownerId!==DB.session){inp.disabled=true;inp.placeholder=t('channel_only_owner');}else{inp.disabled=false;inp.placeholder=t('msg_placeholder');}
  showScreen('scr-chat');renderMessages();updateTabBadge();
}
function updateConvoHeader(){
  if(!currentConvo)return;const c=currentConvo;const n=c.members.length;const onlineN=c.members.filter(id=>isOnline(id)).length;
  $('chat-sub').textContent=(c.kind==='channel'?'📢 '+t('channel'):'👥 '+t('group'))+' · '+n+(c.kind==='channel'?' '+t('subscribers'):' '+t('members'))+' · '+onlineN+' '+t('online');
  $('chat-sub').style.color='var(--muted)';
}
function canPostHere(){
  if(currentChatId===SUPPORT_ID)return true;if(!currentConvo)return !isDeleted(currentOtherId);
  if(currentConvo.kind==='channel')return currentConvo.ownerId===DB.session;return true;
}
function chatIdWith(otherId){return [DB.session,otherId].sort().join('|');}
function openChat(otherId){
  if(otherId==='support')return openSupport();
  currentOtherId=otherId;currentConvo=null;currentChatId=chatIdWith(otherId);unhideChat(currentChatId);markRead(currentChatId);
  const u=DB.users.find(x=>x.id===otherId);if(!u)return;$('chat-name').textContent=u.name;updateChatHeader();cancelReply();
  const inp=$('msg-input');if(u.deleted){inp.disabled=true;inp.placeholder=t('cannot_send_deleted');}else{inp.disabled=false;inp.placeholder=t('msg_placeholder');}
  showScreen('scr-chat');renderMessages();updateTabBadge();
}
function openSupport(){
  ensureSupportChat();currentConvo=null;currentOtherId='support';currentChatId=SUPPORT_ID;markRead(SUPPORT_ID);
  $('chat-name').textContent='🛟 '+t('support');$('chat-sub').textContent=t('support_private');$('chat-sub').style.color='var(--muted)';
  $('chat-avatar-inner').innerHTML='🛟';$('chat-avatar').classList.add('sq');$('chat-avatar').classList.remove('deleted');$('chat-dot').style.display='none';
  $('msg-input').disabled=false;$('msg-input').placeholder=t('describe_problem');showScreen('scr-chat');renderMessages();
}
function updateChatHeader(){
  if(currentChatId===SUPPORT_ID)return;const u=DB.users.find(x=>x.id===currentOtherId);if(!u)return;
  $('chat-avatar').classList.remove('sq');$('chat-dot').style.display='block';$('chat-avatar-inner').innerHTML=avatarHTML(u);$('chat-avatar').classList.toggle('deleted',!!u.deleted);
  $('chat-dot').className='dot'+(!u.deleted&&isOnline(u.id)?' on':'');const st=$('chat-sub');
  if(u.deleted){st.textContent=t('deleted_acc');st.style.color='var(--danger)';return;}
  st.textContent=isOnline(u.id)?'● '+t('online'):lastSeenText(u.id);st.style.color=isOnline(u.id)?'var(--ok)':'var(--muted)';
}
function openChatProfile(){
  if(currentConvo)openConvoProfile(currentConvo.id);
  else if(currentOtherId==='support')openSupportProfile();
  else if(currentOtherId)openProfile(currentOtherId);
}

/* ---------- Сообщения ---------- */
async function renderMessages(){
  const raw=(DB.chats[currentChatId]||[]).filter(m=>!(m.deletedFor||[]).includes(DB.session));const box=$('messages');box.innerHTML='';
  if(!raw.length){box.innerHTML=`<div class="empty">${t('first_msg')}</div>`;return;}
  const parts=[];for(const m of raw){const dec=await decryptMessageFields(m);parts.push(renderOneMessage(dec));}
  box.innerHTML=parts.join('');
  
  const isNearBottom = box.scrollHeight - box.scrollTop - box.clientHeight < 100;
  if (isNearBottom) { box.scrollTop = box.scrollHeight; }
}
function renderOneMessage(m){
  const t2=new Date(m.ts).toLocaleTimeString(DB.language||'ru',{hour:'2-digit',minute:'2-digit'});
  if(m.system)return `<div class="system-msg" data-mid="${m.id}">${esc(m.text)} · ${t2}</div>`;
  if(m.deletedForAll)return `<div class="msg-wrap ${m.from===DB.session?'me':'them'}" data-mid="${m.id}"><div class="msg ${m.from===DB.session?'me':'them'} deleted-msg">🚫 ${t('msg_deleted')}</div></div>`;
  const body=mediaBody(m);const edited=m.edited?` <span class="edited">(${t('edited')})</span>`:'';const fwd=m.forwarded?`<span class="fwd-label">↪ ${t('forwarded')}</span>`:'';
  const own=m.from===DB.session;const ticks=own?msgStatus(m):'';
  const sender=(currentConvo&&!own)?`<div class="sender" style="color:${hashColor(m.from)}">${esc((DB.users.find(u=>u.id===m.from)||{}).name||t('user'))}</div>`:'';
  const editBtn=own?(Date.now()-m.ts>EDIT_MS?`<button onclick="editExpired()" style="opacity:.35;cursor:not-allowed">✎</button>`:`<button onclick="editMessage('${m.id}')">✎</button>`):'';
  const reactions=Object.entries(m.reactions||{}).map(([e,ids])=>`<span class="reaction ${ids.includes(DB.session)?'mine':''}" onclick="toggleReaction('${m.id}','${e}')">${e} ${ids.length}</span>`).join('');
  const actions=`<div class="msg-actions"><button onclick="toggleEmojiBar('${m.id}')">😊</button><button onclick="startReply('${m.id}')">↩</button><button onclick="startForward('${m.id}')">↪</button>${editBtn}<button onclick="deleteMessage('${m.id}')">🗑</button></div><div class="emoji-bar" id="emoji-${m.id}">${EMOJIS.map(e=>`<span onclick="toggleReaction('${m.id}','${e}')">${e}</span>`).join('')}</div>`;
  return `<div class="msg-wrap ${own?'me':'them'}" id="mw-${m.id}" data-mid="${m.id}"><div class="msg ${own?'me':'them'}">${sender}${fwd}${quoteHTML(m.replyTo)}${body}${edited}<span class="time">${t2}${ticks}</span></div>${reactions?`<div class="reactions">${reactions}</div>`:''}${actions}</div>`;
}
function msgStatus(m){if(currentConvo||!currentChatId||currentChatId===SUPPORT_ID)return '';const otherId=currentChatId.split('|').find(x=>x!==DB.session);const readTs=((DB.read[otherId]||{})[currentChatId])||0;if(readTs>=m.ts)return '<span class="ticks read">✓✓</span>';return '<span class="ticks">✓</span>';}
function quoteHTML(q){if(!q)return '';const jump=q.id?`onclick="jumpToMsg('${q.id}')"`:'';return `<div class="quote" ${jump}><div class="q-name">${esc(q.name)}</div><div class="q-text">${esc(q.preview)}</div></div>`;}
function jumpToMsg(id){const el=$('mw-'+id);if(!el)return;el.scrollIntoView({behavior:'smooth',block:'center'});el.classList.remove('flash');void el.offsetWidth;el.classList.add('flash');}

function mediaBody(m){
  if(Array.isArray(m.attachments) && m.attachments.length){
    if(m.attachments.length === 1 && m.attachments[0].isSingle) {
      const a = m.attachments[0];
      if(a.mediaType === 'video') return `<video class="${mediaSizeClass(a.w,a.h)}" src="${a.media}" onclick="openLightbox('${m.id}', 0)" onerror="mediaError(this)"></video>`;
      return `<img class="${mediaSizeClass(a.w,a.h)}" src="${a.media}" onerror="mediaError(this)" onclick="openLightbox('${m.id}', 0)">`;
    }
    return renderMediaGridHTML(m.attachments, m.id);
  }
  if(m.mediaType === 'voice'){
    let bars = '';
    for(let i = 0; i < 26; i++){
      const h = 5 + ((m.id.charCodeAt(i % m.id.length) + i * 7) % 15);
      bars += `<i style="height:${h}px"></i>`;
    }
    return `<div class="voice-msg" onclick="toggleVoice('${m.id}', this)"><button class="v-play">▶</button><div class="wave" onclick="seekVoice(event,'${m.id}',this)">${bars}</div><span class="v-dur" id="dur-${m.id}">${fmtDur(m.duration||0)}</span><audio class="voice-audio" id="aud-${m.id}" src="${m.media}" preload="auto" onerror="mediaError(this)"></audio></div>`;
  }
  if(m.mediaType === 'videocircle')
    return `<div class="vcircle-wrap">
      <video class="vcircle" id="vc-${m.id}" src="${m.media}" playsinline webkit-playsinline preload="metadata" onerror="mediaError(this)" 
        onclick="event.stopPropagation(); this.muted=false; if(this.paused){ this.play().catch(e=>alert('Error: '+e.message)); } else { this.pause(); }"
        ondblclick="videoSeek(event,'${m.id}')">
      </video>
      <div style="font-size:11px;opacity:.6;margin-top:3px;">📹 ${t('videocircle')} · ${fmtDur(m.duration||0)}</div>
    </div>`;
  if(m.mediaType === 'video')
    return `<video class="${mediaSizeClass(m.w,m.h)}" src="${m.media}" onclick="openLightbox('${m.id}', 0)" onerror="mediaError(this)"></video>`;
  if(m.mediaType === 'document')
    return `<div class="file-item"><span class="f-ico">📄</span><a href="${m.media}" download="${esc(m.fileName||'document')}">${esc(m.fileName||t('download'))}</a></div>`;
  if(m.media)
    return `<img class="${mediaSizeClass(m.w,m.h)}" src="${m.media}" onerror="mediaError(this)" onclick="openLightbox('${m.id}', 0)">`;
    
  return esc(typeof m.text === 'string' ? m.text : '');
}

function renderMediaGridHTML(attachments, mId){
  const n = attachments.length; 
  let gridClass = 'grid-1';
  if(n === 2) gridClass = 'grid-2'; 
  else if(n === 3) gridClass = 'grid-3'; 
  else if(n >= 4) gridClass = 'grid-many';

  const items = attachments.slice(0, 4).map((a, i) => {
    const extra = (i === 3 && n > 4) ? `data-more="+${n - 4}"` : '';
    if(a.mediaType === 'video') {
      return `<div class="media-item" ${extra} onclick="openLightbox('${mId}', ${i})">
        <video src="${a.media}" playsinline onerror="mediaError(this)"></video>
      </div>`;
    }
    return `<div class="media-item" ${extra} onclick="openLightbox('${mId}', ${i})">
      <img src="${a.media}" onerror="mediaError(this)">
    </div>`;
  }).join('');
  
  return `<div class="msg-media-grid ${gridClass}">${items}</div>`;
}

function mediaError(el){ el.style.background='var(--soft)'; el.style.display='flex'; el.style.alignItems='center'; el.style.justifyContent='center'; el.innerHTML='⚠️'; el.onclick=null; }

/* ---------- Отправка ---------- */
async function pushMessage(cid,msg){
  const stored=encryptEnabled?await encryptMessageFields(msg):msg;const chats=DB.chats;(chats[cid]=chats[cid]||[]).push(stored);DB.chats=chats;knownMsgIds.add(msg.id);ping();
}
async function sendMsg(){
  const text=$('msg-input').value.trim();if(!text)return;if(!canPostHere())return;
  await pushMessage(currentChatId,{id:'m'+Date.now(),from:DB.session,text,ts:Date.now(),reactions:{},replyTo:replyTarget});
  $('msg-input').value='';cancelReply();renderMessages();
}
async function scheduleSend(){
  closeSendModal();const when=prompt(t('schedule_prompt'),new Date(Date.now()+3600000).toISOString().slice(0,16).replace('T',' '));
  if(!when)return;const ts=new Date(when.replace(' ','T')).getTime();if(!ts||ts<=Date.now())return alert(t('future_date'));
  const text=$('msg-input').value.trim();if(!text)return alert(t('enter_msg'));
  const msg={id:'m'+Date.now(),from:DB.session,text,ts:Date.now(),reactions:{},replyTo:replyTarget};
  await IDB.addScheduled(currentChatId,msg,ts);$('msg-input').value='';cancelReply();
  showToast({name:t('scheduled')+' ✓'},t('will_be_sent')+' '+new Date(ts).toLocaleString(DB.language||'ru'),()=>{});
}
async function processScheduled(){const due=await IDB.getDueScheduled(Date.now());for(const item of due){await pushMessage(item.cid,item.msg);await IDB.deleteScheduled(item.id);}}
async function silentSend(){
  closeSendModal();const text=$('msg-input').value.trim();if(!text)return;
  await pushMessage(currentChatId,{id:'m'+Date.now(),from:DB.session,text,ts:Date.now(),reactions:{},replyTo:replyTarget,silent:true});
  $('msg-input').value='';cancelReply();renderMessages();
}
function closeSendModal(){$('send-modal').classList.remove('open');}

/* ---------- QR ---------- */
function showQR(userId){
  const u=DB.users.find(x=>x.id===userId);if(!u)return;const data='mainland://user/'+u.nick;
  $('qr-title').textContent=t('qr')+' @'+u.nick;$('qr-note').textContent=t('scan_to_find')+' @'+u.nick;$('qr-modal').classList.add('open');
  try{QR.render($('qr-canvas'),data,{size:220,margin:2,color:'#1e2433',background:'#fff'});}catch(e){alert('QR: '+e.message);}
}
function copyNick(nick){
  const v='@'+nick;if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(v).then(()=>alert(t('nick_copied')+v)).catch(()=>prompt(t('copy_nick'),v));else prompt(t('copy_nick'),v);
}

/* ---------- Голос/видео ---------- */
function updateVoiceProgress(id){
  const a=$('aud-'+id);if(!a)return;const wrap=a.closest('.voice-msg');if(!wrap)return;const bars=wrap.querySelectorAll('.wave i');const p=a.duration?a.currentTime/a.duration:0;const n=Math.floor(bars.length*p);bars.forEach((b,i)=>b.classList.toggle('played',i<=n));
}
function toggleVoice(id,el){
  const a=$('aud-'+id);if(!a)return;document.querySelectorAll('audio.voice-audio').forEach(x=>{if(x!==a&&!x.paused){x.pause();const b=x.closest('.voice-msg')?.querySelector('.v-play');if(b)b.textContent='▶';}});
  const btn=el.querySelector('.v-play');if(a.paused){a.play().catch(()=>{});btn.textContent='⏸';}else{a.pause();btn.textContent='▶';}
  a.ontimeupdate=()=>{const d=$('dur-'+id);if(d)d.textContent=fmtDur(a.currentTime*1000);updateVoiceProgress(id);};a.onended=()=>{btn.textContent='▶';updateVoiceProgress(id);};
}
function seekVoice(e,id,track){e.stopPropagation();const a=$('aud-'+id);if(!a||!Number.isFinite(a.duration)||a.duration<=0)return;const r=track.getBoundingClientRect();a.currentTime=Math.max(0,Math.min(a.duration,(e.clientX-r.left)/r.width*a.duration));updateVoiceProgress(id);}
function videoSeek(e,id){const v=document.getElementById('vc-'+id);if(!v||!v.duration)return;const r=v.getBoundingClientRect();const dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2);let a=Math.atan2(dy,dx)*180/Math.PI+90;if(a<0)a+=360;v.currentTime=v.duration*(a/360);e.stopPropagation();}

let mediaRecorder=null,recChunks=[],recStream=null,recStart=0,recTimerInt=null,recMode=null;
async function startVoiceRec(){
  if(!canPostHere())return alert(t('cannot_send'));if(typeof MediaRecorder==='undefined')return alert(t('no_record_support'));
  try{recStream=await navigator.mediaDevices.getUserMedia({audio:true});}catch(e){return alert(t('no_mic'));}beginRecording('voice');
}
async function startVideoRec(){
  if(!canPostHere())return alert(t('cannot_send'));if(typeof MediaRecorder==='undefined')return alert(t('no_record_support'));
  try {
    recStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user', width: 480, height: 480 }, 
      audio: true 
    });
  } catch(e) {
    return alert(t('no_cam'));
  }
  beginRecording('video');
}
function beginRecording(mode){
  recMode=mode;recChunks=[];const ov=$('rec-overlay');if(mode==='video'){const pv=$('rec-preview');pv.srcObject=recStream;pv.style.display='block';}else $('rec-preview').style.display='none';
  const mimeC=mode==='video'?['video/mp4','video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/webm']:['audio/mp4','audio/webm;codecs=opus','audio/webm'];
  const mime=mimeC.find(t=>MediaRecorder.isTypeSupported?.(t));mediaRecorder=new MediaRecorder(recStream,mime?{mimeType:mime}:undefined);
  mediaRecorder.ondataavailable=e=>{if(e.data.size)recChunks.push(e.data);};mediaRecorder.onstop=saveRecording;mediaRecorder.start();recStart=Date.now();
  recTimerInt=setInterval(()=>{$('rec-timer').textContent=fmtDur(Date.now()-recStart);},250);ov.classList.add('open');
}
function stopRecording(){if(mediaRecorder&&mediaRecorder.state!=='inactive')mediaRecorder.stop();}
function cancelRecording(){if(mediaRecorder){mediaRecorder.onstop=null;if(mediaRecorder.state!=='inactive')mediaRecorder.stop();}cleanupRec();}
function cleanupRec(){clearInterval(recTimerInt);if(recStream)recStream.getTracks().forEach(t=>t.stop());$('rec-preview').style.display='none';$('rec-overlay').classList.remove('open');}
function saveRecording(){
  const blob=new Blob(recChunks,{type:mediaRecorder.mimeType||'audio/webm'});const dur=Date.now()-recStart;cleanupRec();
  const reader=new FileReader();reader.onload=async e=>{
    await pushMessage(currentChatId,{id:'m'+Date.now(),from:DB.session,text:'',ts:Date.now(),reactions:{},media:e.target.result,mediaType:recMode==='video'?'videocircle':'voice',duration:dur,replyTo:replyTarget});
    cancelReply();renderMessages();
  };reader.readAsDataURL(blob);
}
(function bindHolds(){
  function bind(btn,mode){if(!btn)return;btn.addEventListener('pointerdown',async e=>{e.preventDefault();if(mode==='voice')await startVoiceRec();else await startVideoRec();});btn.addEventListener('pointerup',()=>{if(mediaRecorder&&mediaRecorder.state==='recording')stopRecording();});btn.addEventListener('pointercancel',()=>{if(mediaRecorder&&mediaRecorder.state==='recording')cancelRecording();});}
  bind($('btn-voice'),'voice');bind($('btn-video'),'video');
})();

/* ---------- Reply / Edit / Delete / Reactions ---------- */
function startReply(mid){
  const m=(DB.chats[currentChatId]||[]).find(x=>x.id===mid);if(!m)return;
  const name=m.from===DB.session?t('you'):((DB.users.find(u=>u.id===m.from)||{}).name||t('user'));
  replyTarget={id:m.id,name,preview:(typeof m.text==='string'?m.text:(m.media?'[медиа]':'[сообщение]')).slice(0,80)};
  $('reply-bar').innerHTML=`<div class="rb-text"><b>${esc(name)}</b>: ${esc(replyTarget.preview)}</div><button onclick="cancelReply()">✕</button>`;$('reply-bar').classList.add('open');
}
function cancelReply(){replyTarget=null;$('reply-bar').classList.remove('open');$('reply-bar').innerHTML='';}
function toggleEmojiBar(mid){const el=$('emoji-'+mid);if(el)el.classList.toggle('open');}

async function toggleReaction(mid,emoji){
  const chats=DB.chats;const msgs=chats[currentChatId]||[];const m=msgs.find(x=>x.id===mid);if(!m)return;
  m.reactions=m.reactions||{};
  let myCurrentReaction=null;
  for(const [e,ids] of Object.entries(m.reactions)){if(ids.includes(DB.session)){myCurrentReaction=e;break;}}
  if(myCurrentReaction){
    m.reactions[myCurrentReaction]=m.reactions[myCurrentReaction].filter(x=>x!==DB.session);
    if(!m.reactions[myCurrentReaction].length)delete m.reactions[myCurrentReaction];
  }
  if(myCurrentReaction===emoji){DB.chats=chats;renderMessages();return;}
  m.reactions[emoji]=m.reactions[emoji]||[];m.reactions[emoji].push(DB.session);
  DB.chats=chats;renderMessages();
}

function deleteMessage(mid){
  const m=(DB.chats[currentChatId]||[]).find(x=>x.id===mid);if(!m)return;
  deleteTargetId=mid;const canAll=(Date.now()-m.ts)<=DELETE_ALL_MS;
  $('del-all-btn').style.display=canAll?'block':'none';
  $('del-note').textContent=canAll?t('del_all_note'):t('del_me_note');
  $('del-modal').classList.add('open');
}
function closeDeleteModal(){$('del-modal').classList.remove('open');deleteTargetId=null;}
async function confirmDelete(forAll){
  if(!deleteTargetId)return closeDeleteModal();const chats=DB.chats;const msgs=chats[currentChatId]||[];const m=msgs.find(x=>x.id===deleteTargetId);
  if(m){if(forAll){if(Date.now()-m.ts>DELETE_ALL_MS){closeDeleteModal();return alert(t('too_late_delete'));}m.deletedForAll=true;}else{m.deletedFor=m.deletedFor||[];m.deletedFor.push(DB.session);}}
  DB.chats=chats;closeDeleteModal();renderMessages();
}
function editMessage(mid){
  const m=(DB.chats[currentChatId]||[]).find(x=>x.id===mid);if(!m)return;const nv=prompt(t('edit_msg'),typeof m.text==='string'?m.text:'');if(nv==null)return;m.text=nv;m.edited=true;DB.chats=DB.chats;renderMessages();
}
function editExpired(){alert(t('edit_expired'));}
function handleTyping(){}

function startForward(mid){forwardTarget=mid;$('fwd-list').innerHTML='<div class="empty">'+t('forward_unavailable')+'</div>';$('fwd-modal').classList.add('open');}
function closeForwardModal(){$('fwd-modal').classList.remove('open');}

/* ---------- Attach ---------- */
function openAttach(){$('attach-modal').classList.add('open');}
function closeAttach(){$('attach-modal').classList.remove('open');}
async function selectMedia(input){
  const files=Array.from(input.files||[]);if(!files.length)return;input.value='';chosenMedia=[];
  for(const f of files){const dims=await readMediaDims(f);const data=await new Promise((res,rej)=>{const r=new FileReader();r.onload=e=>res(e.target.result);r.onerror=rej;r.readAsDataURL(f);});chosenMedia.push({media:data,mediaType:f.type.startsWith('video')?'video':'image',fileName:f.name,w:dims.w,h:dims.h});}
  const prev=$('selected-preview');prev.innerHTML=chosenMedia.map(a=>a.mediaType==='video'?`<video src="${a.media}" muted></video>`:`<img src="${a.media}">`).join('');
  closeAttach();$('caption-modal').classList.add('open');
}
async function sendSelectedMedia(noCaption){
  const caption = noCaption ? '' : $('caption-input').value.trim();
  $('caption-modal').classList.remove('open');
  $('caption-input').value = '';
  if(!chosenMedia.length) return;

  const atts = chosenMedia.map((a, idx) => {
    if(chosenMedia.length === 1) a.isSingle = true;
    return a;
  });

  await pushMessage(currentChatId, {
    id: 'm' + Date.now(),
    from: DB.session,
    text: caption,
    ts: Date.now(),
    reactions: {},
    attachments: atts,
    replyTo: replyTarget
  });

  chosenMedia = [];
  cancelReply();
  renderMessages();
}
async function sendDocuments(input){
  const files=Array.from(input.files||[]);if(!files.length)return;input.value='';const list=[];
  for(const f of files){if(f.size>25*1024*1024){alert(t('file_too_big')+f.name);continue;}const data=await new Promise((res,rej)=>{const r=new FileReader();r.onload=e=>res(e.target.result);r.onerror=rej;r.readAsDataURL(f);});list.push({media:data,mediaType:'document',fileName:f.name,w:0,h:0});}
  if(!list.length)return;if(list.length===1){const a=list[0];await pushMessage(currentChatId,{id:'m'+Date.now(),from:DB.session,text:'',ts:Date.now(),reactions:{},media:a.media,mediaType:'document',fileName:a.fileName});}
  else{await pushMessage(currentChatId,{id:'m'+Date.now(),from:DB.session,text:'',ts:Date.now(),reactions:{},attachments:list});}renderMessages();
}
function saveAvatar(input){
  const f=input.files&&input.files[0];if(!f)return;const r=new FileReader();r.onload=async e=>{const users=DB.users;const u=users.find(x=>x.id===DB.session);u.avatar=e.target.result;DB.users=users;await DB.flush();$('set-avatar').innerHTML=`<img src="${u.avatar}" alt="">`;};r.readAsDataURL(f);
}
function attachLocation(){closeAttach();pushMessage(currentChatId,{id:'m'+Date.now(),from:DB.session,text:'📍 '+t('location'),ts:Date.now(),reactions:{}}).then(renderMessages);}
function attachContact(){closeAttach();pushMessage(currentChatId,{id:'m'+Date.now(),from:DB.session,text:'👤 '+t('contact'),ts:Date.now(),reactions:{}}).then(renderMessages);}
function attachOther(){closeAttach();alert(t('other_unavailable'));}

/* ---------- Профиль + медиа ---------- */
function collectMedia(cid){
  const raw = (DB.chats[cid] || []).filter(m => !m.deletedForAll && !(m.deletedFor || []).includes(DB.session));
  const media = [];   // фото/видео
  const voice = [];   // голосовые/видеосообщения
  const files = [];   // документы
  const links = [];   // ссылки
  
  for(const m of raw){
    if(Array.isArray(m.attachments)){
      for(let i = 0; i < m.attachments.length; i++){
        const a = m.attachments[i];
        if(a.mediaType === 'document') files.push({ ...a, mid: m.id, ts: m.ts });
        else if(a.mediaType === 'voice' || a.mediaType === 'videocircle') voice.push({ ...a, mid: m.id, ts: m.ts });
        else media.push({ ...a, mid: m.id, ts: m.ts, attIndex: i }); // <-- сохраняем индекс
      }
    } else if(m.media){
      if(m.mediaType === 'document') files.push({ media: m.media, fileName: m.fileName, mid: m.id, ts: m.ts });
      else if(m.mediaType === 'voice' || m.mediaType === 'videocircle') voice.push({ media: m.media, mediaType: m.mediaType, duration: m.duration, mid: m.id, ts: m.ts });
      else media.push({ media: m.media, mediaType: m.mediaType, w: m.w, h: m.h, mid: m.id, ts: m.ts, attIndex: 0 });
    }
    if(typeof m.text === 'string'){
      const re = /(https?:\/\/[^\s]+)/g;
      let match;
      while((match = re.exec(m.text))) links.push({ url: match[1], ts: m.ts });
    }
  }
  return { media, voice, files, links };
}
function renderMediaGrid(cid){
  const { media } = collectMedia(cid);
  const grid = $('media-grid');
  if(!media.length){ grid.innerHTML = `<div class="empty">${t('no_media')}</div>`; return; }
  
  grid.innerHTML = media.map(a => {
    if(a.mediaType === 'video' || a.mediaType === 'videocircle') {
      return `<video src="${a.media}" onclick="openLightbox('${a.mid}', ${a.attIndex})" onerror="mediaError(this)"></video>`;
    }
    return `<img src="${a.media}" onclick="openLightbox('${a.mid}', ${a.attIndex})" onerror="mediaError(this)">`;
  }).join('');
}
function renderVoiceList(cid){
  const {voice}=collectMedia(cid);const box=$('links-list');
  if(!voice.length){box.innerHTML=`<div class="empty">${t('no_voice')}</div>`;return;}
  box.innerHTML=voice.map(v=>{
    if(v.mediaType==='videocircle')return `<div class="file-item" style="cursor:pointer" onclick="openLightbox('${v.mid}')"><span class="f-ico">📹</span><div style="flex:1">${t('videocircle')} · ${fmtDur(v.duration||0)}</div></div>`;
    return `<div class="file-item" style="cursor:pointer" onclick="openLightbox('${v.mid}')"><span class="f-ico">🎤</span><div style="flex:1">${t('voice')} · ${fmtDur(v.duration||0)}</div></div>`;
  }).join('');
}
function renderFilesList(cid){
  const {files}=collectMedia(cid);const box=$('links-list');
  if(!files.length){box.innerHTML=`<div class="empty">${t('no_files')}</div>`;return;}
  box.innerHTML=files.map(a=>`<div class="file-item"><span class="f-ico">📄</span><a href="${a.media}" download="${esc(a.fileName||'document')}">${esc(a.fileName||t('download'))}</a></div>`).join('');
}
function renderLinksList(cid){
  const {links}=collectMedia(cid);const box=$('links-list');
  if(!links.length){box.innerHTML=`<div class="empty">${t('no_links')}</div>`;return;}
  box.innerHTML=links.map(l=>`<div class="link-item"><a href="${l.url}" target="_blank" rel="noopener">${esc(l.url)}</a></div>`).join('');
}
function openProfile(uid){
  const u=DB.users.find(x=>x.id===uid);if(!u)return;
  // Keep profile media actions bound to this contact, even when opened from the contacts list.
  currentConvo=null;currentOtherId=uid;currentChatId=chatIdWith(uid);
  $('profile-header-title').textContent=t('profile');
  $('profile-card').innerHTML=`<div class="avatar">${avatarHTML(u)}</div><h2>${esc(u.name)}</h2><div class="pnick">@${esc(u.nick)}</div><div class="status">${esc(u.contact)}</div>`;
  $('profile-chat-btn').onclick=()=>openChat(uid);const cid=chatIdWith(uid);
  profileMediaCat='media';['media','voice','files','links'].forEach(k=>$('mcat-'+k)?.classList.toggle('active',k==='media'));
  $('media-grid').style.display='grid';$('links-list').style.display='none';renderMediaGrid(cid);showScreen('scr-profile');
}
function openSupportProfile(){
  currentConvo=null;currentOtherId='support';currentChatId=SUPPORT_ID;
  $('profile-header-title').textContent = '🛟 '+t('support');
  $('profile-card').innerHTML = `
    <div class="avatar sq" style="background:#2ecc71; font-size:34px;">🛟</div>
    <h2>${t('support')}</h2>
    <div class="pnick">@support</div>
    <div class="status">${t('support_private')}</div>
  `;
  $('profile-chat-btn').onclick = () => openSupport();
  
  profileMediaCat = 'media';
  ['media','voice','files','links'].forEach(k => $('mcat-' + k)?.classList.toggle('active', k === 'media'));
  $('media-grid').style.display = 'grid';
  $('links-list').style.display = 'none';
  renderMediaGrid(SUPPORT_ID);
  showScreen('scr-profile');
}
function openConvoProfile(cid){
  const c=DB.convos.find(x=>x.id===cid);if(!c)return;
  currentConvo=c;currentOtherId=null;currentChatId=cid;
  $('profile-header-title').textContent=t('group_channel');
  $('profile-card').innerHTML=`<div class="avatar sq">${esc(c.title[0].toUpperCase())}</div><h2>${esc(c.title)}</h2><div class="pnick">${c.kind==='channel'?'📢 '+t('channel'):'👥 '+t('group')}</div>`;
  profileMediaCat='media';['media','voice','files','links'].forEach(k=>$('mcat-'+k)?.classList.toggle('active',k==='media'));
  $('media-grid').style.display='grid';$('links-list').style.display='none';renderMediaGrid(cid);showScreen('scr-profile');
}
function switchMediaCat(cat){
  profileMediaCat=cat;['media','voice','files','links'].forEach(k=>$('mcat-'+k)?.classList.toggle('active',k===cat));
  const cid=currentConvo?currentConvo.id:(currentOtherId?chatIdWith(currentOtherId):null);if(!cid)return;
  if(cat==='media'){$('media-grid').style.display='grid';$('links-list').style.display='none';renderMediaGrid(cid);}
  else if(cat==='voice'){$('media-grid').style.display='none';$('links-list').style.display='flex';renderVoiceList(cid);}
  else if(cat==='files'){$('media-grid').style.display='none';$('links-list').style.display='flex';renderFilesList(cid);}
  else{$('media-grid').style.display='none';$('links-list').style.display='flex';renderLinksList(cid);}
}

/* ---------- ЛАЙТБОКС (исправленный просмотр и свайпы) ---------- */
let touchStartX = 0;
let touchStartY = 0;
let touchPointerId = null;
let currentLbItems = [];

function openLightbox(mid, index = 0) {
  if (DB.clickOpen === '0') return;

  // Prefer the profile/chat owner over currentChatId: it can be stale when a
  // contact profile is opened directly from the contacts list.
  const cid = currentConvo ? currentConvo.id :
    (currentOtherId === 'support' ? SUPPORT_ID :
      (currentOtherId ? chatIdWith(currentOtherId) : currentChatId));
  if (!cid) return;

  const collected = collectMedia(cid);
  const mediaItems = [...(collected.media || []), ...(collected.voice || [])]
    .filter(a => a && a.media && ['image', 'video', 'videocircle', 'voice'].includes(a.mediaType))
    .sort((a, b) => (a.ts || 0) - (b.ts || 0));

  // Fallback for legacy messages not represented by collectMedia().
  if (!mediaItems.length) {
    const msg = (DB.chats[cid] || []).find(x => x.id === mid);
    if (!msg) return;
    const attachments = Array.isArray(msg.attachments) && msg.attachments.length
      ? msg.attachments
      : [{ media: msg.media, mediaType: msg.mediaType, fileName: msg.fileName }];
    currentLbItems = attachments.map((a, i) => ({ ...a, mid, attIndex: i }));
  } else {
    currentLbItems = mediaItems;
  }

  let found = currentLbItems.findIndex(a => a.mid === mid && Number(a.attIndex || 0) === Number(index));
  if (found < 0) found = currentLbItems.findIndex(a => a.mid === mid);
  currentLbIndex = Math.max(0, found);
  currentLbMsgId = currentLbItems[currentLbIndex]?.mid || mid;

  $('lb-find-btn').style.display = (currentConvo || currentOtherId) ? 'flex' : 'none';
  $('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderLightboxContent();
}

function renderLightboxContent() {
  if (!Array.isArray(currentLbItems) || !currentLbItems.length) return;
  const att = currentLbItems[currentLbIndex];
  if (!att || !att.media) return;

  currentLbMedia = att.media;
  currentLbMsgId = att.mid || currentLbMsgId;
  const title = att.fileName || t('media');
  $('lb-title').textContent = `${title} (${currentLbIndex + 1}/${currentLbItems.length})`;

  const wrap = $('lb-media-wrap');
  if (!wrap) return;
  wrap.replaceChildren();

  let media;
  if (att.mediaType === 'video' || att.mediaType === 'videocircle') {
    media = document.createElement('video');
    media.controls = true;
    media.autoplay = true;
    media.playsInline = true;
    media.src = att.media;
  } else if (att.mediaType === 'voice') {
    media = document.createElement('audio');
    media.controls = true;
    media.autoplay = true;
    media.src = att.media;
  } else {
    media = document.createElement('img');
    media.alt = title;
    media.draggable = false;
    media.src = att.media;
  }
  media.onerror = () => {
    wrap.textContent = 'Не удалось загрузить медиа';
    wrap.style.color = '#fff';
  };
  wrap.appendChild(media);

  $('lb-prev').style.display = currentLbIndex > 0 ? 'flex' : 'none';
  $('lb-next').style.display = currentLbIndex < currentLbItems.length - 1 ? 'flex' : 'none';
}

function lightboxNav(dir) {
  if (!currentLbItems.length) return;
  const next = currentLbIndex + dir;
  if (next < 0 || next >= currentLbItems.length) return;
  currentLbIndex = next;
  renderLightboxContent();
}

function closeLightbox(e) {
  if (e) {
    const target = e.target;
    if (target !== $('lightbox') && !(target instanceof Element && target.closest('.lb-btn'))) return;
    e.preventDefault?.();
    e.stopPropagation?.();
  }
  $('lightbox').classList.remove('open');
  // Clear only the media node. Do NOT empty #lb-content: it contains the
  // persistent previous/next controls and media wrapper needed next time.
  const wrap = $('lb-media-wrap');
  if (wrap) wrap.replaceChildren();
  currentLbMedia = null;
  currentLbItems = [];
  currentLbMsgId = null;
  document.body.style.overflow = '';
}

const lbContentEl = $('lb-content');
lbContentEl.addEventListener('pointerdown', e => {
  if (e.pointerType === 'mouse' && e.button !== 0) return;
  touchStartX = e.clientX;
  touchStartY = e.clientY;
  touchPointerId = e.pointerId;
}, { passive: true });

lbContentEl.addEventListener('pointerup', e => {
  if (touchPointerId !== e.pointerId) return;
  const dx = e.clientX - touchStartX;
  const dy = e.clientY - touchStartY;
  touchPointerId = null;
  // Horizontal gestures only; vertical movement remains available for normal controls.
  if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy) * 1.25) return;
  lightboxNav(dx < 0 ? 1 : -1);
}, { passive: true });

lbContentEl.addEventListener('pointercancel', () => { touchPointerId = null; }, { passive: true });

function downloadMedia() {
  if (!currentLbMedia) return;
  const a = document.createElement('a');
  a.href = currentLbMedia;
  a.download = ($('lb-title').textContent || 'media').replace(/[\\/]/g, '_');
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function findInChat() {
  const mid = currentLbMsgId;
  if (!mid) return;
  closeLightbox();
  const cid = currentConvo ? currentConvo.id : currentChatId;
  if (currentConvo) openConvoChat(cid);
  else if (currentOtherId && currentOtherId !== 'support') openChat(currentOtherId);
  else openSupport();
  setTimeout(() => jumpToMsg(mid), 300);
}

/* ---------- Удаление чата ---------- */
function askDeleteChat(){$('delchat-modal').classList.add('open');}
function closeChatDeleteModal(){$('delchat-modal').classList.remove('open');}
async function deleteChatForMe(){const h=DB.hiddenChats;h[DB.session]=h[DB.session]||[];h[DB.session].push(currentChatId);DB.hiddenChats=h;closeChatDeleteModal();await DB.flush();openMain();}
async function deleteChatForAll(){if(!currentChatId)return closeChatDeleteModal();const chats=DB.chats;delete chats[currentChatId];DB.chats=chats;closeChatDeleteModal();await IDB.deleteChat(currentChatId).catch(()=>{});openMain();}

/* ---------- Меню / настройки ---------- */
function toggleDrawer(){$('main-drawer').classList.toggle('open');}
function openMyProfile(){showQR(DB.session);}
function openSettings(){
  const u=me();if(!u)return;$('set-name').value=u.name||'';$('set-nick').value=u.nick||'';$('set-about').value=u.about||'';$('set-contact-cur').textContent=u.contact||'';
  $('set-avatar').innerHTML=u.avatar?`<img src="${u.avatar}" alt="">`:esc((u.name||'?')[0].toUpperCase());
  $('set-created').textContent=t('acc_created')+new Date(u.created).toLocaleString(DB.language||'ru');
  ['find','lastseen','groups'].forEach(k=>{const seg=$('seg-'+k);if(!seg)return;seg.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.v===((u.privacy||{})[k]||'all')));});
  $('set-dark').checked=DB.theme==='dark';$('set-sound').checked=DB.mute!=='1';$('set-notif').checked=DB.notif==='1';$('set-encrypt').checked=DB.encryption==='1';
  
  const fontVal = DB.fontSize || 'medium';
  $('seg-font').querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.v === fontVal));
  
  const wpVal = DB.wallpaper || 'default';
  $('seg-wallpaper').querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.v === wpVal));
  
  const alVal = DB.autoLoad || 'wifi';
  $('seg-autoload').querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.v === alVal));
  
  $('set-clickopen').checked = DB.clickOpen !== '0';
  
  // Язык
  const langVal = DB.language || 'ru';
  $('select-lang').value = langVal;

  showScreen('scr-settings');
}
async function saveProfile(){
  const u=me();if(!u)return;err('set-profile-err','');const users=DB.users;const acc=users.find(x=>x.id===u.id);
  const newNick=$('set-nick').value.trim().toLowerCase();if(newNick&&newNick!==acc.nick){if(!/^[a-z0-9_\.]{3,}$/.test(newNick))return err('set-profile-err',t('nick_err'));if(users.some(x=>x.id!==acc.id&&x.nick===newNick))return err('set-profile-err',t('nick_taken'));acc.nick=newNick;}
  acc.name=$('set-name').value.trim()||acc.name;acc.about=$('set-about').value.trim();DB.users=users;await DB.flush();
  err('set-profile-err',t('saved')+' ✓');$('drawer-nick').textContent='@'+acc.nick;
}
async function changePassword(){
  err('set-pass-err','');const u=me();if(!u)return;const cur=$('set-pass-cur').value,n1=$('set-pass-new').value,n2=$('set-pass-new2').value;
  if(u.pass!==cur)return err('set-pass-err',t('cur_pass_wrong'));if(n1.length<6)return err('set-pass-err',t('pass_short'));if(n1!==n2)return err('set-pass-err',t('pass_mismatch'));
  const users=DB.users;users.find(x=>x.id===u.id).pass=n1;DB.users=users;await initEncryption(n1);await DB.flush();
  err('set-pass-err',t('pass_changed')+' ✓');$('set-pass-cur').value=$('set-pass-new').value=$('set-pass-new2').value='';
}
async function changeContact(){
  err('set-contact-err','');const u=me();if(!u)return;const raw=$('set-contact').value.trim();if(!isEmail(raw)&&!isPhone(raw))return err('set-contact-err',t('invalid_contact'));
  const norm=normContact(raw);if(DB.users.some(x=>x.id!==u.id&&normContact(x.contact).toLowerCase()===norm.toLowerCase()))return err('set-contact-err',t('contact_exists'));
  if(!contactCodeState){contactCodeState={contact:norm,code:String(Math.floor(100000+Math.random()*900000))};$('set-demo-code').textContent=contactCodeState.code;$('set-contact-code-wrap').style.display='block';$('set-contact-btn').textContent=t('confirm_code');return;}
  if($('set-contact-code').value.trim()!==contactCodeState.code)return err('set-contact-err',t('invalid_code'));
  const users=DB.users;users.find(x=>x.id===u.id).contact=contactCodeState.contact;DB.users=users;contactCodeState=null;
  $('set-contact-code-wrap').style.display='none';$('set-contact-btn').textContent=t('send_code');$('set-contact').value='';$('set-contact-cur').textContent=u.contact;await DB.flush();err('set-contact-err',t('contact_changed')+' ✓');
}
function setPrivacy(kind,val){
  const u=me();if(!u)return;const users=DB.users;const acc=users.find(x=>x.id===u.id);acc.privacy=acc.privacy||{};acc.privacy[kind]=val;DB.users=users;
  const seg=$('seg-'+kind);if(seg)seg.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.v===val));DB.flush();
}

/* ---------- Новые настройки ---------- */
function setFontSize(size) {
  DB.fontSize = size;
  $('seg-font').querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.v === size));
  applyFontSize();
  DB.flush();
}
function setWallpaper(wp) {
  DB.wallpaper = wp;
  $('seg-wallpaper').querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.v === wp));
  applyWallpaper();
  DB.flush();
}
function setAutoLoad(val) {
  DB.autoLoad = val;
  $('seg-autoload').querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.v === val));
  DB.flush();
}
function toggleClickOpen() {
  DB.clickOpen = $('set-clickopen').checked ? '1' : '0';
  DB.flush();
}

function toggleDarkSetting(){DB.theme=$('set-dark').checked?'dark':'light';applyTheme();DB.flush();}
function toggleSound(){DB.mute=$('set-sound').checked?'0':'1';applyMute();DB.flush();}
function toggleNotifSetting(){DB.notif=$('set-notif').checked?'1':'0';if(DB.notif==='1'&&'Notification' in window)Notification.requestPermission();DB.flush();}
function toggleEncryption(){DB.encryption=$('set-encrypt').checked?'1':'0';encryptEnabled=DB.encryption==='1';DB.flush();}
function openForgot(){$('forgot-modal').classList.add('open');err('forgot-error','');}
function forgotSendCode(){
  err('forgot-error','');const raw=$('forgot-contact').value.trim();if(!isEmail(raw)&&!isPhone(raw))return err('forgot-error',t('invalid_contact'));
  const v=normContact(raw).toLowerCase();const u=DB.users.find(x=>normContact(x.contact).toLowerCase()===v);if(!u)return err('forgot-error',t('user_not_found'));
  forgotCode=String(Math.floor(100000+Math.random()*900000));forgotAttempts=0;alert(t('recovery_code')+forgotCode);
}
async function forgotReset(){
  err('forgot-error','');const raw=$('forgot-contact').value.trim();const v=normContact(raw).toLowerCase();const u=DB.users.find(x=>normContact(x.contact).toLowerCase()===v);
  if(!u)return err('forgot-error',t('user_not_found'));if(!forgotCode)return err('forgot-error',t('get_code_first'));if(forgotAttempts>=3)return err('forgot-error',t('too_many_attempts'));
  if($('forgot-code').value.trim()!==forgotCode){forgotAttempts++;return err('forgot-error',t('invalid_code')+' '+ (3-forgotAttempts));}
  const np=$('forgot-newpass').value;if(np.length<8)return err('forgot-error',t('pass_8'));
  const users=DB.users;users.find(x=>x.id===u.id).pass=np;DB.users=users;await DB.flush();$('forgot-modal').classList.remove('open');alert(t('pass_changed_login'));
}
function sendSupport(){const text=$('support-text').value.trim();if(!text)return;ensureSupportChat();pushMessage(SUPPORT_ID,{id:'m'+Date.now(),from:DB.session,text,ts:Date.now(),reactions:{}});$('support-text').value='';alert(t('ticket_sent'));}

/* ---------- Прокрутка чата ---------- */
(function setupScrollButton() {
  const messagesEl = $('messages'); if (!messagesEl) return;
  const btn = document.createElement('button'); btn.className = 'scroll-down-btn'; btn.innerHTML = '↓';
  btn.onclick = () => { messagesEl.scrollTo({ top: messagesEl.scrollHeight, behavior: 'smooth' }); btn.classList.remove('visible'); };
  const chatScreen = $('scr-chat'); if (chatScreen) chatScreen.appendChild(btn);
  messagesEl.addEventListener('scroll', () => {
    const dist = messagesEl.scrollHeight - messagesEl.scrollTop - messagesEl.clientHeight;
    if (dist > 150) btn.classList.add('visible'); else btn.classList.remove('visible');
  });
})();

/* ---------- Таймеры ---------- */
function startTimers(){
  if(incomingTimer)clearInterval(incomingTimer);
  incomingTimer=setInterval(()=>{
    if(!DB.session)return;
    if(currentChatId&&!currentConvo&&currentOtherId)updateChatHeader();
    if(currentConvo)updateConvoHeader();
    if($('scr-main').classList.contains('active'))renderList();
    processScheduled().catch(()=>{});
    ping();
  },5000);
}

// Дублируем сессию в localStorage для надежности при перезагрузке
window.addEventListener('beforeunload', () => {
  if (DB.session) {
    localStorage.setItem('ml_session_fallback', DB.session);
  } else {
    localStorage.removeItem('ml_session_fallback');
  }
});

/* ============================================================
   BOOT
   ============================================================ */
(async function boot(){
  try{
    await DB.init();
    // Восстанавливаем сессию из localStorage, если в IndexedDB пусто
    let fallbackSession = null;
    try { fallbackSession = localStorage.getItem('ml_session_fallback'); } catch (_) {}
    const activeUser = DB.users.find(u => u.id === DB.session && !u.deleted);
    const fallbackUser = DB.users.find(u => u.id === fallbackSession && !u.deleted);
    if (!activeUser && fallbackUser) {
      DB.session = fallbackSession;
      await DB.flush();
    }
    
    applyTheme();applyMute();applyFontSize();applyWallpaper();
    setLanguage(DB.language);
    if('Notification' in window&&DB.notif==='1'&&Notification.permission==='default'){Notification.requestPermission();}
    if(DB.session&&me()&&!me().deleted){
      $('drawer-nick').textContent='@'+me().nick;ensureSupportChat();encryptEnabled=(DB.encryption==='1');openMain();startTimers();
    } else { DB.session=null; showScreen('scr-login'); }
  } catch(e){
    console.error('Mainland startup failed:', e);
    showScreen('scr-login');
    const loginError = $('login-err');
    if (loginError) loginError.textContent = 'Не удалось восстановить данные приложения. Обновите страницу; данные в браузере не удалялись.';
  }
})();
