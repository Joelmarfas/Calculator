var btn = document.querySelector(".btn");
btn.addEventListener("click", operations);

function operations (event){
    event.preventDefault()
    console.log("Hi World")
}
