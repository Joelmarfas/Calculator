let output = document.querySelector(".calculator__output")

var btns = document.querySelectorAll(".btn")
btns.forEach(btn => btn.addEventListener("click", operations))

let switchToggle = document.querySelector('.button-switch')
switchToggle.addEventListener('click', toggleTheme)

function operations (event){
  event.preventDefault()
  let key = event.target
  let action = key.dataset.operation
  let value = key.textContent //keyContent
  let outputNum = output.textContent

  btns.forEach(item => item.classList.remove('--is-depressed'))
  let previousKeyType = key.dataset.previousKeyType

  if (!action) {
    if(outputNum === '0' || previousKeyType === 'operator') {
      output.textContent = value
    } else {
      output.textContent = outputNum + value
    }
  }

  if (action === 'reset') {
    output.textContent = 0
  }

  if(
    action === 'add' ||
    action === 'substract' ||
    action === 'multiply' ||
    action === 'divide' ||
    action === 'module'
    ) {
      key.classList.add('--is-depressed')
      key.dataset.firstValue = outputNum
      key.dataset.operator = value

      console.log(key.dataset.operator);

      key.dataset.previousKeyType = 'operator'
      
      if(key.dataset.previousKeyType === 'operator') {
        output.textContent = ''
      }
    }

    if(action === 'decimal') {
      if(!outputNum.includes('.')) {
        output.textContent = outputNum + '.'
      }
    }

    if(action === 'calculate') {
      let firstValue = key.dataset.firstValue
      let operator = key.dataset.operator
      let secondValue = outputNum

      console.log(operator);

      output.textContent = calculate(firstValue, secondValue)
    }

    if(action === 'int') { console.log('negativo')}
}

function calculate(value1, value2) {
  let result = ''

  result= parseFloat(value1) + parseFloat(value2)

  return result
}

function toggleTheme () {
  let main = document.querySelector('.calculator')
  main.classList.toggle('--dark-theme')
}
