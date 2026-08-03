document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const form = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  const subject = encodeURIComponent(`Contacto via site - ${nome}`);
  const body = encodeURIComponent(`Nome: ${nome}\nEmail: ${email}\n\n${mensagem}`);

  window.location.href = `mailto:geral@kynova.pt?subject=${subject}&body=${body}`;
  formNote.textContent = 'A abrir o seu cliente de email...';
});
