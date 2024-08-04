let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel-item');

    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === slideIndex) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides();
}

function prevSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlides();
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
});