document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function() {
    const slideContainer = document.querySelector('.partners-container');
    const slide = document.querySelector('.partners-slide');
    const prevButton = document.querySelector('.slide-prev');
    const nextButton = document.querySelector('.slide-next');
    let slidePosition = 0;

    nextButton.addEventListener('click', function() {
        slidePosition -= 220; // Kích thước ảnh + margin
        if (slidePosition < -slide.scrollWidth + slideContainer.offsetWidth) {
            slidePosition = 0;
        }
        slide.style.transform = `translateX(${slidePosition}px)`;
    });

    prevButton.addEventListener('click', function() {
        slidePosition += 220;
        if (slidePosition > 0) {
            slidePosition = -slide.scrollWidth + slideContainer.offsetWidth;
        }
        slide.style.transform = `translateX(${slidePosition}px)`;
    });
});