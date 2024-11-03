let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    if (index !== activeIndex) {
        // Hide non-active slides
        slide.style.display = 'none';
      } else {
        // Show active slide
        slide.style.display = 'block';
      } 
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});

/* slides.forEach((slide, index) => {
      if (index !== activeIndex) {
        // Hide non-active slides
        slide.style.display = 'none';
      } else {
        // Show active slide
        slide.style.display = 'block';
      } */