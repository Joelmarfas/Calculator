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
  let firstValue = []

  let secondValue = []

  if(!action) {
    if(outputNum === '0') {
      output.textContent = value
    } else if (outputNum.length <= 5) {
      output.textContent = outputNum + value
      firstValue.push(parseInt(output.textContent))
    }

    console.log(firstValue)

    return firstValue
  }

  if(action === 'add') addOperation(firstValue[0], firstValue[0])
  // if(action === '-') substractOperation(a, b)
  // if(action === '*') multiplyOperation(a, b)
  // if(action === '/') divideOperation(a, b)
  // if(action === '%') moduleOperation(a, b)

}

function addOperation(v1, v2) {
  console.log(v1 + v2)
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
