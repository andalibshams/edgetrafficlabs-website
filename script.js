const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.getElementById('year').textContent = new Date().getFullYear();

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('form-status');
    const btn = contactForm.querySelector('[type="submit"]');
    const endpoint = contactForm.getAttribute('data-endpoint');
    if (!endpoint) {
      status.textContent = 'Form not yet configured. Please email contact@edgetrafficlab.com directly.';
      status.className = 'form-status error';
      return;
    }
    btn.disabled = true;
    btn.textContent = 'Sending…';
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        status.textContent = 'Message sent — we’ll be in touch soon.';
        status.className = 'form-status success';
        contactForm.reset();
      } else {
        throw new Error('server');
      }
    } catch {
      status.textContent = 'Something went wrong. Please email contact@edgetrafficlab.com directly.';
      status.className = 'form-status error';
    } finally {
      btn.disabled = false;
      btn.innerHTML = 'Send message <span aria-hidden="true">&#8594;</span>';
    }
  });
}
