let para = document.createElement('p');
para.innerText = "Hey I'm red!";
document.querySelector('body').append(para);
para.classList.add('red');

let heading3 = document.createElement('h3');
heading3.innerText = "Hey I'm blue h3";
document.querySelector('body').prepend(heading3);
heading3.classList.add('blue');
let div = document.createElement('div');
let h1 = document.createElement('h1');
h1.innerText = "I'm in a div";
let para2 = document.createElement('p');
para2.innerText = "Me Too!"
document.querySelector('body').prepend(div);
document.querySelector('div').prepend(h1, para2);
div.classList.add('box');

let input = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = "Click me";
document.querySelector('body').append(input);
document.querySelector('body').append(btn);
input.setAttribute('placeholder',"username");
btn.setAttribute("id","btn");
document.querySelector('#btn').classList.add('bttn');
let heading1 = document.createElement('h1');
heading1.innerText = "DOM Practice";
heading1.style.textDecoration = 'underline';
heading1.style.color = 'purple';
document.querySelector('body').append(heading1);
let para3 = document.createElement('p');
para3.innerHTML = "Apna college <strong>Delta</strong> practice";
document.querySelector('body').append(para3);

