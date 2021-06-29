let output = document.querySelector(".calculator__output")

var btns = document.querySelectorAll(".btn")
btns.forEach(btn => btn.addEventListener("click", operations))

let switchToggle = document.querySelector('.button-switch')
switchToggle.addEventListener('click', toggleTheme)

function operations (event){
  event.preventDefault()
  let key = event.target
  let action = key.dataset.operation
  let value = key.textContent
  let outputNum = output.textContent
  // let numbers = []

  if (!action) {
    console.log(outputNum);
    if(outputNum === '0') {
      output.textContent = value
    } else {
      output.textContent = outputNum + value
    }

    console.log('es un numero');
    // numbers.push(value)
    // console.log(numbers)
    // output.textContent += numbers
    // console.log(output);
    // return numbers
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
      console.log('es un simbolo de operaciones');
    }

    if(action === 'decimal') {
      if(!outputNum.includes('.')) {
        output.textContent = outputNum + '.'
      }
      console.log(outputNum)
    }
    if(action === 'reset' ) { console.log('resetea') }
    if(action === 'calculate') { console.log('haz el calculo')}
    if(action === 'int') { console.log('negativo');}
}

function toggleTheme () {
  let main = document.querySelector('.calculator')
  main.classList.toggle('--dark-theme')
}
