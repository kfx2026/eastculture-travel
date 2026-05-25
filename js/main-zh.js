// 中文版主 JavaScript (index-zh.html)

// 语言切换函数
function switchLang() {
    window.location.href = 'index.html';
}

// 移动端菜单切换
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');
}

function closeMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.remove('open');
}

// 返回顶部按钮
window.onscroll = function() {
    const btn = document.getElementById('backToTop');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.classList.add('visible');
    } else {
        btn.classList.remove('visible');
    }
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// 刷新页面
function refreshPage() {
    window.location.reload();
}

// 点击外部关闭移动菜单
document.addEventListener('click', function(event) {
    const menu = document.getElementById('mobileMenu');
    const btn = document.querySelector('.mobile-menu-btn');
    if (!menu.contains(event.target) && !btn.contains(event.target)) {
        menu.classList.remove('open');
    }
});

// 加载时令热门城市（模拟数据）
document.addEventListener('DOMContentLoaded', function() {
    loadSeasonalCities();
    loadRecentCities();
});

function loadSeasonalCities() {
    // 模拟数据 - 实际应从 API 获取
    const cities = [
        { name: 'Beijing', nameZh: '北京', desc: '千年古都，长城故宫雄伟壮观', img: 'images/beijing.jpg' },
        { name: 'Shanghai', nameZh: '上海', desc: '现代都市，东西方文化交融', img: 'images/shanghai.jpg' },
        { name: 'Guilin', nameZh: '桂林', desc: '喀斯特地貌壮丽，漓江风光如画', img: 'images/guilin.jpg' }
    ];
    // HTML 中已硬编码
}

function loadRecentCities() {
    // 模拟数据 - 实际应从 API 获取
    const cities = [
        { name: 'Chengdu', nameZh: '成都', desc: '大熊猫故乡，川菜美食之都', img: 'images/chengdu.jpg' },
        { name: 'Hangzhou', nameZh: '杭州', desc: '人间天堂，西湖美景传世', img: 'images/hangzhou.jpg' }
    ];
    // HTML 中已硬编码
}
