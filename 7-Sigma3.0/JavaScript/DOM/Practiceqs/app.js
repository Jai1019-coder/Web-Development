let para = document.createElement("p");
para.innerText = "hey! I'm red";
para.style.color = "red";
document.body.append(para);

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3";
h3.style.color = "blue";
document.body.append(h3);

let div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.border = "1px solid black";
let h1 = document.createElement('h1');
h1.innerText = "I'm in a div";
div.append(h1);
let p = document.createElement('p');
p.innerHTML = "Me Too!";
div.append(p);
document.body.append(div);