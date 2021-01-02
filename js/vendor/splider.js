import Splide from '@splidejs/splide';

if (document.getElementById('splide')) {
  new Splide('#splide', {
    direction: 'ttb',
    heightRatio: 0.8,
    arrows: false,
    lazyLoad: 'sequential',
    type: 'fade',
    rewind: true,
    focus: 'center',
    cover: true,
  }).mount();
}
