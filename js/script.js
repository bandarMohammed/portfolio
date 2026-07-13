// =====================================================
// الموقع الشخصي — بندر محمد الطلحي
// التفاعلات: اللغة، التنقل، حركات الظهور، العداد، النموذج
// =====================================================

// ----- قاموس الترجمة (عربي / إنجليزي) -----
// ✏️ عدّل النصوص هنا بكلتا اللغتين — كل مفتاح يقابل عنصراً في الصفحة
const translations = {
  ar: {
    logo: 'بندر<span>.</span>',
    nav_about: 'من أنا',
    nav_interests: 'اهتماماتي',
    nav_achievements: 'إنجازاتي',
    nav_services: 'خدماتي',
    nav_contact: 'تواصل معي',
    hero_greeting: 'أهلاً بك، أنا',
    hero_name: 'بندر محمد الطلحي',
    hero_tagline: 'شغوف بالتقنية وتطوير الذات، أسعى دائماً للتعلم وبناء أثر إيجابي.',
    hero_cta: 'تواصل معي',
    hero_more: 'اعرف المزيد',
    about_title: 'من <span>أنا</span>',
    about_p1: 'أنا بندر محمد الطلحي، طالب طموح أؤمن بأن التعلم المستمر هو مفتاح النجاح. أهتم بالتقنية وتطوير المهارات، وأسعى لتحويل الأفكار إلى مشاريع واقعية تخدم المجتمع.',
    about_p2: 'أبحث دائماً عن فرص جديدة للنمو، وأستمتع بالعمل ضمن فريق وبناء علاقات مهنية مثمرة.',
    fact_name_label: 'الاسم:',
    fact_name: 'بندر محمد الطلحي',
    fact_location_label: 'الموقع:',
    fact_location: 'المملكة العربية السعودية',
    fact_linkedin_label: 'لينكد إن:',
    fact_linkedin: 'ملفي الشخصي',
    stat_projects: 'مشروع ومبادرة',
    stat_skills: 'مهارات أساسية',
    stat_passion: '٪ شغف والتزام',
    interests_title: 'اهتما<span>ماتي</span>',
    int1_title: 'التقنية والبرمجة',
    int1_desc: 'متابعة أحدث التقنيات وتعلم أساسيات تطوير المواقع والتطبيقات.',
    int2_title: 'التعلم المستمر',
    int2_desc: 'القراءة وحضور الدورات التدريبية لتطوير مهاراتي الشخصية والمهنية.',
    int3_title: 'العمل التطوعي',
    int3_desc: 'المشاركة في المبادرات المجتمعية وترك أثر إيجابي في المحيط.',
    int4_title: 'ريادة الأعمال',
    int4_desc: 'الاطلاع على قصص النجاح واستكشاف الأفكار والمشاريع الناشئة.',
    achievements_title: 'إنجا<span>زاتي</span>',
    ach1_title: 'إطلاق موقعي الشخصي',
    ach1_desc: 'تصميم وبناء موقع شخصي يعكس هويتي البصرية باستخدام HTML و CSS و JavaScript.',
    ach2_title: 'إنجاز أكاديمي',
    ach2_desc: 'إتمام مقررات دراسية بتقدير مميز وتطوير مهارات جديدة.',
    ach3_title: 'مشاركة مجتمعية',
    ach3_desc: 'المشاركة في فعاليات ومبادرات تطوعية داخل الجامعة والمجتمع.',
    services_title: 'خدما<span>تي</span>',
    srv1_title: 'تصميم صفحات ويب',
    srv1_desc: 'بناء صفحات ويب بسيطة وجذابة باستخدام HTML و CSS و JavaScript.',
    srv2_title: 'كتابة المحتوى',
    srv2_desc: 'صياغة محتوى عربي واضح واحترافي للمواقع والعروض التقديمية.',
    srv3_title: 'عروض تقديمية',
    srv3_desc: 'إعداد عروض تقديمية منظمة وأنيقة تناسب المشاريع الدراسية والمهنية.',
    contact_title: 'تواصل <span>معي</span>',
    contact_lead: 'يسعدني تواصلك معي لأي فرصة تعاون أو استفسار.',
    contact_email: 'البريد الإلكتروني',
    contact_linkedin: 'لينكد إن',
    form_name: 'اسمك الكريم',
    form_email: 'بريدك الإلكتروني',
    form_message: 'اكتب رسالتك هنا...',
    form_submit: 'إرسال الرسالة',
    form_thanks: (name) => `شكراً لك ${name}! تم استلام رسالتك وسأتواصل معك قريباً.`,
    footer_text: 'بندر محمد الطلحي — جميع الحقوق محفوظة',
    page_title: 'بندر محمد الطلحي | الموقع الشخصي'
  },
  en: {
    logo: 'Bandar<span>.</span>',
    nav_about: 'About',
    nav_interests: 'Interests',
    nav_achievements: 'Achievements',
    nav_services: 'Services',
    nav_contact: 'Contact Me',
    hero_greeting: 'Hello, I am',
    hero_name: 'Bandar Mohammed Al-Talhi',
    hero_tagline: 'Passionate about technology and self-development, always eager to learn and make a positive impact.',
    hero_cta: 'Contact Me',
    hero_more: 'Learn More',
    about_title: 'About <span>Me</span>',
    about_p1: 'I am Bandar Mohammed Al-Talhi, an ambitious student who believes continuous learning is the key to success. I am passionate about technology and skill development, and I strive to turn ideas into real projects that serve the community.',
    about_p2: 'I am always looking for new opportunities to grow, and I enjoy teamwork and building meaningful professional relationships.',
    fact_name_label: 'Name:',
    fact_name: 'Bandar Mohammed Al-Talhi',
    fact_location_label: 'Location:',
    fact_location: 'Saudi Arabia',
    fact_linkedin_label: 'LinkedIn:',
    fact_linkedin: 'My Profile',
    stat_projects: 'Projects & Initiatives',
    stat_skills: 'Core Skills',
    stat_passion: '% Passion & Commitment',
    interests_title: 'My <span>Interests</span>',
    int1_title: 'Technology & Coding',
    int1_desc: 'Following the latest technologies and learning web and app development fundamentals.',
    int2_title: 'Continuous Learning',
    int2_desc: 'Reading and attending training courses to develop my personal and professional skills.',
    int3_title: 'Volunteering',
    int3_desc: 'Participating in community initiatives and making a positive impact.',
    int4_title: 'Entrepreneurship',
    int4_desc: 'Exploring success stories, new ideas, and startup projects.',
    achievements_title: 'My <span>Achievements</span>',
    ach1_title: 'Launching My Personal Website',
    ach1_desc: 'Designing and building a personal website reflecting my visual identity using HTML, CSS, and JavaScript.',
    ach2_title: 'Academic Achievement',
    ach2_desc: 'Completing courses with distinction and developing new skills.',
    ach3_title: 'Community Participation',
    ach3_desc: 'Taking part in volunteer events and initiatives at university and in the community.',
    services_title: 'My <span>Services</span>',
    srv1_title: 'Web Page Design',
    srv1_desc: 'Building simple and attractive web pages using HTML, CSS, and JavaScript.',
    srv2_title: 'Content Writing',
    srv2_desc: 'Crafting clear, professional Arabic content for websites and presentations.',
    srv3_title: 'Presentations',
    srv3_desc: 'Preparing organized, elegant presentations for academic and professional projects.',
    contact_title: 'Contact <span>Me</span>',
    contact_lead: 'I would love to hear from you about any collaboration or inquiry.',
    contact_email: 'Email',
    contact_linkedin: 'LinkedIn',
    form_name: 'Your name',
    form_email: 'Your email',
    form_message: 'Write your message here...',
    form_submit: 'Send Message',
    form_thanks: (name) => `Thank you ${name}! Your message has been received and I will get back to you soon.`,
    footer_text: 'Bandar Mohammed Al-Talhi — All Rights Reserved',
    page_title: 'Bandar Al-Talhi | Personal Portfolio'
  }
};

// اللغة الحالية (محفوظة في المتصفح)
let currentLang = localStorage.getItem('lang') || 'ar';

// ----- تطبيق اللغة على الصفحة -----
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const t = translations[lang];

  // اتجاه الصفحة ولغتها
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.title = t.page_title;

  // تبديل النصوص
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // تبديل نصوص الحقول (placeholder)
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // نص زر التبديل يعرض اللغة الأخرى
  document.getElementById('langToggle').textContent = lang === 'ar' ? 'EN' : 'ع';
}

// زر تبديل اللغة
document.getElementById('langToggle').addEventListener('click', () => {
  setLanguage(currentLang === 'ar' ? 'en' : 'ar');
});

// تطبيق اللغة المحفوظة عند فتح الصفحة
setLanguage(currentLang);

// ----- شريط التنقل: تغيير المظهر عند التمرير -----
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
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
  formStatus.textContent = translations[currentLang].form_thanks(name);
  contactForm.reset();
  setTimeout(() => (formStatus.textContent = ''), 6000);
});

// ----- تحديث سنة الحقوق تلقائياً -----
document.getElementById('year').textContent = new Date().getFullYear();
