// Splash Screen
const enterBtn = document.getElementById("enterBtn");
const splash = document.getElementById("splash");
const main = document.getElementById("mainContent");

enterBtn.addEventListener("click", () => {
  splash.style.display = "none";
  main.style.display = "block";
});

// Simple Slider
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3000);

// Scroll Animation
const blocks = document.querySelectorAll(".block");

window.addEventListener("scroll", () => {
  blocks.forEach(block => {
    let rect = block.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      block.style.opacity = 1;
      block.style.transform = "translateY(0)";
    }
  });
});