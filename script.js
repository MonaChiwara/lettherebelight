
const btnOn = document.querySelector('#btnOn')
const btnOff = document.querySelector('#btnOff')
const lightOn = document.querySelector('#lightOn')
const lightOff = document.querySelector('#lightOff')

btnOn.addEventListener('click', bulbOn)
btnOff.addEventListener('click', bulbOff)

function bulbOn(){
    lightOff.classList.add('hide')
    lightOn.classList.toggle('hide')
    console.log('im trying my best')
   
}

function bulbOff(){
    lightOn.classList.add('hide')
    lightOff.classList.toggle('hide')
    console.log('please work')
   
}
