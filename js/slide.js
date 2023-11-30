// js/slide.js

let currentSlide = 0;
const slides = document.querySelectorAll('.slide-conteiner');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

// Initialize the first slide
showSlide(currentSlide);
