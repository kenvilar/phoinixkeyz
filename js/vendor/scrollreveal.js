import ScrollReveal from 'scrollreveal';

setTimeout(() => {
  let query = document.querySelectorAll('.load-hidden');
  query.forEach(e => e.classList.remove('load-hidden'));
}, 2500);

ScrollReveal().reveal('.scrollreveal', {
  delay: 500,
  useDelay: 'onload',
  interval: 200,
});

ScrollReveal().reveal('.parallax_bg__top_section .scrollreveal', {
  useDelay: 'onload',
  delay: 300,
  interval: 200,
  scale: 1,
  origin: 'bottom',
  distance: '80px',
  viewFactor: 0.2,
});

ScrollReveal().reveal('.videos__section .scrollreveal', {
  delay: 200,
  useDelay: 'onload',
  interval: 200,
});

ScrollReveal().reveal('footer .scrollreveal-left', {
  origin: 'left',
  delay: 100,
  distance: '10px',
  easing: 'ease-in-out',
  mobile: false,
});

ScrollReveal().reveal('footer .scrollreveal-right', {
  origin: 'right',
  delay: 100,
  distance: '10px',
  easing: 'ease-in-out',
  mobile: false,
});
