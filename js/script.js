


const swiper = new Swiper('.education__swipper', {
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



const acc = new Accordion('.accordion-container');
acc.open(0)

const swiperModal = new Swiper('.modal__swiper', {
  // modules: [Navigation, Pagination],

  // loop: true,

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
});

const advBtn = document.querySelectorAll('.advantages__buttom-item');
const modalWin = document.querySelector('.modal');
const modalSwiperDom = document.querySelector('.modal__swiper');
const modalNextSlide = document.querySelector('.modal__swiper-next')

advBtn.forEach((el)=>{
  el.addEventListener('click', ()=>{
    modalWin.classList.add('vissual');
    modalSwiperDom.classList.add('vissual');
    let slide = getSlide(el)
    console.log(slide)
    changeSlide(swiperModal, slide)
  })
})

function getSlide(button) {
  return Number(button.dataset.slide)
}

function changeSlide (swiper, slide) {
  swiper.slideTo(slide-1)

}

modalSwiperDom.addEventListener('click', event => {
  event._isClickWithinModal = true;
});

modalWin.addEventListener('click', event => {
  if (event._isClickWithinModal) return;
  modalWin.classList.remove('vissual')
  modalSwiperDom.classList.remove('vissual')
})



const anchors = document.querySelectorAll('a[href*="#"]') // links

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }





