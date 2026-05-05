// ===== DATA =====
const people = [
  { name: "Arjun", last: "Mehta", tagline: "The one who never stopped asking why", quote: "Every question I asked in that classroom felt like opening a window. I am leaving with a sky full of answers.", role: "The Philosopher" },
  { name: "Priya", last: "Sharma", tagline: "Grace in every corridor she walked", quote: "They say college changes you. It didn't change me — it revealed me.", role: "The Storyteller" },
  { name: "Rohan", last: "Kapoor", tagline: "Built things before he understood them", quote: "We broke things to understand them better. Now I understand them better than anything.", role: "The Builder" },
  { name: "Ananya", last: "Gupta", tagline: "Quiet voice, the loudest conviction", quote: "I chose silence carefully. And I chose my words even more carefully.", role: "The Visionary" },
  { name: "Karan", last: "Patel", tagline: "Laughter in the hardest lectures", quote: "If you can laugh through the storm, you've already survived it.", role: "The Anchor" },
  { name: "Sneha", last: "Verma", tagline: "Heart as wide as her ambitions", quote: "Every late night, every doubt — I would do it all again. A thousand times.", role: "The Heart" },
  { name: "Aditya", last: "Nair", tagline: "Led when nobody asked him to", quote: "Leadership isn't a role. It's what you do when nobody is watching.", role: "The Leader" },
  { name: "Ishaan", last: "Singh", tagline: "Found poetry in every data set", quote: "Numbers don't lie, but they don't tell the whole truth either. I learned to read between the lines.", role: "The Analyst" },
  { name: "Meera", last: "Joshi", tagline: "Turned every setback into a canvas", quote: "Art taught me that mistakes are just brush strokes in the wrong direction — and that's fine.", role: "The Artist" },
  { name: "Rahul", last: "Das", tagline: "Always the last one to leave the library", quote: "Knowledge doesn't expire. Every page I turned is still turning somewhere inside me.", role: "The Scholar" },
  { name: "Kavya", last: "Reddy", tagline: "Bridged every gap in the room", quote: "In a room full of strangers, I chose to see family. That made all the difference.", role: "The Bridge" },
  { name: "Dev", last: "Malhotra", tagline: "Code was his second language", quote: "I came here to learn algorithms. I left knowing that the best ones are human.", role: "The Engineer" },
  { name: "Nisha", last: "Iyer", tagline: "Carried dreams heavier than her backpack", quote: "There were days I wanted to stop. I am glad I never listened to those days.", role: "The Dreamer" }
];
 
// Curated Unsplash photos — portraits (faces not shown, artistic)
const portraits = [
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=900&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=80",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=900&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=900&q=80",
  "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=900&q=80"
];
 
