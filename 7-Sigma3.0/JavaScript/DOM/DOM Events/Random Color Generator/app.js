let btn = document.querySelector("#btn");
btn.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    h3.innerText = randomColor();
    let div = document.querySelector(".box");
    div.style.backgroundColor = randomColor();
    console.log("Changed Color");
})
function randomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    return `rgb(${red},${green},${blue})`;
}