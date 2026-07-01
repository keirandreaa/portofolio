// ===== 1. Sparkle cursor trail =====
const glyphs = ['✦', '✧', '✩', '✷', '★'];
function spawnSparkle(x, y) {
  const s = document.createElement('span');
  s.className = 'sparkle';
  s.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
  s.style.left = x + 'px';
  s.style.top = y + 'px';
  s.style.color = Math.random() > 0.5 ? '#8a5a3b' : '#f6f0df';
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 800);
}
let lastSparkle = 0;
window.addEventListener('mousemove', (e) => {
  const now = Date.now();
  if (now - lastSparkle > 60) {
    lastSparkle = now;
    spawnSparkle(e.clientX, e.clientY);
  }
});

// ===== 2. Experience accordion (dipakai di halaman experience.html) =====
document.querySelectorAll('.exp-toggle').forEach((btn) => {
  const item = btn.closest('.exp-item');
  btn.setAttribute('aria-expanded', 'false');
  btn.addEventListener('click', () => {
    const open = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
});

// ===== 3. Vibe counter (dipakai di halaman about/index.html) =====
const vibeBtn = document.getElementById('vibeBtn');
if (vibeBtn) {
  let vibes = 0;
  const vibeCount = document.getElementById('vibeCount');
  vibeBtn.addEventListener('click', () => {
    vibes++;
    vibeCount.textContent = vibes;
    spawnSparkle(window.innerWidth / 2, 120);
  });
}

// ===== 4. Star mood widget (dipakai di halaman index.html) =====
const starWidget = document.getElementById('starWidget');
if (starWidget) {
  const moods = ['★ ui/ux design', '✦ branding', '☆ illustration', '✷ photography', '✧ leadership'];
  let mi = 0;
  const starMood = document.getElementById('starMood');
  starMood.textContent = moods[0];
  starWidget.addEventListener('click', () => {
    mi = (mi + 1) % moods.length;
    starMood.textContent = moods[mi];
  });
}

// ===== 5. Tandai menu nav yang sedang aktif =====
(function highlightActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.canva-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
})();

// ===== 6. Inisialisasi ikon Lucide =====
if (window.lucide) {
  lucide.createIcons();
}