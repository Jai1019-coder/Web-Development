let inp = document.querySelector("#input");
let btn = document.querySelector("#add");
let ulist = document.querySelector("#list");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");
    item.append(delbtn);
    ulist.appendChild(item);
    inp.value="";
})
// Event Flow Visual:
/*
DOM Structure:          Event Flow:
ul (#list)             3. ul listener catches event ⬆
    └── li               2. Event bubbles up        ⬆
        └── button       1. Click happens here      ✓
*/
ulist.addEventListener('click',function(event){
    if(event.target.nodeName === "BUTTON"){
        event.target.parentElement.remove();
    }
});
    
    