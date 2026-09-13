/* =========================================================
   РАВОНШИНОС — общий JavaScript файл
   Используется на всех страницах: index.html, catalog.html,
   profile.html. Скрипт сам определяет, какие элементы есть
   на текущей странице, и рендерит только то, что нужно.
   ========================================================= */

/* ---------- 1. ДЕМО-ДАННЫЕ ПСИХОЛОГОВ ----------
   Валюта — сомони (TJS), как принято в Таджикистане.
   Поле "photo" можно заполнить путём к реальному фото
   (см. assets/images/README.md) — тогда вместо CSS-аватара
   с инициалами будет показано изображение. */
const psychologists = [
  {
    id: 1,
    name: "Анна Соколова",
    initials: "АС",
    avatarColor: "#7E9CAA",
    photo: null,
    specialization: "Семейная терапия",
    tags: ["Семья", "Пары", "Онлайн"],
    price: 250,
    duration: 55,
    format: "online",
    experience: 9,
    rating: 4.9,
    reviewsCount: 87,
    qualification: "Клинический психолог, семейный системный терапевт",
    about:
      "Работаю с парами и семьями более 9 лет. Помогаю услышать друг друга, восстановить близость и договориться в конфликтных ситуациях. Использую системный подход и элементы нарративной терапии.",
    approaches: [
      "Системная семейная терапия",
      "Нарративный подход",
      "Работа с конфликтами и кризисами в паре",
      "Подготовка к важным жизненным переходам",
    ],
    reviews: [
      { author: "Мадина", rating: 5, text: "Анна помогла нам с мужем наконец услышать друг друга. Очень бережный подход." },
      { author: "Фарҳод", rating: 5, text: "Пришли на грани развода, сейчас все иначе. Спасибо огромное." },
    ],
  },
  {
    id: 2,
    name: "Дмитрий Волков",
    initials: "ДВ",
    avatarColor: "#9CAE8C",
    photo: null,
    specialization: "Тревожные расстройства",
    tags: ["Тревога", "Панические атаки", "КПТ"],
    price: 300,
    duration: 50,
    format: "both",
    experience: 7,
    rating: 4.8,
    reviewsCount: 64,
    qualification: "Психотерапевт, специалист по КПТ",
    about:
      "Специализируюсь на работе с тревожными расстройствами, паническими атаками и навязчивыми состояниями. Использую когнитивно-поведенческую терапию — структурированный подход с понятными шагами и упражнениями.",
    approaches: [
      "Когнитивно-поведенческая терапия (КПТ)",
      "Работа с паническими атаками",
      "Техники саморегуляции",
      "Домашние задания и практика между сессиями",
    ],
    reviews: [
      { author: "Олег", rating: 5, text: "За 3 месяца панические атаки практически исчезли. Очень структурно и понятно." },
      { author: "Зарина", rating: 4, text: "Дмитрий даёт конкретные инструменты, которые реально работают." },
    ],
  },
  {
    id: 3,
    name: "Елена Морозова",
    initials: "ЕМ",
    avatarColor: "#C48F6B",
    photo: null,
    specialization: "Работа с депрессией",
    tags: ["Депрессия", "Апатия", "Онлайн"],
    price: 280,
    duration: 55,
    format: "online",
    experience: 11,
    rating: 5.0,
    reviewsCount: 112,
    qualification: "Психолог-консультант, экзистенциальный подход",
    about:
      "11 лет помогаю людям выходить из депрессивных состояний и находить смысл в сложные периоды жизни. Работаю мягко, без давления, в собственном темпе клиента.",
    approaches: [
      "Экзистенциальная терапия",
      "Работа с потерей смысла и апатией",
      "Поддержка в кризисные периоды",
      "Постепенное восстановление активности",
    ],
    reviews: [
      { author: "Ирина", rating: 5, text: "Елена — очень тонкий и внимательный специалист. Впервые почувствовала, что меня слышат." },
      { author: "Сино", rating: 5, text: "После полугода работы жизнь стала другой. Рекомендую." },
    ],
  },
  {
    id: 4,
    name: "Игорь Петров",
    initials: "ИП",
    avatarColor: "#5F7F8E",
    photo: null,
    specialization: "Детская психология",
    tags: ["Дети", "Подростки", "Офлайн"],
    price: 320,
    duration: 45,
    format: "offline",
    experience: 13,
    rating: 4.7,
    reviewsCount: 53,
    qualification: "Детский и подростковый психолог",
    about:
      "Работаю с детьми от 5 лет и подростками. Помогаю разобраться с трудностями в школе, отношениями со сверстниками и внутри семьи. Провожу консультации и для родителей.",
    approaches: [
      "Игровая терапия",
      "Работа с тревожностью у детей",
      "Консультации для родителей",
      "Диагностика возрастных кризисов",
    ],
    reviews: [
      { author: "Наргис", rating: 5, text: "Сын стал намного спокойнее после нескольких встреч с Игорем." },
      { author: "Тимур", rating: 4, text: "Хороший специалист, находит контакт даже с закрытыми подростками." },
    ],
  },
  {
    id: 5,
    name: "Мария Кузнецова",
    initials: "МК",
    avatarColor: "#B98BA0",
    photo: null,
    specialization: "Отношения и расставания",
    tags: ["Отношения", "Расставание", "Онлайн"],
    price: 260,
    duration: 55,
    format: "online",
    experience: 6,
    rating: 4.8,
    reviewsCount: 41,
    qualification: "Психолог, гештальт-терапевт",
    about:
      "Помогаю пережить расставание, развод или сложный период в отношениях. Работаю в гештальт-подходе — через осознавание чувств и потребностей здесь и сейчас.",
    approaches: [
      "Гештальт-терапия",
      "Проработка расставаний и потерь",
      "Работа с созависимостью",
      "Повышение самооценки после отношений",
    ],
    reviews: [
      { author: "Севара", rating: 5, text: "Мария помогла мне пережить очень болезненный развод. Огромная благодарность." },
      { author: "Алишер", rating: 5, text: "Понятный и тёплый специалист, никакого осуждения." },
    ],
  },
  {
    id: 6,
    name: "Сергей Новиков",
    initials: "СН",
    avatarColor: "#8A9A5B",
    photo: null,
    specialization: "Выгорание и стресс",
    tags: ["Выгорание", "Стресс", "Офлайн"],
    price: 340,
    duration: 60,
    format: "both",
    experience: 10,
    rating: 4.9,
    reviewsCount: 76,
    qualification: "Психотерапевт, коуч по стрессоустойчивости",
    about:
      "Работаю с профессиональным выгоранием, хроническим стрессом и переутомлением. Часто ко мне приходят руководители и специалисты, которые «сгорели» на работе.",
    approaches: [
      "Диагностика уровня выгорания",
      "Восстановление энергетического баланса",
      "Работа с перфекционизмом",
      "Построение здоровых границ в работе",
    ],
    reviews: [
      { author: "Рустам", rating: 5, text: "Сергей помог мне выйти из тотального выгорания за пару месяцев." },
      { author: "Гулнора", rating: 5, text: "Очень практично, никакой воды — только рабочие инструменты." },
    ],
  },
  {
    id: 7,
    name: "Ольга Смирнова",
    initials: "ОС",
    avatarColor: "#A67C6D",
    photo: null,
    specialization: "Психосоматика",
    tags: ["Психосоматика", "Тело", "Онлайн"],
    price: 290,
    duration: 55,
    format: "online",
    experience: 8,
    rating: 4.7,
    reviewsCount: 38,
    qualification: "Клинический психолог, специалист по психосоматике",
    about:
      "Изучаю связь между психологическим состоянием и телесными симптомами. Работаю с хронической усталостью, головными болями и другими проявлениями, у которых нет чёткой медицинской причины.",
    approaches: [
      "Телесно-ориентированный подход",
      "Работа с хронической усталостью",
      "Анализ психосоматических паттернов",
      "Дыхательные и релаксационные практики",
    ],
    reviews: [
      { author: "Дилноза", rating: 5, text: "Наконец поняла, откуда мои постоянные головные боли. Спасибо, Ольга!" },
      { author: "Виктор", rating: 4, text: "Глубокий специалист, помогла посмотреть на здоровье шире." },
    ],
  },
  {
    id: 8,
    name: "Александр Лебедев",
    initials: "АЛ",
    avatarColor: "#6B8A9C",
    photo: null,
    specialization: "КПТ и тревога",
    tags: ["КПТ", "Тревога", "Офлайн"],
    price: 310,
    duration: 50,
    format: "offline",
    experience: 12,
    rating: 4.9,
    reviewsCount: 95,
    qualification: "Психотерапевт, сертифицированный КПТ-специалист",
    about:
      "12 лет практики в когнитивно-поведенческой терапии. Работаю со всеми видами тревожных расстройств, фобиями и навязчивыми мыслями. Даю чёткую структуру и измеримый результат.",
    approaches: [
      "Когнитивно-поведенческая терапия",
      "Работа с фобиями",
      "Экспозиционная терапия",
      "Профилактика рецидивов",
    ],
    reviews: [
      { author: "Парвина", rating: 5, text: "Избавилась от фобии, с которой жила 15 лет. Невероятно благодарна." },
      { author: "Артём", rating: 5, text: "Александр — профессионал высшего уровня. Всё по делу." },
    ],
  },
  {
    id: 9,
    name: "Наталья Егорова",
    initials: "НЕ",
    avatarColor: "#B8A45C",
    photo: null,
    specialization: "Травма и ПТСР",
    tags: ["Травма", "ПТСР", "Онлайн"],
    price: 330,
    duration: 60,
    format: "online",
    experience: 14,
    rating: 5.0,
    reviewsCount: 58,
    qualification: "Травматерапевт, специалист по работе с ПТСР",
    about:
      "Работаю с последствиями психологических травм и посттравматическим стрессовым расстройством. Использую бережные, проверенные методы, которые не форсируют процесс.",
    approaches: [
      "Работа с травмой в собственном темпе клиента",
      "Стабилизация нервной системы",
      "Ресурсные техники",
      "Постепенная проработка травматичного опыта",
    ],
    reviews: [
      { author: "Шахзода", rating: 5, text: "Наталья — очень безопасный человек, с ней можно говорить о самом тяжёлом." },
      { author: "Евгений", rating: 5, text: "Спустя год работы я снова чувствую себя живым. Спасибо." },
    ],
  },
];

