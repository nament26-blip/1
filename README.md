# Равоншинос — маркетплейс психологов

Статический демо-сайт маркетплейса психологов «Равоншинос».
Сделан на чистом **HTML + CSS + JavaScript**, без сборщиков и
фреймворков — поэтому сайт можно опубликовать на **GitHub Pages**
без какой-либо дополнительной настройки.

## Структура проекта

```
ravonshinos/
├── index.html          — главная страница
├── catalog.html         — каталог психологов с фильтрами
├── profile.html          — профиль психолога (данные подгружаются по ?id=)
├── css/
│   └── style.css        — все стили сайта (mobile-first)
├── js/
│   └── script.js        — данные психологов + вся логика (фильтры, модалки, рендер)
├── assets/
│   └── images/          — иконка сайта и заметка про фотографии
├── CNAME                 — для подключения кастомного домена (см. ниже)
└── README.md             — этот файл
```

Фотографии психологов в демо-версии заменены на **CSS-аватары с
инициалами** — реальные изображения не нужны, всё сгенерировано
кодом. Как заменить на настоящие фото, описано в
`assets/images/README.md`.

---

## 1. Как загрузить проект на GitHub

### Вариант А — через сайт GitHub (без консоли)

1. Зайдите на [github.com](https://github.com) и войдите в аккаунт.
2. Нажмите **New repository** (значок «+» → New repository).
3. Укажите имя репозитория, например `ravonshinos`.
   - Если хотите, чтобы сайт был доступен по адресу
     `https://<ваш-логин>.github.io/` (без имени репозитория в пути),
     назовите репозиторий `<ваш-логин>.github.io`.
4. Оставьте репозиторий **Public** (для бесплатного GitHub Pages
   репозиторий должен быть публичным, если у вас нет платного плана).
5. Нажмите **Create repository**.
6. На странице репозитория нажмите **uploading an existing file**
   (или **Add file → Upload files**).
7. Перетащите туда все файлы и папки проекта (`index.html`,
   `catalog.html`, `profile.html`, папки `css/`, `js/`, `assets/`,
   файлы `CNAME` и `README.md`), сохраняя структуру папок.
8. Внизу нажмите **Commit changes**.

### Вариант Б — через терминал (Git)

```bash
# 1. Перейдите в папку проекта
cd ravonshinos

# 2. Инициализируйте git-репозиторий
git init

# 3. Добавьте все файлы
git add .

# 4. Сделайте первый коммит
git commit -m "Первая версия сайта Равоншинос"

# 5. Укажите ветку main
git branch -M main

# 6. Подключите удалённый репозиторий (замените ссылку на свою)
git remote add origin https://github.com/<ваш-логин>/ravonshinos.git

# 7. Отправьте файлы на GitHub
git push -u origin main
```

---

## 2. Как включить GitHub Pages

1. Откройте репозиторий на GitHub.
2. Перейдите в **Settings** (Настройки) → раздел **Pages** (в левом
   меню, блок «Code and automation»).
3. В разделе **Build and deployment** → **Source** выберите
   **Deploy from a branch**.
4. В разделе **Branch** выберите ветку `main` и папку `/ (root)`,
   затем нажмите **Save**.
5. Подождите 1–2 минуты — GitHub соберёт и опубликует сайт.
6. Обновите страницу настроек — вверху появится зелёная плашка со
   ссылкой на опубликованный сайт, например:
   `https://<ваш-логин>.github.io/ravonshinos/`

После любых изменений в файлах и нового `git push` (или загрузки
файлов через сайт) GitHub Pages автоматически пересоберёт сайт —
обычно это занимает меньше минуты.

---

## 3. Как настроить кастомный домен (CNAME)

Если хотите открывать сайт по своему домену (например
`www.ravonshinos.tj`), а не по адресу `*.github.io`:

1. Откройте файл `CNAME` в корне репозитория и замените его
   содержимое на ваш домен (без `http://` и без слэша в конце),
   например:
   ```
   www.ravonshinos.tj
   ```
2. У регистратора домена (там, где вы купили домен) добавьте DNS-записи:
   - Для домена вида `www.ravonshinos.tj` — запись **CNAME**,
     указывающую на `<ваш-логин>.github.io`.
   - Для домена без `www` (apex-домена, например `ravonshinos.tj`) —
     нужны **A-записи**, указывающие на IP-адреса GitHub Pages:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
3. Вернитесь в **Settings → Pages** репозитория, в поле **Custom
   domain** укажите тот же домен и нажмите **Save**.
4. Подождите, пока DNS-записи обновятся (может занять от нескольких
   минут до нескольких часов), затем при желании включите галочку
   **Enforce HTTPS**.

Если кастомный домен не нужен — просто удалите файл `CNAME` из
репозитория, сайт продолжит работать по стандартному адресу
`*.github.io`.

---

## Технические детали

- **Технологии:** чистый HTML5, CSS3 (переменные, Flexbox, Grid,
  media-запросы), Vanilla JavaScript (без библиотек).
- **Адаптивность:** дизайн mobile-first, три основные точки
  перелома — ~620px, ~760–900px, ~940–980px.
- **Палитра:** мягкий синий (`#7E9CAA`), шалфейный зелёный
  (`#9CAE8C`), бежевый (`#F7F2E9`), белый и мягкий серый — все
  цвета заданы CSS-переменными в начале `css/style.css`, их легко
  поменять в одном месте.
- **Данные:** все психологи, отзывы и тексты — вымышленные демо-данные,
  находятся в массиве `psychologists` в файле `js/script.js`. Чтобы
  добавить или изменить психолога, отредактируйте этот массив — карточки
  на всех трёх страницах обновятся автоматически.
- **Формы записи/заявок** работают только на стороне браузера (демо):
  реальная отправка данных на сервер не настроена, так как сайт
  полностью статический. Для реальной отправки данных потребуется
  подключить сторонний сервис форм (Formspree, Getform и т.п.) или backend.

## Локальный просмотр

Просто откройте `index.html` в браузере — сайт полностью статический
и не требует сервера. Либо запустите любой простой локальный сервер,
например:

```bash
python3 -m http.server 8000
```

и откройте `http://localhost:8000` в браузере.
Создай статический сайт-маркетплейс психологов «Равоншинос» для размещения 
на GitHub Pages с backend на Supabase.

НАЗВАНИЕ И СМЫСЛ:
«Равоншинос» — психолог на таджикском/персидском. Используй как бренд в логотипе, 
header, footer, title страниц и meta-тегах. Слоган: «Найдите своего психолога».

ЯЗЫК: русский. Стиль: спокойный, wellness-эстетика (sage green, cream, soft gray, 
скруглённые углы, много воздуха). Шрифт: Inter.

ТЕХНОЛОГИИ:
- Чистый HTML + CSS + JavaScript (без сборщиков) — чтобы GitHub Pages работал сразу.
- Supabase JS client через CDN (https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2)
- Адаптивный дизайн (mobile-first)

СТРУКТУРА ПРОЕКТА:
ravonshinos/
├── index.html              (главная)
├── catalog.html            (каталог психологов)
├── profile.html            (профиль психолога)
├── dashboard.html          (личный кабинет клиента)
├── login.html              (вход/регистрация)
├── css/
│   └── style.css
├── js/
│   ├── supabase.js         (инициализация клиента)
│   ├── auth.js             (вход/выход)
│   ├── booking.js          (создание записи)
│   └── main.js             (общая логика)
├── assets/
│   └── images/            (плейсхолдеры для фото)
├── CNAME                  (для кастомного домена)
└── README.md              (инструкция по деплою)

СТРАНИЦЫ:

1. index.html — Главная:
   - Header: логотип «Равоншинос» слева, навигация (Главная, Каталог, 
     Как это работает, Стать психологом), кнопки «Войти» / «Регистрация» справа.
   - Hero: «Равоншинос — найдите своего психолога», подзаголовок 
     «Подберём специалиста, который вам подойдёт», две кнопки: 
     «Я клиент» / «Я психолог».
   - Поиск с фильтрами: специализация (тревога, депрессия, отношения, 
     детская психология, КПТ, семейная терапия), цена, формат (онлайн/офлайн), язык.
   - Блок «Как это работает» — 3 шага.
   - Сетка из 6 карточек психологов (фото-плейсхолдер с инициалами, имя, 
     специализации как бейджи, опыт, цена, рейтинг, кнопка «Записаться»).
   - Отзывы (3 штуки).
   - CTA для психологов: «Разместите профиль бесплатно».
   - FAQ.
   - Footer с логотипом «Равоншинос», ссылками и копирайтом.

2. catalog.html — Каталог:
   - Сетка карточек психологов (данные подтягиваются из Supabase).
   - Сайдбар с фильтрами: цена (слайдер), опыт, специализация, формат, рейтинг.
   - Сортировка: по рейтингу, цене, опыту.
   - Пагинация или «Показать ещё».

3. profile.html — Профиль психолога:
   - Фото, имя, квалификация, образование, сертификаты.
   - О себе, подходы (КПТ, гештальт, психоанализ).
   - Специализации, стоимость сессии, длительность.
   - Отзывы и рейтинг.
   - Форма записи: имя, email, сообщение → insert в таблицу bookings.

4. login.html — Вход:
   - Форма email + magic link через supabase.auth.signInWithOtp().
   - После входа — редирект на dashboard.html.

5. dashboard.html — Личный кабинет клиента:
   - Список записей (предстоящие и прошедшие) из таблицы bookings.
   - Профиль пользователя (email, имя).
   - Кнопка выхода.

ДАННЫЕ ДЛЯ ДЕМО:
Заполни карточки вымышленными данными на русском языке (имена, специализации, цены).
Используй плейсхолдеры для фото (заглушки с инициалами на цветном фоне).

SUPABASE INTEGRATION:

1. В js/supabase.js:
   - Импортируй createClient из CDN.
   - Экспортируй клиент, используя переменные SUPABASE_URL и SUPABASE_ANON_KEY.
   - Для GitHub Pages: переменные передаются через GitHub Secrets и инжектятся 
     в build (или прописаны в config.js, который в .gitignore).

2. Auth flow:
   - login.html: форма email → supabase.auth.signInWithOtp().
   - После клика по magic link — сессия сохраняется автоматически.
   - В header показывай email пользователя, если он залогинен.

3. Booking flow:
   - На profile.html форма записи: имя, email, сообщение.
   - On submit: supabase.from('bookings').insert({...}).
   - Покажи подтверждение «Вы записаны!».

4. Dashboard:
   - dashboard.html: supabase.from('bookings').select() для текущего пользователя.
   - Покажи таблицу с датой, психологом, статусом.

DATABASE SCHEMA (Supabase SQL Editor):

-- 1. Профили
create table profiles (
  id uuid references auth.users primary key,
  full_name text,
  role text check (role in ('client', 'psychologist')),
  created_at timestamp with time zone default now()
);

-- 2. Профили психологов
create table psychologist_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  specializations text[],
  approaches text[],
  experience_years integer,
  session_price integer,
  session_duration integer,
  format text check (format in ('online', 'offline', 'both')),
  languages text[],
  education text,
  bio text,
  avatar_url text,
  rating numeric default 0,
  reviews_count integer default 0,
  is_verified boolean default false
);

