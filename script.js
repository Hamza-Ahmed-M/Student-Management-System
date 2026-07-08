let x=document.getElementById("paragraph1")
console.dir(x)

let button=document.getElementById("loginbutton")
button.addEventListener("click", changecolor)

function changecolor(){
    let y=document.getElementsByClassName("first")
    y[0].style.color="purple";
    y[1].style.color="purple";
}