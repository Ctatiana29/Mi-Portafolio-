// Toggle para Modo Oscuro / Claro
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.body.removeAttribute('data-theme');
    themeToggle.textContent = '☀️';
  } else {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '🌙';
  }
});

// Animación al hacer Scroll (Intersection Observer)
const observerOptions = {
  threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in-scroll').forEach(section => {
  observer.observe(section);
});

// Manejo del Formulario de Contacto
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Mensaje enviado con éxito. Me pondré en contacto contigo a la brevedad.');
  contactForm.reset();
});