//variables
let listMessage = [
  'Errou!',
  'Não Desista!',
  'Você consegue!',
  'Continue tentando',
  'Foi Quase!',
  'Passou Perto',
  'Quase Conseguindo',
  'Vamos continuar!',
  'Foi por pouco!',
  'Na Trave!'
]
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const randomNumber = Math.round(Math.random() * 10)
const btnTry = document.getElementById('btnTry')
const btnReset = document.getElementById('btnReset')
let xAttempts = 1
let  phraseError = ''

//Events
btnReset.addEventListener('click', resetScreen)
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleResetEnter)

//functions



function resetScreen() {
 
    window.location.reload(true);
  
}

function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.getElementById('inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add('hide')
    screen1.classList.remove('text-error')
    screen2.classList.remove('hide')
    

    document.querySelector(
      '.screen2 h2'
    ).innerText = `Você acertou na ${xAttempts}ª vez`
  } else {
    let phraseError =
      listMessage[Math.floor(Math.random() * listMessage.length)]

    document.querySelector('.text-error').textContent = phraseError
    
  }

  console.log(randomNumber) // find out the random number

  inputNumber.value = '' //

 

  xAttempts++
}

function handleResetClick() {
  
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
  xAttempts = 1
  window.location.reload(true);

  
  
}

function handleResetEnter(e) {
  
  if (e.key == 'Enter') {
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
    
    
  }
}