/* Отзывы клиентов платформы для главной страницы */
const homeReviews = [
  {
    author: "Мадина Раҳимова",
    rating: 5,
    text: "Долго боялась обратиться к психологу, а через Равоншинос это оказалось легко — выбрала специалиста за 10 минут, и уже после первой сессии почувствовала облегчение.",
  },
  {
    author: "Фарҳод Каримов",
    rating: 5,
    text: "Удобно, что можно посмотреть подход, цену и отзывы заранее. Записался онлайн, психолог оказался именно тем, кто нужен.",
  },
  {
    author: "Зарина Юсупова",
    rating: 4,
    text: "Понравился большой выбор специалистов по разным направлениям. Нашла психолога, который специализируется именно на моём запросе.",
  },
];

/* ---------- 2. ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ---------- */

// Возвращает HTML со звёздами рейтинга (например 4.5 -> ★★★★½)
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  let stars = "★".repeat(full);
  if (half) stars += "½";
  const emptyCount = 5 - full - (half ? 1 : 0);
  stars += "☆".repeat(Math.max(emptyCount, 0));
  return stars;
}

// Возвращает читаемое название формата работы
function formatLabel(format) {
  if (format === "online") return "Онлайн";
  if (format === "offline") return "Офлайн";
  return "Онлайн и офлайн";
}