-- 3. Записи
create table bookings (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references auth.users,
  psychologist_id uuid references psychologist_profiles(id),
  scheduled_at timestamp with time zone,
  duration integer,
  format text,
  status text default 'pending' check (status in ('pending','confirmed','completed','cancelled')),
  price integer,
  message text,
  created_at timestamp with time zone default now()
);

-- 4. Отзывы
create table reviews (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid references bookings(id),
  client_id uuid references auth.users,
  psychologist_id uuid references psychologist_profiles(id),
  rating integer check (rating between 1 and 5),
  text text,
  created_at timestamp with time zone default now()
);

ROW LEVEL SECURITY (обязательно):

alter table profiles enable row level security;
alter table psychologist_profiles enable row level security;
alter table bookings enable row level security;
alter table reviews enable row level security;

-- Публичное чтение верифицированных психологов
create policy "Anyone can view verified psychologists"
on psychologist_profiles for select to anon, authenticated
using (is_verified = true);

-- Клиенты видят только свои записи
create policy "Clients see own bookings"
on bookings for select to authenticated
using ((select auth.uid()) = client_id);

-- Клиенты создают свои записи
create policy "Clients create own bookings"
on bookings for insert to authenticated
with check ((select auth.uid()) = client_id);

-- Публичное чтение отзывов
create policy "Anyone can view reviews"
on reviews for select to anon, authenticated using (true);

