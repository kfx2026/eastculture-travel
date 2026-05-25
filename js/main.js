// Main JavaScript for index.html

// Language switch function
function switchLang() {
    const currentPage = window.location.pathname;
    if (currentPage.includes('index.html') || currentPage.endsWith('/')) {
        window.location.href = 'index-zh.html';
    } else {
        window.location.href = 'index.html';
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');
}

function closeMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.remove('open');
}

// Back to top button
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

// Refresh page
function refreshPage() {
    window.location.reload();
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('mobileMenu');
    const btn = document.querySelector('.mobile-menu-btn');
    if (!menu.contains(event.target) && !btn.contains(event.target)) {
        menu.classList.remove('open');
    }
});

// Load seasonal cities (mock data - replace with API call)
document.addEventListener('DOMContentLoaded', function() {
    loadSeasonalCities();
    loadRecentCities();
});

function loadSeasonalCities() {
    // Mock data - in production, fetch from API
    const cities = [
        { name: 'Beijing', desc: 'Ancient capital with majestic Great Wall', img: 'images/beijing.jpg' },
        { name: 'Shanghai', desc: 'Modern metropolis blending Eastern and Western cultures', img: 'images/shanghai.jpg' },
        { name: 'Guilin', desc: 'Breathtaking karst landscapes and Li River cruises', img: 'images/guilin.jpg' }
    ];
    // Already hardcoded in HTML for now
}

function loadRecentCities() {
    // Mock data - in production, fetch from API
    const cities = [
        { name: 'Chengdu', desc: 'Hometown of giant pandas and Sichuan cuisine', img: 'images/chengdu.jpg' },
        { name: 'Hangzhou', desc: 'Paradise on earth with West Lake', img: 'images/hangzhou.jpg' }
    ];
    // Already hardcoded in HTML for now
}
