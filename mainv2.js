let buttons = document.querySelectorAll('button')
let output = document.querySelector('.calculator__output')

let switchToggle = document.querySelector('.button-switch')
switchToggle.addEventListener('click', toggleTheme)

buttons.forEach( button => button.addEventListener('click', getNumbers))
let myNumber = 0

function getNumbers(event) {
  let key = event.target
  let action = key.dataset.operation
  let value = key.textContent

  if(!action) {
    if(output.textContent === '0') {
      output.textContent = value
    } else if (output.textContent.length <=5) {
      output.textContent += value
    }
  }
  myNumber = Number(output.textContent)
  return myNumber
}


function toggleTheme () {
  let main = document.querySelector('.calculator')
  main.classList.toggle('--dark-theme')
}