// Строит блок аватара: если указано фото — <img>, иначе CSS-инициалы
function avatarHTML(p, sizeClass) {
  if (p.photo) {
    // МОЖНО ЗАМЕНИТЬ НА <img>: путь к фото уже используется здесь
    return `<img class="avatar-photo ${sizeClass || ""}" src="${p.photo}" alt="Фото психолога ${p.name}">`;
  }
  return `<div class="avatar ${sizeClass || ""}" style="background:${p.avatarColor}">${p.initials}</div>`;
}

// Строит HTML одной карточки психолога (для главной страницы и каталога)
function renderCard(p) {
  return `
    <article class="psych-card">
      <div class="psych-card-top">
        ${avatarHTML(p)}
        <div>
          <div class="psych-card-name">${p.name}</div>
          <div class="psych-card-spec">${p.specialization}</div>
        </div>
      </div>
      <div class="psych-card-meta">
        <span class="tag tag-blue">${formatLabel(p.format)}</span>
        <span class="tag">${p.experience} лет опыта</span>
      </div>
      <div class="psych-card-rating">
        <span class="stars">${renderStars(p.rating)}</span>
        <strong>${p.rating.toFixed(1)}</strong>
        <span class="rating-count">(${p.reviewsCount} отзывов)</span>
      </div>
      <div class="psych-card-bottom">
        <div class="price-tag">${p.price} смн<span>за сессию ${p.duration} мин</span></div>
        <a class="btn btn-primary btn-sm" href="profile.html?id=${p.id}">Подробнее</a>
      </div>
    </article>
  `;
}

