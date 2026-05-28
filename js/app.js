/**
 * 东方城市人文空间 · 文旅 — 渲染引擎
 * 共享函数：双语切换、导航渲染、城市卡片、详情渲染、广告位、分页
 */
(function() {
'use strict';

var _lang = 'en';
window._currentLang = 'en';

// ===== UTILS =====
function t(key) { return window._(key, _lang); }
function tl(obj) { return window._t(obj, _lang); }

// ===== LANG SWITCH =====
function switchLang() {
  _lang = _lang === 'en' ? 'zh' : 'en';
  window._currentLang = _lang;
  localStorage.setItem('oc_lang', _lang);
  renderPage();
}
window.switchLang = switchLang;

// ===== RENDER AD UNIT =====
function renderAd(id) {
  var el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = '<div class="ad-placeholder">' + t('ad_label') + '</div>';
}

// ===== RENDER NAV =====
function renderNav(page) {
  var navEl = document.getElementById('main-nav');
  if (!navEl) return;
  navEl.innerHTML =
    '<div class="nav-brand"><a href="index.html" style="text-decoration:none;color:inherit;">' + t('site_name') + '</a></div>' +
    '<button class="hamburger" onclick="var n=document.getElementById(\'nav-links\');n.classList.toggle(\'open\')">&#9776;</button>' +
    '<div class="nav-links" id="nav-links">' +
      '<a href="index.html"' + (page === 'home' ? ' class="active"' : '') + '>' + t('home') + '</a>' +
      '<a href="cities.html"' + (page === 'cities' ? ' class="active"' : '') + '>' + t('cities') + '</a>' +
    '</div>' +
    '<div class="nav-actions">' +
      '<button class="btn-lang" onclick="window.switchLang()">' + t('lang_switch') + '</button>' +
      '<button class="btn-top" onclick="window.scrollTo({top:0,behavior:\'smooth\'})">' + t('back_top') + '</button>' +
    '</div>';
}

// ===== RENDER FOOTER =====
function renderFooter() {
  var el = document.getElementById('main-footer');
  if (!el) return;
  el.innerHTML =
    '<div class="footer-brand">' + t('site_name') + '</div>' +
    '<div class="footer-text">' + t('footer_text') + ' · <a href="mailto:178577324@qq.com">' + t('footer_contact') + '</a></div>' +
    '<div class="footer-links"><a href="privacy.html">' + t('footer_privacy') + '</a> · <a href="https://food.eastculture.top" target="_blank">' + t('footer_food') + '</a> · <a href="https://ai.aichatmail.one" target="_blank">AI & Earthlings</a></div>' +
    '<div class="footer-copyright">' + t('footer_copyright') + '</div>';
}

// ===== RENDER CITY CARD =====
function renderCityCard(city) {
  var name = tl(city.name);
  var province = tl(city.province);
  var intro = tl(city.intro);
  var imgStyle = 'background-image:url(' + city.hero_img + '),' + city.hero_fb + ';';
  return '' +
    '<div class="city-card" onclick="location.href=\'cities.html?city=' + city.id + '\'">' +
      '<div class="city-card-img" style="' + imgStyle + '">' +
        '<div class="city-card-badge">' + province + '</div>' +
      '</div>' +
      '<div class="city-card-body">' +
        '<h3>' + name + '</h3>' +
        '<p class="city-card-province">' + province + '</p>' +
        '<p class="city-card-intro">' + intro + '</p>' +
        '<span class="card-link">' + t('view_detail') + '</span>' +
      '</div>' +
    '</div>';
}

// ===== BACK TO TOP =====
function setupBackToTop() {
  var btn = document.getElementById('back-to-top');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.className = 'btn-back-top';
    btn.innerHTML = '&#9650;';
    btn.title = t('back_top');
    btn.addEventListener('click', function() { window.scrollTo({top:0,behavior:'smooth'}); });
    document.body.appendChild(btn);
  }
  var onScroll = function() {
    if (window.scrollY > 400) { btn.classList.add('visible'); }
    else { btn.classList.remove('visible'); }
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
}

// ===== PAGINATION =====
function renderPagination(total, perPage, currentPage, containerId) {
  var el = document.getElementById(containerId);
  if (!el || total <= perPage) { if (el) el.innerHTML = ''; return; }
  var totalPages = Math.ceil(total / perPage);
  var html = '';
  html += '<button ' + (currentPage <= 1 ? 'disabled' : '') + ' onclick="window.goPage(' + (currentPage - 1) + ')">' + t('prev') + '</button>';
  for (var i = 1; i <= totalPages; i++) {
    html += '<button class="' + (i === currentPage ? 'active' : '') + '" onclick="window.goPage(' + i + ')">' + i + '</button>';
  }
  html += '<button ' + (currentPage >= totalPages ? 'disabled' : '') + ' onclick="window.goPage(' + (currentPage + 1) + ')">' + t('next') + '</button>';
  el.innerHTML = html;
}

// ===== RENDER INDEX =====
function renderIndex() {
  var app = document.getElementById('app');
  if (!app) return;

  // Grab featured cities
  var featured = window.CITIES.slice(0, 3);
  var allCities = window.CITIES;

  var cardsHtml = '';
  for (var i = 0; i < allCities.length; i++) {
    cardsHtml += renderCityCard(allCities[i]);
  }
  // Add coming soon
  cardsHtml += '' +
    '<div class="city-card coming-soon">' +
      '<div class="cs-icon">&#9678;</div>' +
      '<h3>' + t('coming_soon') + '</h3>' +
      '<p style="color:#8E9EAE;font-size:0.9rem;">' + t('coming_soon_sub') + '</p>' +
    '</div>';

  app.innerHTML =
    // --- HERO ---
    '<section class="hero">' +
      '<div class="hero-bg" style="background-image:url(\'' + allCities[0].hero_img + '\'),' + allCities[0].hero_fb + ';"></div>' +
      '<div class="hero-content">' +
        '<h1>' + t('hero_title') + '</h1>' +
        '<p class="hero-sub">' + t('hero_sub') + '</p>' +
        '<a href="cities.html" class="btn-cta">' + t('hero_cta') + '</a>' +
      '</div>' +
    '</section>' +

    // --- AD 1 ---
    '<div class="ad-unit"><div id="ad-mid-1" class="ad-placeholder">' + t('ad_label') + '</div></div>' +

    // --- SEASONAL PICKS ---
    '<section class="section" id="featured">' +
      '<div class="section-header">' +
        '<div class="section-label">' + t('sec_featured') + '</div>' +
        '<h2 class="section-title">' + t('sec_featured') + '</h2>' +
        '<p class="section-subtitle">' + t('sec_featured_sub') + '</p>' +
      '</div>' +
      '<div class="city-grid">' +
        (function() { var h = ''; for (var j = 0; j < featured.length; j++) { h += renderCityCard(featured[j]); } return h; })() +
      '</div>' +
    '</section>' +

    // --- LATEST CITIES ---
    '<section class="section" id="latest">' +
      '<div class="section-header">' +
        '<div class="section-label">' + t('sec_latest') + '</div>' +
        '<h2 class="section-title">' + t('sec_latest') + '</h2>' +
        '<p class="section-subtitle">' + t('sec_latest_sub') + '</p>' +
      '</div>' +
      '<div class="city-grid">' + cardsHtml + '</div>' +
    '</section>' +

    // --- BRAND ---
    '<section class="section" id="brand">' +
      '<div class="section-header">' +
        '<h2 class="section-title">' + t('sec_brand') + '</h2>' +
        '<p class="section-subtitle">' + t('sec_brand_sub') + '</p>' +
      '</div>' +
      '<div class="brand-grid">' +
        '<div class="brand-item"><div class="brand-num">01</div><h3>' + t('brand_1_title') + '</h3><p>' + t('brand_1_desc') + '</p></div>' +
        '<div class="brand-item"><div class="brand-num">02</div><h3>' + t('brand_2_title') + '</h3><p>' + t('brand_2_desc') + '</p></div>' +
        '<div class="brand-item"><div class="brand-num">03</div><h3>' + t('brand_3_title') + '</h3><p>' + t('brand_3_desc') + '</p></div>' +
      '</div>' +
    '</section>' +

    // --- AD 3 (pre-footer) ---
    '<div class="ad-unit"><div id="ad-footer" class="ad-placeholder">' + t('ad_label') + '</div></div>';

  // Set alt text for hero
  document.title = tl(window.CITIES[0].name) + ' - ' + t('site_name');
}

// ===== RENDER CITIES PAGE =====
var citiesCurPage = 1;
var citiesPerPage = 6;
window.goPage = function(p) {
  citiesCurPage = p;
  renderCitiesPage();
  document.getElementById('cities-grid').scrollIntoView({behavior:'smooth'});
};

function renderCitiesPage() {
  var app = document.getElementById('app');
  if (!app) return;

  // Check if showing city detail
  var urlParams = new URLSearchParams(window.location.search);
  var cityId = urlParams.get('city');

  if (cityId) {
    renderCityDetail(cityId, app);
    return;
  }

  var allCities = window.CITIES;
  var totalPages = Math.ceil(allCities.length / citiesPerPage);
  if (citiesCurPage > totalPages) citiesCurPage = totalPages;
  if (citiesCurPage < 1) citiesCurPage = 1;
  var start = (citiesCurPage - 1) * citiesPerPage;
  var pageCities = allCities.slice(start, start + citiesPerPage);

  var cardsHtml = '';
  for (var i = 0; i < pageCities.length; i++) {
    cardsHtml += renderCityCard(pageCities[i]);
  }

  app.innerHTML =
    '<div class="page-header">' +
      '<h1>' + t('cities') + '</h1>' +
      '<p class="city-count">' + allCities.length + ' ' + t('city_count_label') + '</p>' +
    '</div>' +

    '<div class="ad-unit"><div id="ad-mid-c" class="ad-placeholder">' + t('ad_label') + '</div></div>' +

    '<section class="section" id="cities-grid">' +
      '<div class="city-grid">' + cardsHtml + '</div>' +
      '<div class="pagination" id="pagination"></div>' +
    '</section>' +

    '<div class="ad-unit"><div id="ad-footer-c" class="ad-placeholder">' + t('ad_label') + '</div></div>';

  renderPagination(allCities.length, citiesPerPage, citiesCurPage, 'pagination');
  document.title = t('cities') + ' - ' + t('site_name');
}

// ===== RENDER CITY DETAIL =====
function renderCityDetail(cityId, app) {
  var city = null;
  for (var i = 0; i < window.CITIES.length; i++) {
    if (window.CITIES[i].id === cityId) { city = window.CITIES[i]; break; }
  }
  if (!city) {
    app.innerHTML = '<div class="section"><p style="text-align:center;padding:5rem;">' + t('coming_tba') + '</p></div>';
    return;
  }

  document.title = tl(city.name) + ' - ' + t('site_name');

  // Landmarks
  var lmHtml = '';
  for (var j = 0; j < city.landmarks.length; j++) {
    var lm = city.landmarks[j];
    lmHtml += '' +
      '<div class="landmark-card">' +
        '<div class="lm-img" style="background-image:url(\'' + lm.img + '\'),' + city.hero_fb + ';"></div>' +
        '<div class="lm-body">' +
          '<div class="lm-name">' + tl(lm.name) + '</div>' +
          '<div class="lm-rating">★ ' + lm.rating + '</div>' +
          '<div class="lm-desc">' + tl(lm.desc) + '</div>' +
          '<div class="lm-highlight">💡 ' + tl(lm.highlight) + '</div>' +
          '<div class="lm-meta">' +
            '<span>🕐 ' + tl(lm.hours) + '</span>' +
            '<span>🎫 ' + tl(lm.ticket) + '</span>' +
            '<span>📍 ' + tl(lm.location) + '</span>' +
          '</div>' +
          '<div class="lm-tags">' + (function() {
            var tags = tl(lm.tags).split('·');
            var th = '';
            for (var k = 0; k < tags.length; k++) { th += '<span>' + tags[k].trim() + '</span>'; }
            return th;
          })() + '</div>' +
          '<div style="margin-top:0.8rem;font-size:0.85rem;color:#6B8E9E;">💬 ' + tl(lm.tips) + '</div>' +
        '</div>' +
      '</div>';
  }

  // Cuisine
  var cuHtml = '';
  for (var m = 0; m < city.cuisine.length; m++) {
    var cu = city.cuisine[m];
    cuHtml += '' +
      '<div class="cuisine-card">' +
        '<div class="cu-img" style="background-image:url(\'' + cu.img + '\'),' + city.hero_fb + ';"></div>' +
        '<div class="cu-body">' +
          '<div class="cu-name">' + tl(cu.name) + '</div>' +
          '<div class="cu-desc">' + tl(cu.desc) + '</div>' +
          '<div class="cu-meta">' +
            '<span>📍 ' + tl(cu.where) + '</span>' +
            '<span>💰 ' + tl(cu.price) + '</span>' +
          '</div>' +
          '<div class="cu-try">💡 ' + tl(cu.must_try) + '</div>' +
        '</div>' +
      '</div>';
  }

  // Culture
  var clHtml = '';
  for (var n = 0; n < city.culture.length; n++) {
    var cl = city.culture[n];
    clHtml += '' +
      '<div class="culture-card">' +
        '<div class="cl-img" style="background-image:url(\'' + cl.img + '\'),' + city.hero_fb + ';"></div>' +
        '<div class="cl-body">' +
          '<div class="lm-name">' + tl(cl.name) + '</div>' +
          '<div class="lm-desc">' + tl(cl.desc) + '</div>' +
          '<div class="lm-meta" style="margin-top:0.8rem;">' +
            '<span>📖 ' + tl(cl.significance) + '</span>' +
            '<span>⏰ ' + tl(cl.best_time) + '</span>' +
            '<span>🎯 ' + tl(cl.experience) + '</span>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  // Guide
  var g = city.guide;
  var guideHtml = '' +
    '<div class="guide-grid">' +
      '<div class="guide-item"><h4>' + t('guide_climate') + '</h4><div>' + tl(g.climate) + '</div></div>' +
      '<div class="guide-item"><h4>' + t('guide_days') + '</h4><div>' + tl(g.days) + '</div></div>' +
      '<div class="guide-item"><h4>' + t('guide_transit') + '</h4><div>' + tl(g.transit) + '</div></div>' +
      '<div class="guide-item"><h4>' + t('guide_intercity') + '</h4><div>' + tl(g.intercity) + '</div></div>' +
      '<div class="guide-item" style="grid-column:1/-1;"><h4>' + t('guide_tips') + '</h4><div>' + tl(g.tips) + '</div></div>' +
    '</div>';

  // === New: differentiated sections ===
  var practicalHtml = city.practicalGuide ? '<div class="diff-section">' +
    '<h3>' + t('sec_practical') + '</h3>' +
    '<div class="diff-content">' + tl(city.practicalGuide) + '</div></div>' : '';
  var honestHtml = city.honestTips ? '<div class="diff-section">' +
    '<h3>' + t('sec_honest') + '</h3>' +
    '<div class="diff-content">' + tl(city.honestTips) + '</div></div>' : '';
  var secretHtml = city.localSecrets ? '<div class="diff-section">' +
    '<h3>' + t('sec_secret') + '</h3>' +
    '<div class="diff-content">' + tl(city.localSecrets) + '</div></div>' : '';

  app.innerHTML =
    '<div class="city-detail">' +
      '<a href="cities.html" class="btn-back">' + t('back_cities') + '</a>' +
      '<div class="city-detail-hero">' +
        '<div class="city-hero-bg" style="background-image:url(\'' + city.hero_img + '\'),' + city.hero_fb + ';"></div>' +
        '<div class="city-hero-overlay"><h2>' + tl(city.name) + '</h2></div>' +
      '</div>' +
      '<p class="city-detail-intro">' + tl(city.intro) + '</p>' +

      '<div class="ad-unit"><div class="ad-placeholder">' + t('ad_label') + '</div></div>' +

      '<div class="detail-section">' +
        '<h3>' + t('sec_landmarks') + '</h3>' +
        '<div class="landmark-grid">' + lmHtml + '</div>' +
      '</div>' +

      '<div class="detail-section">' +
        '<h3>' + t('sec_cuisine') + '</h3>' +
        '<div class="cuisine-grid">' + cuHtml + '</div>' +
      '</div>' +

      '<div class="detail-section">' +
        '<h3>' + t('sec_culture') + '</h3>' +
        '<div class="culture-grid">' + clHtml + '</div>' +
      '</div>' +

      '<div class="ad-unit"><div class="ad-placeholder">' + t('ad_label') + '</div></div>' +

      '<div class="detail-section">' +
        '<h3>' + t('sec_guide') + '</h3>' +
        guideHtml +
      '</div>' +

      practicalHtml + honestHtml + secretHtml +
    '</div>';
}

// ===== MAIN RENDER =====
function renderPage() {
  // Restore lang preference
  var savedLang = localStorage.getItem('oc_lang');
  if (savedLang && (savedLang === 'en' || savedLang === 'zh')) {
    _lang = savedLang;
    window._currentLang = _lang;
  }

  // Determine page
  var path = window.location.pathname;
  var page = 'home';
  if (path.indexOf('cities') >= 0) page = 'cities';

  renderNav(page);
  renderFooter();

  if (page === 'home') {
    renderIndex();
  } else {
    renderCitiesPage();
  }

  setupBackToTop();
}

// ===== INIT =====
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderPage);
} else {
  renderPage();
}

})();
