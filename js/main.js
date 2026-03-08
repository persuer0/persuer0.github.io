/* ============================================
   Personal Academic Portfolio — JavaScript
   ============================================ */

// ==========================================
// 配置 — 在此修改密码
// ==========================================
const CONFIG = {
  // 🔑 修改此处设置你的访问密码
  password: 'portfolio2026',
};

// ==========================================
// 密码门控
// ==========================================
const gate = document.getElementById('password-gate');
const mainContent = document.getElementById('main-content');
const passwordInput = document.getElementById('password-input');
const passwordSubmit = document.getElementById('password-submit');
const passwordError = document.getElementById('password-error');

function checkPassword() {
  const input = passwordInput.value.trim();

  if (!input) {
    showError('请输入密码');
    shakeInput();
    return;
  }

  if (input === CONFIG.password) {
    // 密码正确 — 解锁
    gate.classList.add('fade-out');
    mainContent.classList.remove('hidden');
    document.body.style.overflow = 'auto';

    // 保存到 sessionStorage（刷新前有效）
    sessionStorage.setItem('auth', 'true');

    // 移除门控 DOM
    setTimeout(() => {
      gate.remove();
      initScrollAnimations();
    }, 600);
  } else {
    showError('密码错误，请重试');
    shakeInput();
    passwordInput.value = '';
    passwordInput.focus();
  }
}

function showError(msg) {
  passwordError.textContent = msg;
  setTimeout(() => {
    passwordError.textContent = '';
  }, 3000);
}

function shakeInput() {
  passwordInput.classList.add('shake');
  setTimeout(() => passwordInput.classList.remove('shake'), 500);
}

// 事件绑定
passwordSubmit.addEventListener('click', checkPassword);
passwordInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') checkPassword();
});

// 检查 session 是否已认证
if (sessionStorage.getItem('auth') === 'true') {
  gate.remove();
  mainContent.classList.remove('hidden');
  document.body.style.overflow = 'auto';
  // 延迟初始化滚动动画
  requestAnimationFrame(() => initScrollAnimations());
} else {
  document.body.style.overflow = 'hidden';
  passwordInput.focus();
}

// ==========================================
// 导航栏
// ==========================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');

// 滚动效果
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  updateActiveNav();
});

// 移动端菜单切换
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// 点击导航链接关闭菜单
navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// 高亮当前 section 的导航
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      navLinkItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// ==========================================
// 滚动动画 (Intersection Observer)
// ==========================================
function initScrollAnimations() {
  const elements = document.querySelectorAll(
    '.award-card, .video-card, .internship-block, .contact-card, ' +
    '.gallery-item, .goal-item, .research-intro, .research-plan, ' +
    '.research-goals, .about-grid, .awards-section, .videos-section'
  );

  elements.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  elements.forEach(el => observer.observe(el));
}

// ==========================================
// Lightbox（图片放大查看）
// ==========================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(element) {
  const img = element.querySelector('img');
  if (img && img.src) {
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = 'auto';
  lightboxImg.src = '';
}

// ESC 关闭 lightbox
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('active')) {
    closeLightbox();
  }
});

// ==========================================
// 平滑滚动 polyfill (for Safari)
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80; // navbar height
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  });
});
