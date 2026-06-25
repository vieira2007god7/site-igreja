// ===== NAVBAR SCROLL =====
const navbar = document.querySelector('.navbar');
if (navbar) {
  // O parâmetro { passive: true } melhora a performance de rolagem da página
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ===== HAMBURGER MENU =====
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.navbar-links');
if (navToggle && navLinks) {
  const toggleMenu = () => {
    const isOpen = navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
    // Atualiza o estado para leitores de tela (Acessibilidade)
    navToggle.setAttribute('aria-expanded', isOpen);
  };

  navToggle.addEventListener('click', toggleMenu);

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('remove');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { 
        e.target.classList.add('visible'); 
        observer.unobserve(e.target); 
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));
}

// ===== PIX COPY =====
const copyBtn = document.getElementById('copy-pix');
if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('64.757.502/0001-44')
      .then(() => {
        const orig = copyBtn.textContent;
        copyBtn.textContent = '✅ Copiado!';
        copyBtn.style.background = '#25D366';
        setTimeout(() => { 
          copyBtn.textContent = orig; 
          copyBtn.style.background = ''; 
        }, 2000);
      })
      .catch(err => {
        console.error('Erro ao copiar texto: ', err);
      });
  });
}

// ===== CONTACT FORM (ENVIO REAL VIA AJAX) =====
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    
    const success = document.getElementById('form-success');
    const actionUrl = form.getAttribute('action');
    
    // Se o formulário tiver uma action configurada (ex: Formspree), envia via AJAX
    if (actionUrl) {
      const data = new FormData(form);
      
      fetch(actionUrl, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })
      .then(response => {
        if (response.ok) {
          if (success) success.style.display = 'block';
          form.reset();
          setTimeout(() => { if (success) success.style.display = 'none'; }, 5000);
        } else {
          alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
        }
      })
      .catch(() => {
        alert('Erro de conexão. Verifique sua internet e tente novamente.');
      });
    } else {
      // Fallback visual caso não haja integração de backend configurada no HTML
      if (success) success.style.display = 'block';
      form.reset();
      setTimeout(() => { if (success) success.style.display = 'none'; }, 5000);
    }
  });
}
