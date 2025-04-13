let div = document.createElement("div");
let input = document.createElement("input");
input.type = "text";
input.placeholder = "username";

let btn = document.createElement("button");
btn.type = "submit";
btn.innerHTML = "Click Me";
btn.id = "btn";
div.append(input);
div.append(btn);
document.body.append(div);
let btn2 = document.querySelector("#btn");
btn2.style.backgroundColor = "blue";
btn2.style.color = "white";

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
h1.style.textDecoration = "underline";
h1.style.color = "purple";
document.body.append(h1);

let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> practice";
document.body.append(p);
