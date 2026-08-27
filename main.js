// ===== NAVBAR SCROLL =====
const navbar = document.querySelector('.navbar');
if (navbar) {
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
    navToggle.setAttribute('aria-expanded', String(isOpen));
  };

  navToggle.addEventListener('click', toggleMenu);

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll('.reveal');
if (reveals.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));
} else {
  reveals.forEach(el => el.classList.add('visible'));
}

// ===== PIX COPY =====
const copyBtn = document.getElementById('copy-pix');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const pixKey = document.getElementById('pix-key')?.textContent.trim();
    if (!pixKey) return;

    try {
      await navigator.clipboard.writeText(pixKey);
      const orig = copyBtn.textContent;
      copyBtn.textContent = '✅ Copiado!';
      copyBtn.classList.add('copied');

      setTimeout(() => {
        copyBtn.textContent = orig;
        copyBtn.classList.remove('copied');
      }, 2000);
    } catch (err) {
      console.error('Erro ao copiar PIX:', err);
      alert('Não foi possível copiar automaticamente. Selecione e copie a chave PIX manualmente.');
    }
  });
}

// ===== CONTACT FORM → WHATSAPP =====
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const nome = String(data.get('nome') || '').trim();
    const whatsapp = String(data.get('whatsapp') || '').trim();
    const email = String(data.get('email') || '').trim();
    const ministerio = String(data.get('ministerio') || '').trim();
    const mensagem = String(data.get('mensagem') || '').trim();

    const ministerios = {
      irmas: 'Ministério Irmãs',
      missoes: 'Ministério Missões',
      juventude: 'Ministério Juventude',
      'culto-familia': 'Culto da Família',
      geral: 'Informações Gerais'
    };

    const texto = [
      'Olá! Gostaria de me cadastrar na Comunidade Cristã No Caminho.',
      '',
      `Nome: ${nome}`,
      `WhatsApp: ${whatsapp}`,
      email ? `E-mail: ${email}` : '',
      ministerio ? `Interesse: ${ministerios[ministerio] || ministerio}` : '',
      mensagem ? `Mensagem: ${mensagem}` : ''
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/5519998532764?text=${encodeURIComponent(texto)}`;
    const success = document.getElementById('form-success');

    if (success) {
      success.style.display = 'block';
      setTimeout(() => { success.style.display = 'none'; }, 5000);
    }

    window.open(url, '_blank', 'noopener,noreferrer');
    form.reset();
  });
}