const galleryPhotos = [
  { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80", h: 280 },
  { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80", h: 400 },
  { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80", h: 320 },
  { src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80", h: 360 },
  { src: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&q=80", h: 260 },
  { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80", h: 420 },
  { src: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&q=80", h: 300 },
  { src: "https://images.unsplash.com/photo-1601987077677-5346c463ae93?w=600&q=80", h: 380 },
  { src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80", h: 340 },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80", h: 290 },
  { src: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80", h: 440 },
  { src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80", h: 320 }
];
 
// ===== BUILD HERO SLIDES =====
const slidesEl = document.getElementById('slides');
people.forEach((p, i) => {
  const div = document.createElement('div');
  div.className = 'slide' + (i === 0 ? ' active' : '');
  div.innerHTML = `
    <img class="slide-img" src="${portraits[i]}" alt="${p.name}" loading="${i < 2 ? 'eager' : 'lazy'}">
    <div class="slide-overlay"></div>
    <div class="slide-content">
      <div class="slide-number">${String(i+1).padStart(2,'0')} of 13</div>
      <h2 class="slide-name">${p.name} <em>${p.last}</em></h2>
      <p class="slide-tagline">${p.tagline}</p>
    </div>
  `;
  slidesEl.appendChild(div);
});
 
// ===== HERO AUTOPLAY =====
let current = 0;
const slides = document.querySelectorAll('.slide');
const progressBar = document.getElementById('progressBar');
const counter = document.getElementById('slideCounter');
let autoTimer, progressTimer;
 
function showSlide(idx) {
  slides[current].classList.remove('active');
  current = (idx + slides.length) % slides.length;
  slides[current].classList.add('active');
  counter.textContent = String(current+1).padStart(2,'0') + ' / 13';
  resetProgress();
}
 
function resetProgress() {
  progressBar.style.transition = 'none';
  progressBar.style.width = '0%';
  requestAnimationFrame(() => requestAnimationFrame(() => {
    progressBar.style.transition = 'width 5s linear';
    progressBar.style.width = '100%';
  }));
  clearTimeout(autoTimer);
  autoTimer = setTimeout(() => showSlide(current + 1), 5000);
}
 
document.getElementById('nextBtn').addEventListener('click', () => showSlide(current + 1));
document.getElementById('prevBtn').addEventListener('click', () => showSlide(current - 1));
resetProgress();
 
// ===== BUILD STORIES =====
const storiesEl = document.getElementById('stories');
people.forEach((p, i) => {
  const rev = i % 2 !== 0;
  const div = document.createElement('div');
  div.className = 'story' + (rev ? ' reverse' : '');
  div.innerHTML = `
    <div class="story-image">
      <img src="${portraits[i]}" alt="${p.name}" loading="lazy">
      <div class="story-image-overlay"></div>
    </div>
    <div class="story-body">
      <span class="story-index">${String(i+1).padStart(2,'0')}</span>
      <p class="story-num reveal reveal-delay-1">${String(i+1).padStart(2,'0')} / 13 &nbsp;·&nbsp; ${p.role}</p>
      <h3 class="story-name reveal reveal-delay-2">${p.name} <em>${p.last}</em></h3>
      <p class="story-role reveal reveal-delay-2">${p.tagline}</p>
      <blockquote class="story-quote reveal reveal-delay-3">${p.quote}</blockquote>
    </div>
  `;
  storiesEl.appendChild(div);
});
 
// ===== BUILD GALLERY =====
const galleryGrid = document.getElementById('galleryGrid');
galleryPhotos.forEach(ph => {
  const div = document.createElement('div');
  div.className = 'gallery-item reveal';
  div.innerHTML = `
    <img src="${ph.src}" alt="Memory" loading="lazy" style="height:${ph.h}px;object-fit:cover">
    <div class="gallery-item-overlay"><span class="gallery-item-icon">&#10021;</span></div>
  `;
  div.addEventListener('click', () => {
    modalImg.src = ph.src.replace('w=600', 'w=1600');
    modal.classList.add('open');
  });
  galleryGrid.appendChild(div);
});
 
// ===== BUILD FINALE BG =====
const finaleBg = document.getElementById('finaleBg');
[portraits[0], portraits[6], portraits[12]].forEach((src, i) => {
  const div = document.createElement('div');
  div.className = 'finale-slide' + (i === 0 ? ' active' : '');
  div.innerHTML = `<img src="${src}" alt="" loading="lazy">`;
  finaleBg.appendChild(div);
});
let finaleIdx = 0;
const finaleSlides = document.querySelectorAll('.finale-slide');
setInterval(() => {
  finaleSlides[finaleIdx].classList.remove('active');
  finaleIdx = (finaleIdx + 1) % finaleSlides.length;
  finaleSlides[finaleIdx].classList.add('active');
}, 4000);
 
// ===== MODAL =====
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalClose = document.getElementById('modalClose');
modalClose.addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') modal.classList.remove('open'); });
 
// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
revealEls.forEach(el => io.observe(el));
 
// ===== SPLASH ENTER =====
document.getElementById('enterBtn').addEventListener('click', () => {
  document.getElementById('splash').classList.add('hidden');
  setTimeout(() => {
    document.getElementById('main').classList.add('visible');
    document.getElementById('splash').style.display = 'none';
  }, 1300);
});
 
// ===== CURSOR =====
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx+'px'; cursor.style.top = my+'px'; });
function animRing() {
  rx += (mx - rx) * 0.14;
  ry += (my - ry) * 0.14;
  cursorRing.style.left = rx+'px';
  cursorRing.style.top = ry+'px';
  requestAnimationFrame(animRing);
}
animRing();
 
// ===== SMOOTH SCROLL for nav =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
  });
});