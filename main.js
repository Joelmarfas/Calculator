var btns = document.querySelectorAll(".btn");
btns.forEach(btn=>btn.addEventListener("click", operations))

function operations (event){
    let value = event.target.value
    event.preventDefault()
    

    let output = document.querySelector(".output")
    let span = document.createElement("span")
    span.textContent = value
    output.append(span)
    
    console.log(span)
}
