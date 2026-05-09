// ===== NAVBAR SCROLL =====
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ===== HAMBURGER MENU =====
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.navbar-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));
}

// ===== PIX COPY =====
const copyBtn = document.getElementById('copy-pix');
if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('64.757.502/0001-44').then(() => {
      const orig = copyBtn.textContent;
      copyBtn.textContent = '✅ Copiado!';
      copyBtn.style.background = '#25D366';
      setTimeout(() => { copyBtn.textContent = orig; copyBtn.style.background = ''; }, 2000);
    });
  });
}

// ===== CONTACT FORM =====
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const success = document.getElementById('form-success');
    if (success) { success.style.display = 'block'; }
    form.reset();
    setTimeout(() => { if (success) success.style.display = 'none'; }, 5000);
  });
}
