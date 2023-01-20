  // import Swiper, { Navigation, Pagination } from 'swiper';

  // import 'swiper/css';
  // import 'swiper/css/navigation';
  // import 'swiper/css/pagination';


const swiper = new Swiper('.swiper', {
  // modules: [Navigation, Pagination],

  loop: true,
  slidesPerView: 3,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  effect: 'coverflow',
  coverflowEffect: {
    rotate: 50,
    slideShadows: false,
  },

});

// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

const acc = new Accordion('.accordion-container');
acc.open(0)
