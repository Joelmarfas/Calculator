var btns = document.querySelectorAll(".btn");
btns.forEach(btn => btn.addEventListener("click", operations))

function operations (event){
  event.preventDefault()
  let value = event.target.value
  let output = document.querySelector(".output")
  let span = document.createElement("span")

  span.textContent = value
  output.append(span)
  
  if (value === 'reset') {
    while (output.firstChild) {
      output.removeChild(output.lastChild)
    }
  }
}