-- Пользователи управляют своим профилем
create policy "Users manage own profile"
on profiles for all to authenticated
using ((select auth.uid()) = id);

README.md — ИНСТРУКЦИЯ:

# Равоншинос

Маркетплейс психологов. Статический сайт на GitHub Pages + Supabase.

## Деплой на GitHub Pages

1. Создай репозиторий `ravonshinos` на github.com (Public).
2. Загрузи все файлы.
3. Зайди в Settings → Pages.
4. Source: Deploy from a branch. Branch: main. Folder: / (root).
5. Сохрани. Сайт будет доступен по адресу 
   https://ваш-username.github.io/ravonshinos/

## Настройка Supabase

1. Создай проект на supabase.com (бесплатный план).
2. В SQL Editor выполни скрипт из database.sql.
3. В Settings → API скопируй Project URL и anon key.
4. В Settings → API → CORS Allowed Origins добавь:
   - https://ваш-username.github.io
   - http://localhost:8000 (для локального теста)
5. Создай файл js/config.js:
   window.SUPABASE_URL = 'твой-url';
   window.SUPABASE_ANON_KEY = 'твой-anon-key';
   Добавь config.js в .gitignore, если не хочешь коммитить ключи.

## Кастомный домен

1. В корень репозитория добавь файл CNAME с одной строкой:
   ravonshinos.tj
2. У регистратора настрой DNS:
   - A-записи для @:
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
   - CNAME для www: ваш-username.github.io
3. В Settings → Pages включи Enforce HTTPS.

## Важно

GitHub Pages хостит только статические сайты. Вся логика (auth, booking) 
выполняется в браузере через Supabase JS client.

Код должен быть чистым, с комментариями, готовым к копированию в репозиторий.
