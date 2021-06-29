var btns = document.querySelectorAll(".btn");
btns.forEach(btn => btn.addEventListener("click", operations))

let switchToggle = document.querySelector('.button-switch')
switchToggle.addEventListener('click', toggleTheme)

function operations (event){
  event.preventDefault()
  let key = event.target
  let action = key.dataset.action
  let value = key.textContent
  let numbers = []
  let output = document.querySelector(".calculator__output")

  if (!action) {
    numbers.push(value)
    console.log(numbers)
    output.textContent += numbers
    console.log(output);
    return numbers
  }

  if (action === 'reset') {
    output.textContent = 0
  }
}

function toggleTheme () {
  let main = document.querySelector('.calculator')
  main.classList.toggle('--dark-theme')
}
