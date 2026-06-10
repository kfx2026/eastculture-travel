// City page JavaScript for city.html

// City data (mock - replace with API call)
const cities = [
    { id: 'beijing', name: 'Beijing', nameZh: '北京', desc: 'Ancient capital with majestic Great Wall and Forbidden City', img: 'images/beijing.jpg', tags: ['history', 'culture', 'great wall'] },
    { id: 'shanghai', name: 'Shanghai', nameZh: '上海', desc: 'Modern metropolis blending Eastern and Western cultures', img: 'images/shanghai.jpg', tags: ['modern', 'shopping', 'skyline'] },
    { id: 'guilin', name: 'Guilin', nameZh: '桂林', desc: 'Breathtaking karst landscapes and Li River cruises', img: 'images/guilin.jpg', tags: ['nature', 'scenery', 'river'] },
    { id: 'chengdu', name: 'Chengdu', nameZh: '成都', desc: 'Hometown of giant pandas and Sichuan cuisine', img: 'images/chengdu.jpg', tags: ['pandas', 'food', 'relaxed'] },
    { id: 'hangzhou', name: 'Hangzhou', nameZh: '杭州', desc: 'Paradise on earth with West Lake', img: 'images/hangzhou.jpg', tags: ['lake', 'nature', 'tea'] },
    { id: 'xian', name: 'Xi\'an', nameZh: '西安', desc: 'Ancient capital with Terracotta Warriors', img: 'images/xian.jpg', tags: ['history', 'warriors', 'culture'] },
    { id: 'lijiang', name: 'Lijiang', nameZh: '丽江', desc: 'Ancient town with Naxi culture and Jade Dragon Snow Mountain', img: 'images/lijiang.jpg', tags: ['ancient town', 'culture', 'mountain'] },
    { id: 'suzhou', name: 'Suzhou', nameZh: '苏州', desc: 'Garden city with classical Chinese gardens', img: 'images/suzhou.jpg', tags: ['gardens', 'canals', 'architecture'] },
    { id: 'guangzhou', name: 'Guangzhou', nameZh: '广州', desc: 'Food paradise and southern metropolis', img: 'images/guangzhou.jpg', tags: ['food', 'modern', 'cantonese'] },
    { id: 'shenzhen', name: 'Shenzhen', nameZh: '深圳', desc: 'High-tech hub and modern city', img: 'images/shenzhen.jpg', tags: ['tech', 'modern', 'shopping'] },
    { id: 'chongqing', name: 'Chongqing', nameZh: '重庆', desc: 'Mountain city famous for hot pot and night views', img: 'images/chongqing.jpg', tags: ['food', 'mountains', 'night view'] },
    { id: 'qingdao', name: 'Qingdao', nameZh: '青岛', desc: 'Coastal city with German architecture and Tsingtao beer', img: 'images/qingdao.jpg', tags: ['coast', 'beer', 'architecture'] },
    { id: 'nanjing', name: 'Nanjing', nameZh: '南京', desc: 'Ancient capital of six dynasties — mausoleums, Qinhuai River, and legendary salted duck', img: 'images/nanjing.jpg', tags: ['history', 'culture', 'food', 'capital'] }
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
        grid.innerHTML = '<p style="text-align:center;color:#7F8C8D;grid-column:1/-1;">No cities found. Try a different search term.</p>';
        return;
    }
    
    citiesToShow.forEach(city => {
        const card = document.createElement('div');
        card.className = 'city-card';
        card.innerHTML = `
            <div class="card-image" style="background-image: url('${city.img}')"></div>
            <div class="card-content">
                <h3>${city.name}</h3>
                <p>${city.desc}</p>
                <a href="cities/${city.id}.html" class="card-link">Discover →</a>
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
        prevBtn.textContent = '← Previous';
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
        nextBtn.textContent = 'Next →';
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
    window.location.href = 'city-zh.html';
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
