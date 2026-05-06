// ===== DATA =====
// ===== HERO DATA =====
const heroImages = [
  "images/hero/hero1.jpeg",
  "images/hero/hero2.jpeg",
  "images/hero/hero3.jpeg",
  "images/hero/hero4.jpeg",
  "images/hero/hero5.jpeg",
  "images/hero/hero6.jpeg",
  "images/hero/hero7.jpeg",
  "images/hero/hero8.jpeg",
  "images/hero/hero9.jpeg",
  "images/hero/hero10.jpeg",
  "images/hero/hero11.jpeg",
  "images/hero/hero12.jpeg",
  "images/hero/hero13.jpeg",
  "images/hero/hero14.jpeg",
  "images/hero/hero15.jpeg"
];

const people = [
  {
    name: "Aishwarya",
    last: "",
    img: "images/aishwarya.jpeg",
    tagline: "The one who never stopped asking why",
    quote: "Every question I asked in that classroom felt like opening a window. I am leaving with a sky full of answers.",
    role: "The Philosopher"
  },
  {
    name: "Ashwini",
    last: "Thakur",
    img: "images/ashwini.jpeg",
    tagline: "Grace in every corridor she walked",
    quote: "They say college changes you. It didn't change me — it revealed me.",
    role: "The Storyteller"
  },
  {
    name: "Deepa",
    last: "",
    img: "images/deepa.jpeg",
    tagline: "Built things before she understood them",
    quote: "We broke things to understand them better.",
    role: "The Builder"
  },
  {
    name: "Deepika",
    last: "",
    img: "images/deepika.jpeg",
    tagline: "Quiet voice, the loudest conviction",
    quote: "I chose silence carefully.",
    role: "The Visionary"
  },
  {
    name: "Gagan",
    last: "",
    img: "images/gagan.jpeg",
    tagline: "Laughter in the hardest lectures",
    quote: "If you can laugh through the storm, you've already survived it.",
    role: "The Anchor"
  },
  {
    name: "Himanshu",
    last: "",
    img: "images/himanshu.jpeg",
    tagline: "Heart as wide as ambition",
    quote: "Every late night was worth it.",
    role: "The Heart"
  },
  {
    name: "Honey",
    last: "",
    img: "images/honey.jpeg",
    tagline: "Led when nobody asked",
    quote: "Leadership is what you do unseen.",
    role: "The Leader"
  },
  {
    name: "Muskan",
    last: "",
    img: "images/muskan.jpeg",
    tagline: "Poetry in eyes",
    quote: "I learned to read between the lines.",
    role: "The Analyst"
  },
  {
    name: "Nikita",
    last: "Sharma",
    img: "images/nikita.jpeg",
    tagline: "Turned setbacks into art",
    quote: "Mistakes are just brush strokes.",
    role: "The Artist"
  },
  {
    name: "Priya",
    last: "",
    img: "images/priya.jpeg",
    tagline: "Always learning",
    quote: "Every page still lives in me.",
    role: "The Scholar"
  },
  {
    name: "Raj",
    last: "Meena",
    img: "images/raj.jpeg",
    tagline: "Connected everyone",
    quote: "I chose to see family.",
    role: "The Bridge"
  },
  {
    name: "Pankaj",
    last: "Kumar Yadav",
    img: "images/pankaj.jpeg",
    tagline: "Kindness was his language",
    quote: "Being kind and respectful is worth it.",
    role: "The Engineer"
  },
  {
    name: "Rohit",
    last: "",
    img: "images/rohit.jpeg",
    tagline: "Carried dreams",
    quote: "I never gave up.",
    role: "The Dreamer"
  },
  {
  name: "Ashwini",
  last: "",
  img: "images/ashwini2.jpeg",
  tagline: "He turned ordinary days into stories",
  quote: "Some moments fade, but the way they made us feel stays forever. I’m taking those feelings with me.",
  role: "The Memory Keeper"
},
  {
  name: "Kamal",
  last: "",
  img: "images/kamal.jpeg",
  tagline: "Calm mind, unstoppable focus",
  quote: "I didn’t rush the process — I trusted it. Every step shaped who I am becoming.",
  role: "The Strategist"
},
];
 
