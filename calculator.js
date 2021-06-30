let output = document.querySelector('.calculator__output')
let buttons = document.querySelectorAll('.btn')
let add = document.querySelector('[data-operation="add"]').addEventListener('click', addOperations)

let switchToggle = document.querySelector('.button-switch')
switchToggle.addEventListener('click', toggleTheme)

buttons.forEach( button => button.addEventListener('click', operations))

let firstValue = 0
let secondValue = 0
let operator = ''

function operations(event) {
  let key = event.target
  let action = key.dataset.operation
  let value = key.textContent //value screen
  let outputNum = output.textContent

  if(!action) {
    if(outputNum === '0') {
      output.textContent = value
    } else if (outputNum.length <= 5) {
      output.textContent += value
    }
  }

  if (action === 'reset') output.textContent = 0

  if(action === 'decimal') {
    if(!outputNum.includes('.')) {
      output.textContent = outputNum + '.'
    }
  }
  firstValue = Number(output.textContent)
  // if(action === 'calculate') {
  //   firstValue = Number(output.textContent)
  //   let operator = 'calculate'
  //   let secondValue = outputNum

  //   console.log(operator);

  //   output.textContent = calculate(firstValue, secondValue)
  // }

  if(action === 'add') {
    output.textContent += value
    output.textContent = ''
    secondValue = Number(output.textContent)
    console.log(secondValue);
    addOperation(firstValue, secondValue)
  }
  // if(action === 'add') addOperation(firstValue, 1)
  // if(action === '-') substractOperation(a, b)
  // if(action === '*') multiplyOperation(a, b)
  // if(action === '/') divideOperation(a, b)
  // if(action === '%') moduleOperation(a, b)
}

function addOperations(v1, v2) {
  result = 'hello'
  console.log(result);
  return result
}

// const addOperation = (v1, v2) => console.log(v1 + v2)
// const substractOperation = (v1, v2) => console.log('-')
// const multiplyOperation = (v1, v2) => console.log('*')
// const divideOperation = (v1, v2) => console.log('/')
// const moduleOperation = (v1, v2) => console.log('%')

function toggleTheme () {
  let main = document.querySelector('.calculator')
  main.classList.toggle('--dark-theme')
}