// Показывает всплывающее уведомление (toast) внизу экрана
function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

/* ---------- 3. МОБИЛЬНОЕ МЕНЮ (все страницы) ---------- */
function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-active", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Закрываем меню при клике по ссылке (удобно на мобильных)
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-active");
    });
  });
}

/* ---------- 4. ГЛАВНАЯ СТРАНИЦА ---------- */
function initHomePage() {
  const grid = document.querySelector("#home-cards-grid");
  if (!grid) return; // мы не на главной странице

  // На главной показываем первые 6 психологов
  const featured = psychologists.slice(0, 6);
  grid.innerHTML = featured.map(renderCard).join("");

  // Отзывы
  const reviewsGrid = document.querySelector("#home-reviews-grid");
  if (reviewsGrid) {
    reviewsGrid.innerHTML = homeReviews
      .map(
        (r) => `
        <div class="review-card">
          <div class="review-stars"><span class="stars">${renderStars(r.rating)}</span></div>
          <p class="review-text">«${r.text}»</p>
          <div class="review-author">— ${r.author}</div>
        </div>
      `
      )
      .join("");
  }

  // Форма поиска на главной — при отправке ведём на каталог с параметрами
  const searchForm = document.querySelector("#home-search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const params = new URLSearchParams();
      const spec = searchForm.querySelector("[name='specialization']").value;
      const format = searchForm.querySelector("[name='format']").value;
      const price = searchForm.querySelector("[name='price']").value;
      if (spec) params.set("specialization", spec);
      if (format) params.set("format", format);
      if (price) params.set("maxPrice", price);
      window.location.href = "catalog.html" + (params.toString() ? "?" + params.toString() : "");
    });
  }

  // CTA-форма для психологов на главной (демо, без реальной отправки)
  const psychForm = document.querySelector("#psych-cta-form");
  if (psychForm) {
    psychForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Заявка отправлена! Мы свяжемся с вами в течение 1–2 рабочих дней.");
      psychForm.reset();
    });
  }
}

/* ---------- 5. СТРАНИЦА КАТАЛОГА ---------- */
function initCatalogPage() {
  const grid = document.querySelector("#catalog-grid");
  if (!grid) return; // мы не в каталоге

  const specSelect = document.querySelector("#filter-specialization");
  const formatSelect = document.querySelector("#filter-format");
  const experienceSelect = document.querySelector("#filter-experience");
  const priceRange = document.querySelector("#filter-price-range");
  const priceOutput = document.querySelector("#filter-price-output");
  const resultsCount = document.querySelector("#results-count");
  const emptyState = document.querySelector("#catalog-empty");
  const resetBtn = document.querySelector("#filters-reset");

  // Заполняем список специализаций автоматически из данных
  const specs = [...new Set(psychologists.map((p) => p.specialization))].sort();
  specSelect.innerHTML =
    `<option value="">Любая специализация</option>` +
    specs.map((s) => `<option value="${s}">${s}</option>`).join("");

  function applyFilters() {
    const spec = specSelect.value;
    const format = formatSelect.value;
    const minExperience = Number(experienceSelect.value) || 0;
    const maxPrice = Number(priceRange.value);

    priceOutput.textContent = maxPrice + " смн";

    const filtered = psychologists.filter((p) => {
      if (spec && p.specialization !== spec) return false;
      if (format && p.format !== format && p.format !== "both") return false;
      if (format && p.format === "both") {
        // "both" подходит и под "online", и под "offline"
      }
      if (p.experience < minExperience) return false;
      if (p.price > maxPrice) return false;
      return true;
    });

    if (filtered.length === 0) {
      grid.innerHTML = "";
      emptyState.style.display = "block";
    } else {
      emptyState.style.display = "none";
      grid.innerHTML = filtered.map(renderCard).join("");
    }
    resultsCount.textContent = `Найдено специалистов: ${filtered.length}`;
  }

  // Предзаполняем фильтры из query-параметров (если пришли с главной)
  const params = new URLSearchParams(window.location.search);
  if (params.get("specialization")) specSelect.value = params.get("specialization");
  if (params.get("format")) formatSelect.value = params.get("format");
  if (params.get("maxPrice")) priceRange.value = params.get("maxPrice");

  [specSelect, formatSelect, experienceSelect, priceRange].forEach((el) =>
    el.addEventListener("input", applyFilters)
  );

  resetBtn.addEventListener("click", () => {
    specSelect.value = "";
    formatSelect.value = "";
    experienceSelect.value = "0";
    priceRange.value = priceRange.max;
    applyFilters();
  });

  applyFilters();
}

