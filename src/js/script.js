
import Inputmask from "inputmask";

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

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },

    1000: {
      slidesPerView: 3,

    }
  }

});



const acc = new Accordion('.accordion-container');
acc.open(0)

const accQaa = new Accordion('.qaa__acc')

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
const modalNextSlide = document.querySelector('.modal__swiper-next');
const contactForm = document.querySelector('.contacts__form');

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

  var selector = document.getElementById("tel");
  var im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);



  const formSubmit = document.querySelector('.contacts__btn');
  const inputs = document.querySelectorAll('.contact__input');
  const textArea = document.querySelector('.contact__question');

  const sbmWidth = formSubmit.offsetWidth
  const wrapper = formSubmit.firstChild


  function clearForm(button, inputs, textArea) {
      button.textContent='Отправить'
      inputs.forEach((e)=>{
        e.value='';
      })
      textArea.value=''

  }

  async function loadTodoItems() {
    const response = await fetch('http://psylingva.ru/dev/');
    const data = await response.json();
    console.log(data);
  }

  async function sendForm(form) {
    const currentUrl = window.location.href;
    let response = await fetch(currentUrl, {
    method: `POST`,
    body: new FormData(form)
    })
  }



  contactForm.addEventListener('submit', async (e)=>{
    e.preventDefault()
    loadTodoItems()
    // sendForm(contactForm)
    // formSubmit.style.width = (formSubmit.offsetWidth)+'px';
    // wrapper.textContent='Заявка отправлена!'
    // formSubmit.style.width = (wrapper.offsetWidth+56)+'px';
    // formSubmit.classList.add('contacts__btn-send')
    // setTimeout(()=> {
    //   clearForm(wrapper, inputs, textArea);
    //   formSubmit.style.width=sbmWidth+'px';
    // }, 2000)

  })

  const ButtonUp = document.querySelector('.btn-up')


window.addEventListener('scroll', ()=>{
  let scrollValue = window.pageYOffset;
  if (scrollValue>100) {
    ButtonUp.style.visibility = 'visible'
  } else {
    ButtonUp.style.visibility = 'hidden'
  }
}, { passive: true })

ButtonUp.addEventListener('click', ()=>{
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

  let burger = document.querySelector('.burger')
  let menu = document.querySelector('.header__nav')
  let menuLinks = document.querySelectorAll('.nav__item')



  burger.addEventListener('click',
    function () {
      burger.classList.toggle('header__burger--active');
      menu.classList.toggle('header__nav--active');
      document.body.classList.toggle('stop-scroll');

  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('header__burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');

  })
  })


