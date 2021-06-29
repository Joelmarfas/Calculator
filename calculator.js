let output = document.querySelector('.calculator__output')
let buttons = document.querySelectorAll('.btn')
let switchToggle = document.querySelector('.button-switch')
switchToggle.addEventListener('click', toggleTheme)

buttons.forEach( button => button.addEventListener('click', operations))

function operations(event) {
  let key = event.target
  let action = key.dataset.operation
  let value = key.textContent
  let outputNum = output.textContent
  let firstValue = 0
  let secondValue = []

  if(!action) {
    if(outputNum === '0') {
      output.textContent = value
    } else if (outputNum.length <= 6) {
      firstValue = outputNum + value
      output.textContent = firstValue
    }
    console.log(typeof Number(firstValue))
    return firstValue
  }

  if(action === '+') addOperation(Number(firstValue), Number(firstValue))
  // if(action === '-') substractOperation(a, b)
  // if(action === '*') multiplyOperation(a, b)
  // if(action === '/') divideOperation(a, b)
  // if(action === '%') moduleOperation(a, b)

}

const addOperation = (v1, v2) => console.log(eval(v1 + v2))
const substractOperation = (v1, v2) => console.log('-')
const multiplyOperation = (v1, v2) => console.log('*')
const divideOperation = (v1, v2) => console.log('/')
const moduleOperation = (v1, v2) => console.log('%')

function toggleTheme () {
  let main = document.querySelector('.calculator')
  main.classList.toggle('--dark-theme')
}
