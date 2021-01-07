import ScrollReveal from 'scrollreveal';

setTimeout(() => {
  let query = document.querySelectorAll('.load-hidden');
  query.forEach(e => e.classList.remove('load-hidden'));
}, 2500);

ScrollReveal().reveal('.scrollreveal', {
  delay: 700,
  useDelay: 'onload',
  interval: 400,
});

ScrollReveal().reveal('.parallax_bg__top_section .scrollreveal', {
  useDelay: 'onload',
  delay: 500,
  interval: 200,
  scale: 1,
  origin: 'bottom',
  distance: '80px',
  viewFactor: 0.2,
});

ScrollReveal().reveal('.videos__section .scrollreveal', {
  useDelay: 'onload',
  delay: 600,
  interval: 500,
});

ScrollReveal().reveal('footer .scrollreveal_to_right', {
  useDelay: 'onload',
  origin: 'left',
  delay: 200,
  distance: '120px',
  easing: 'ease-in-out',
  mobile: false,
});

ScrollReveal().reveal('footer .scrollreveal_to_left', {
  useDelay: 'onload',
  origin: 'right',
  delay: 200,
  distance: '120px',
  easing: 'ease-in-out',
  mobile: false,
});
