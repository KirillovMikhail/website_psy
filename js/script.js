const btnCall = document.querySelector('.dev__call-btn');
const modal = document.querySelector('.dev__call-modal');
const modalBtnClose = document.querySelector('.call__btn-close')
const inputTel = document.getElementById('tel');
const inputFormCall = document.querySelectorAll('.call__input')

btnCall.addEventListener('click', ()=>{
    modal.classList.toggle('visually');
})

modalBtnClose.addEventListener('click', ()=> {
    inputFormCall.forEach((el)=>clearInput(el))
    modal.classList.remove('visually');

})

function addTelMask (selector) {
    var im = new Inputmask("+7 (999)-999-99-99");
    im.mask(selector);
}

function clearInput (input) {
 input.value = ''
}

addTelMask(inputTel)
// inputTel.inputmask({
//   showMaskOnHover: false,
// })
