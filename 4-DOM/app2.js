let btns = document.querySelectorAll('button');
function sayHello(){
    console.log("Hello");
}
function sayName(){
    console.log("Chadarmod");
}
for(btn of btns){
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function(){
        console.log("You double licked me");
    })
}
