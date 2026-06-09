/* ══════════════════════════════════════════
   script.js — أماني العتيبي | سر السعادة
   ══════════════════════════════════════════ */

/* ── تمرير ناعم للأقسام ── */
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* ── ظل الهيدر عند التمرير ── */
window.addEventListener('scroll', function () {
  const hdr = document.getElementById('hdr');
  if (!hdr) return;
  hdr.classList.toggle('scrolled', window.scrollY > 50);
});

/* ── قائمة الموبايل ── */
const menuBtn  = document.getElementById('menuBtn');
const mobileNav= document.getElementById('mobileNav');

if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', function () {
    mobileNav.classList.toggle('open');
    menuBtn.textContent = mobileNav.classList.contains('open') ? '✕' : '☰';
  });
}

function closeMobileNav() {
  if (mobileNav) {
    mobileNav.classList.remove('open');
    if (menuBtn) menuBtn.textContent = '☰';
  }
}

/* ── كشف العناصر عند التمرير (Reveal on Scroll) ── */
const revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        // لا نوقف المراقبة حتى تعمل الرسوم في كل مرة
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.rv').forEach(function (el) {
  revealObserver.observe(el);
});

/* ── تأثير رسوم الكتاب عند اللمس (موبايل) ── */
document.querySelectorAll('.book-3d').forEach(function (book) {
  book.addEventListener('touchstart', function () {
    const inner = this.querySelector('.book-3d-inner');
    if (inner) {
      inner.style.transform = 'rotateY(-18deg)';
      setTimeout(function () {
        inner.style.transform = '';
      }, 800);
    }
  });
});

/* ── إظهار سنة الحقوق تلقائياً ── */
(function () {
  const yr = document.querySelector('.footer-bot');
  if (yr) {
    const currentYear = new Date().getFullYear();
    yr.textContent = yr.textContent.replace('٢٠٢٤', currentYear.toString());
  }
})();
