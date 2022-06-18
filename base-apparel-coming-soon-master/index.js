

const boton = document.querySelector('.btn');
const errorMessage = document.querySelector('.error-text');
const errorIcon = document.querySelector('.error');
const input = document.querySelector('.email')

console.log(input)

function showError(){
    const mailMacth = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!input.value.match(mailMacth)){
        errorIcon.style.visibility= 'visible';
        errorMessage.style.visibility='visible';
    }
}
 boton.addEventListener('click',showError)
















