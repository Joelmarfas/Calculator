let buttons = document.querySelectorAll('button')
let output = document.querySelector('.calculator__output')
let operators = document.querySelectorAll('[data-operation]')
operators.forEach( operator => operator.addEventListener('click', addOperation))


let switchToggle = document.querySelector('.button-switch')
switchToggle.addEventListener('click', toggleTheme)

buttons.forEach( button => button.addEventListener('click', getNumbers))
let myNumber = 0

function getNumbers(event) {
  let key = event.target
  let action = key.dataset.operation
  let value = key.textContent

  if(!event.target.dataset.operation) {
    if(output.textContent === '0') {
      output.textContent = value
    } else if (output.textContent.length <=8) {
      output.textContent += value
    }
  }
  myNumber = Number(output.textContent)
  return myNumber
}

function addOperation(e) {
  let result = ''
  if(output.textContent.length <=6) {
      output.textContent += e.target.textContent
  }
  result = output.textContent
  console.log(result);
}

function toggleTheme () {
  let main = document.querySelector('.calculator')
  main.classList.toggle('--dark-theme')
}
