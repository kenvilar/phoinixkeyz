import Splide from '@splidejs/splide';

new Splide('#splide', {
  direction: 'ttb',
  heightRatio: 0.5,
  // width: 'auto',
  arrows: false,
  lazyLoad: 'sequential',
  type: 'fade',
  rewind: true,
  focus: 'center',
  cover: true,
  // padding: {
  //   right: '50rem',
  //   left : '50rem',
  // },
}).mount();
