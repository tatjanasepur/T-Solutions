// Toggle mobile nav menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// ScrollReveal animations
ScrollReveal().reveal('.hero-content h2', {
  delay: 200,
  duration: 1500,
  origin: 'bottom',
  distance: '60px',
  easing: 'ease-in-out',
  reset: false,
});

ScrollReveal().reveal('.hero-content p, .btn-primary', {
  delay: 500,
  duration: 1400,
  origin: 'bottom',
  distance: '40px',
  easing: 'ease-in-out',
  reset: false,
});

ScrollReveal().reveal('.feature-card', {
  interval: 300,
  distance: '50px',
  origin: 'bottom',
  duration: 1300,
  easing: 'ease-out',
  reset: false,
});

ScrollReveal().reveal('.cta h2', {
  delay: 700,
  duration: 1200,
  origin: 'top',
  distance: '40px',
  easing: 'ease-in',
  reset: false,
});

ScrollReveal().reveal('.cta .btn-secondary', {
  delay: 900,
  duration: 1300,
  origin: 'bottom',
  distance: '30px',
  easing: 'ease-in-out',
  reset: false,
});