// Curated Unsplash photos — portraits (faces not shown, artistic)

 
const galleryPhotos = Array.from({ length: 30 }, (_, i) => ({
  src: `images/gallery/gallery${i + 1}.jpeg`,
  h: Math.floor(Math.random() * 150) + 250 // random height for aesthetic
}));

// ===== BUILD HERO SLIDES =====
const slidesEl = document.getElementById('slides');

heroImages.forEach((img, i) => {
  const div = document.createElement('div');
  div.className = 'slide' + (i === 0 ? ' active' : '');

  div.innerHTML = `
    <img class="slide-img" src="${img}" alt="Memory ${i + 1}" loading="${i < 2 ? 'eager' : 'lazy'}">
    <div class="slide-overlay"></div>
    <div class="slide-content">
      <div class="slide-number">${String(i + 1).padStart(2, '0')} of ${heroImages.length}</div>
      <h2 class="slide-name">Batch of <em>2026</em></h2>
      <p class="slide-tagline">Moments that defined us</p>
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

  counter.textContent =
    String(current + 1).padStart(2, '0') + ' / ' + slides.length;

  resetProgress();
}
 
function resetProgress() {
  progressBar.style.transition = 'none';
  progressBar.style.width = '0%';

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      progressBar.style.transition = 'width 5s linear';
      progressBar.style.width = '100%';
    });
  });

  clearTimeout(autoTimer);
  autoTimer = setTimeout(() => showSlide(current + 1), 5000);
}

// Controls
document.getElementById('nextBtn').addEventListener('click', () => {
  showSlide(current + 1);
});

document.getElementById('prevBtn').addEventListener('click', () => {
  showSlide(current - 1);
});

// Init
resetProgress();
 
// ===== BUILD STORIES =====
const storiesEl = document.getElementById('stories');
people.forEach((p, i) => {
  const rev = i % 2 !== 0;
  const div = document.createElement('div');
  div.className = 'story' + (rev ? ' reverse' : '');
  div.innerHTML = `
    <div class="story-image">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="story-image-overlay"></div>
    </div>
    <div class="story-body">
      <span class="story-index">${String(i+1).padStart(2,'0')}</span>
      <p class="story-num reveal reveal-delay-1">${String(i+1).padStart(2,'0')} / 15 &nbsp;·&nbsp; ${p.role}</p>
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
// ===== FINALE BACKGROUND SLIDER =====
const finaleBg = document.getElementById("finaleBg");

// pick some students for background rotation
const finaleImages = [
  people[0].img,
  people[3].img,
  people[7].img,
  people[9].img,
  people[12].img
];

finaleImages.forEach((src, i) => {
  const div = document.createElement("div");
  div.className = "finale-slide" + (i === 0 ? " active" : "");
  div.innerHTML = `<img src="${src}" loading="lazy">`;
  finaleBg.appendChild(div);
});

const finaleSlides = document.querySelectorAll(".finale-slide");
let finaleIndex = 0;

setInterval(() => {
  finaleSlides[finaleIndex].classList.remove("active");
  finaleIndex = (finaleIndex + 1) % finaleSlides.length;
  finaleSlides[finaleIndex].classList.add("active");
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

// ===== TYPEWRITER EFFECT =====
const text = "Not the end.\nJust the beginning.";
const el = document.getElementById("typewriter");

let i = 0;

function typeWriter() {
  if (i < text.length) {
    if (text[i] === "\n") {
      el.innerHTML += "<br>";
    } else {
      el.innerHTML += text[i];
    }
    i++;
    setTimeout(typeWriter, 60);
  }
}

setTimeout(typeWriter, 800); // slight delay after load