/* ---------- 6. СТРАНИЦА ПРОФИЛЯ ПСИХОЛОГА ---------- */
function initProfilePage() {
  const container = document.querySelector("#profile-container");
  if (!container) return; // мы не на странице профиля

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id")) || 1;
  const p = psychologists.find((item) => item.id === id) || psychologists[0];

  document.title = `${p.name} — ${p.specialization} | Равоншинос`;

  container.innerHTML = `
    <div class="profile-main">
      <div class="profile-card profile-head">
        ${avatarHTML(p, "avatar-lg")}
        <div class="profile-head-info">
          <h1>${p.name}</h1>
          <div class="psych-card-spec">${p.qualification}</div>
          <div class="profile-badges">
            <span class="tag tag-blue">${formatLabel(p.format)}</span>
            <span class="tag">${p.experience} лет опыта</span>
            <span class="tag">${p.specialization}</span>
          </div>
          <div class="psych-card-rating" style="padding-left:0;margin-top:10px;">
            <span class="stars">${renderStars(p.rating)}</span>
            <strong>${p.rating.toFixed(1)}</strong>
            <span class="rating-count">(${p.reviewsCount} отзывов)</span>
          </div>
        </div>
      </div>

      <div class="profile-card">
        <h2>О себе</h2>
        <p>${p.about}</p>
      </div>

      <div class="profile-card">
        <h2>Подходы в работе</h2>
        <ul class="approach-list">
          ${p.approaches.map((a) => `<li>${a}</li>`).join("")}
        </ul>
      </div>

      <div class="profile-card">
        <h2>Отзывы клиентов</h2>
        ${p.reviews
          .map(
            (r) => `
          <div class="review-card" style="box-shadow:none;border:1px solid var(--color-gray-light);margin-bottom:14px;">
            <div class="review-stars"><span class="stars">${renderStars(r.rating)}</span></div>
            <p class="review-text">«${r.text}»</p>
            <div class="review-author">— ${r.author}</div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>

    <div class="profile-sidebar">
      <div class="booking-card">
        <div class="booking-price">${p.price} смн <span>за сессию</span></div>
        <div class="booking-detail-row"><span>Длительность</span><strong>${p.duration} минут</strong></div>
        <div class="booking-detail-row"><span>Формат</span><strong>${formatLabel(p.format)}</strong></div>
        <div class="booking-detail-row"><span>Опыт работы</span><strong>${p.experience} лет</strong></div>
        <button class="btn btn-primary btn-block mt-24" id="open-booking-modal">Записаться на сессию</button>
      </div>
    </div>
  `;

  // Открытие модалки записи
  const modal = document.querySelector("#booking-modal");
  const openBtn = document.querySelector("#open-booking-modal");
  const closeBtn = document.querySelector("#booking-modal-close");
  const bookingForm = document.querySelector("#booking-form");
  const bookingFormWrap = document.querySelector("#booking-form-wrap");
  const bookingSuccess = document.querySelector("#booking-success");

  if (modal && openBtn) {
    openBtn.addEventListener("click", () => {
      modal.classList.add("is-open");
      document.querySelector("#booking-modal-name-target").textContent = p.name;
    });
    closeBtn.addEventListener("click", () => modal.classList.remove("is-open"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("is-open");
    });
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      bookingFormWrap.style.display = "none";
      bookingSuccess.classList.add("is-visible");
    });
  }
}

/* ---------- 7. ЗАПУСК ПРИ ЗАГРУЗКЕ СТРАНИЦЫ ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initHomePage();
  initCatalogPage();
  initProfilePage();

  // Подставляем текущий год в футер (если есть элемент #current-year)
  const yearEl = document.querySelector("#current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
