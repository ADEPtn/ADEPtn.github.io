document.addEventListener('DOMContentLoaded', () => {
    // --- Generic Carousel Logic ---
    const setupCarousel = (carouselId, prevBtnId, nextBtnId) => {
        const carousel = document.getElementById(carouselId);
        if (!carousel) return;

        const items = carousel.querySelectorAll('.carousel-item');
        const prevBtn = document.getElementById(prevBtnId);
        const nextBtn = document.getElementById(nextBtnId);
        let currentIndex = 0;

        if (items.length <= 1) {
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            if (items.length > 0) items[0].classList.remove('hidden');
            return;
        }

        const showItem = (index) => {
            items.forEach((item, i) => {
                item.classList.toggle('hidden', i !== index);
            });
        };

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            showItem(currentIndex);
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % items.length;
            showItem(currentIndex);
        });
        
        showItem(currentIndex);
    };

    // Initialize all carousels on the site
    setupCarousel('project-carousel', 'prev-btn-main', 'next-btn-main');
    setupCarousel('board-carousel', 'prev-btn-board', 'next-btn-board');
    setupCarousel('project-photos-carousel', 'prev-btn-project', 'next-btn-project');
    setupCarousel('article-photos-carousel', 'prev-btn-article', 'next-btn-article');
    
    // --- Mobile Menu Logic ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});
