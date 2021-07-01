let switchToggle = document.querySelector('.button-switch')
switchToggle.addEventListener('click', toggleTheme)

let buttons = document.querySelectorAll('button')
buttons.forEach( button => button.addEventListener('click', getContenKey))

let output = document.querySelector('.calculator__output')
let operator = null
let valueHistory = 0


function toggleTheme () {
  let main = document.querySelector('.calculator')
  main.classList.toggle('--dark-theme')
}

function getContenKey(event) {
  let value = event.target.textContent
  filterKeys(value)
}

const filterKeys = value => {
  value === '0' ? getNumber(0) : null
  value === '1' ? getNumber(1) : null
  value === '2' ? getNumber(2) : null
  value === '3' ? getNumber(3) : null
  value === '4' ? getNumber(4) : null
  value === '5' ? getNumber(5) : null
  value === '6' ? getNumber(6) : null
  value === '7' ? getNumber(7) : null
  value === '8' ? getNumber(8) : null
  value === '9' ? getNumber(9) : null
  value === '.' ? getNumber('.') : null

  value === '%' ? setOperation('%') : null
  value === '/' ? setOperation('/') : null
  value === 'x' ? setOperation('x') : null
  value === '+' ? setOperation('+') : null
  value === '-' ? setOperation('-') : null
  value === '+-' ? setOperation('+-') : null

  value === 'C' ? reset() : null
  value === '=' ? calculate() : null
}

function getNumber(value) {
  let numberValue = output.textContent
  console.log(numberValue);

  if(numberValue === '0' && numberValue.length === 1 && value !== '.') {
    output.textContent = value
  }

  if(numberValue.length <=7) {
    output.textContent = numberValue + value
  }
}

function setOperation(operator) {
  this.operator = operator
  if(output.textContent !== 0) {
    calculate()
  }
}

function reset() {
  output.textContent = '0'
}

function calculate() {
  // let valueOne = valueHistory
  // let valueTwo = output.textContent
  // let total = 0
  // console.log(valueTwo);

  // if(this.operator === '+' && output.textContent !== '') {
  //   total = valueOne + valueTwo
  // }
  // this.valueHistory = total
  // output.textContent = total

}