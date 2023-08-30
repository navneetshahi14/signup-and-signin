let up = document.getElementById("Up")
let field = document.getElementById("field")
let title = document.getElementById("title")
let In = document.getElementById("In")
let sub = document.getElementById("sub")
let forget = document.getElementById("forget")


In.onclick = function(){
    field.style.maxHeight = "0"
    title.innerHTML = "SignIn"
    up.classList.add("disable")
    In.classList.add("color")
    In.classList.remove("disable")
    up.classList.remove("color")
    // sub.classList.remove("move")
    forget.classList.remove("hidden")
    forget.classList.add("text")   
    sub.classList.add("moveup")
}
up.onclick = function(){
    field.style.maxHeight = "65px"
    title.innerHTML = "SignUp"
    In.classList.add("disable")
    up.classList.add("color")
    up.classList.remove("disable")
    In.classList.remove("color")
    title.classList.add("trans")
    // sub.classList.add("move")
    forget.classList.add("hidden")
    sub.classList.remove("moveup")
}