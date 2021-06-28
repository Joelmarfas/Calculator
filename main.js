var btns = document.querySelectorAll(".btn");
btns.forEach(btn=>btn.addEventListener("click", operations))

/*btns.addEventListener("click", operations);*/

function operations (event){
    let value = event.target.value
    event.preventDefault()
    console.log(value)
}
