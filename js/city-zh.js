// City page JavaScript for city-zh.html

// City data (Chinese version)
const cities = [
    { id: 'beijing', name: 'Beijing', nameZh: '北京', desc: '千年古都，长城故宫雄伟壮观', img: 'images/beijing.jpg', tags: ['历史', '文化', '长城'] },
    { id: 'shanghai', name: 'Shanghai', nameZh: '上海', desc: '现代都市，东西方文化交融', img: 'images/shanghai.jpg', tags: ['现代', '购物', '天际线'] },
    { id: 'guilin', name: 'Guilin', nameZh: '桂林', desc: '喀斯特地貌壮丽，漓江风光如画', img: 'images/guilin.jpg', tags: ['自然', '风景', '河流'] },
    { id: 'chengdu', name: 'Chengdu', nameZh: '成都', desc: '大熊猫故乡，川菜美食之都', img: 'images/chengdu.jpg', tags: ['熊猫', '美食', '休闲'] },
    { id: 'hangzhou', name: 'Hangzhou', nameZh: '杭州', desc: '人间天堂，西湖美景传世', img: 'images/hangzhou.jpg', tags: ['湖泊', '自然', '茶文化'] },
    { id: 'xian', name: 'Xi\'an', nameZh: '西安', desc: '千年古都，兵马俑震撼世界', img: 'images/xian.jpg', tags: ['历史', '兵马俑', '文化'] },
    { id: 'lijiang', name: 'Lijiang', nameZh: '丽江', desc: '古城纳西文化，玉龙雪山壮丽', img: 'images/lijiang.jpg', tags: ['古城', '文化', '雪山'] },
    { id: 'suzhou', name: 'Suzhou', nameZh: '苏州', desc: '园林之城，古典园林精美绝伦', img: 'images/suzhou.jpg', tags: ['园林', '水乡', '建筑'] },
    { id: 'guangzhou', name: 'Guangzhou', nameZh: '广州', desc: '美食天堂，南方大都市', img: 'images/guangzhou.jpg', tags: ['美食', '现代', '粤菜'] },
    { id: 'nanjing', name: 'Nanjing', nameZh: '南京', desc: '六朝古都，中山陵巍峨、秦淮河婉约、盐水鸭飘香', img: 'images/nanjing.jpg', tags: ['历史', '文化', '美食', '古都'] }
];

const itemsPerPage = 6;
let currentPage = 1;
let filteredCities = [...cities];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    displayCities();
    setupPagination();
});

// Search functionality
function filterCities() {
    const searchTerm = document.getElementById('citySearch').value.toLowerCase();
    
    if (searchTerm === '') {
        filteredCities = [...cities];
    } else {
        filteredCities = cities.filter(city => 
            city.name.toLowerCase().includes(searchTerm) ||
            city.nameZh.includes(searchTerm) ||
            city.desc.toLowerCase().includes(searchTerm) ||
            city.tags.some(tag => tag.includes(searchTerm))
        );
    }
    
    currentPage = 1;
    displayCities();
    setupPagination();
}

// Display cities for current page
function displayCities() {
    const grid = document.getElementById('cityGrid');
    grid.innerHTML = '';
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const citiesToShow = filteredCities.slice(startIndex, endIndex);
    
    if (citiesToShow.length === 0) {
        grid.innerHTML = '<p style="text-align:center;color:#7F8C8D;grid-column:1/-1;">未找到城市。请尝试其他搜索词。</p>';
        return;
    }
    
    citiesToShow.forEach(city => {
        const card = document.createElement('div');
        card.className = 'city-card';
        card.innerHTML = `
            <div class="card-image" style="background-image: url('${city.img}')"></div>
            <div class="card-content">
                <h3>${city.nameZh}</h3>
                <p>${city.desc}</p>
                <a href="cities/${city.id}.html" class="card-link">探索 →</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Setup pagination
function setupPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    
    const totalPages = Math.ceil(filteredCities.length / itemsPerPage);
    
    if (totalPages <= 1) return;
    
    // Previous button
    if (currentPage > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.textContent = '← 上一页';
        prevBtn.onclick = () => changePage(currentPage - 1);
        pagination.appendChild(prevBtn);
    }
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        if (i === currentPage) {
            pageBtn.className = 'active';
        }
        pageBtn.onclick = () => changePage(i);
        pagination.appendChild(pageBtn);
    }
    
    // Next button
    if (currentPage < totalPages) {
        const nextBtn = document.createElement('button');
        nextBtn.textContent = '下一页 →';
        nextBtn.onclick = () => changePage(currentPage + 1);
        pagination.appendChild(nextBtn);
    }
}

function changePage(page) {
    currentPage = page;
    displayCities();
    setupPagination();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Language switch
function switchLang() {
    window.location.href = 'city.html';
}

// Mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');
}

function closeMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.remove('open');
}

// Back to top
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

function refreshPage() {
    window.location.reload();
}

// Close mobile menu on outside click
document.addEventListener('click', function(event) {
    const menu = document.getElementById('mobileMenu');
    const btn = document.querySelector('.mobile-menu-btn');
    if (!menu.contains(event.target) && !btn.contains(event.target)) {
        menu.classList.remove('open');
    }
});
