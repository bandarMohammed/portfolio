// =====================================================
// الموقع الشخصي — بندر محمد الطلحي
// التفاعلات: التنقل، حركات الظهور، عداد الأرقام، النموذج
// =====================================================

// ----- شريط التنقل: تغيير المظهر عند التمرير -----
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 60;
  navbar.classList.toggle('scrolled', scrolled);
  backToTop.classList.toggle('visible', window.scrollY > 500);
});

// ----- القائمة في الجوال -----
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// إغلاق القائمة عند اختيار رابط
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ----- زر العودة للأعلى -----
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ----- حركات الظهور عند التمرير (Intersection Observer) -----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ----- عداد الأرقام في قسم "من أنا" -----
const counters = document.querySelectorAll('.stat-num');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = +el.dataset.count;
    const duration = 1500; // مدة العد بالمللي ثانية
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });

counters.forEach(c => counterObserver.observe(c));

// ----- نموذج التواصل -----
// ملاحظة: هذا النموذج يعرض رسالة تأكيد فقط.
// لربطه ببريدك فعلياً استخدم خدمة مثل Formspree أو EmailJS.
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  formStatus.textContent = `شكراً لك ${name}! تم استلام رسالتك وسأتواصل معك قريباً.`;
  contactForm.reset();
  setTimeout(() => (formStatus.textContent = ''), 6000);
});

// ----- تحديث سنة الحقوق تلقائياً -----
document.getElementById('year').textContent = new Date().getFullYear();
