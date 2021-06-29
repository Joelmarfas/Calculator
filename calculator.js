let output = document.querySelector('.calculator__output')
let buttons = document.querySelectorAll('.btn')
let switchToggle = document.querySelector('.button-switch')
switchToggle.addEventListener('click', toggleTheme)

buttons.forEach( button => button.addEventListener('click', operations))

function operations(event) {
  event.preventDefault()
  let key = event.target
  let action = key.dataset.operation

  if(action === 'add') addOperation()
  if(action === 'substract') substractOperation()
  if(action === 'multiply') multiplyOperation()
  if(action === 'divide') divideOperation()
  if(action === 'module') moduleOperation()
}

const addOperation = () => console.log('suma')
const substractOperation = () => console.log('resta')
const multiplyOperation = () => console.log('multiplica')
const divideOperation = () => console.log('divide')
const moduleOperation = () => console.log('modulo')

function toggleTheme () {
  let main = document.querySelector('.calculator')
  main.classList.toggle('--dark-theme')
}
