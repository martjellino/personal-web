import Typed from "typed.js";

new Typed("#prod-heading", {
  strings: [
    "I'll help you building nice apps like E-Commerce...",
    "I'll help you building nice apps like Chat App...",
    "I'll help you building nice apps like Car Rental...",
    "I'll help you building nice apps like e-Wallet...",
    "And many more...!"
  ],
  typeSpeed: 78,
  backSpeed: 50,
  loop: true,
  cursorChar: " ",
  smartBackspace: true,
});

// hidden effect of text
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => observer.observe(el));

// dark mode
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// carousel
const carousel = document.getElementById("carousel");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentSlide = 0;
const totalSlides = carousel.querySelectorAll(".carousel-item").length;

function updateCarousel() {
  const translateX = -currentSlide * 100;
  carousel.style.transform = `translateX(${translateX}%)`;
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

// Initially set up the carousel
updateCarousel();

