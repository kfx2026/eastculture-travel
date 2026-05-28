/**
 * 东方城市人文空间 · 文旅 — 数据加载器
 * v2.0: 数据按城市拆分，按需加载
 * 每个城市 = data/cities/{id}.json
 */
(function() {
'use strict';

window._currentLang = 'en';
window.DICT = {};
window.CITIES = [];
var cityCache = {};

// ===== 加载字典 + 城市索引 =====
window._dataReady = Promise.all([
  fetch('data/dict.json').then(function(r) { return r.json(); }),
  fetch('data/cities/index.json').then(function(r) { return r.json(); })
]).then(function(data) {
  window.DICT = data[0];
  window.CITIES = data[1];
  return window.CITIES;
});

// ===== 按需加载单个城市 =====
window.loadCity = function(id) {
  if (cityCache[id]) return Promise.resolve(cityCache[id]);
  return fetch('data/cities/' + id + '.json')
    .then(function(r) { return r.json(); })
    .then(function(city) {
      cityCache[id] = city;
      return city;
    });
};

// ===== 翻译函数 =====
window._ = function(key, lang) {
  lang = lang || window._currentLang || 'en';
  var item = window.DICT[key];
  if (!item) return key;
  return item[lang] || item.en || key;
};

// ===== 双语对象取值 =====
window._t = function(obj, lang) {
  lang = lang || window._currentLang || 'en';
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  return obj[lang] || obj.en || '';
};

})();
