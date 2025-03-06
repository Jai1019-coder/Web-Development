let btn = document.querySelector("button");
let inp = document.querySelector("input");
btn.addEventListener("click",function(){
    let value = [...inp.value];
    let isValid = true;
    value.forEach(el => {
        console.log(el);
        if (!((el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) || 
        (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) || 
        el === " ")) {
        isValid = false;
    }
    })
    if (!isValid) {
        alert("Please enter a valid name");
        return;
    }

    let h2 = document.querySelector("h2");
    h2.innerText = inp.value;
});
