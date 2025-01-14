let frm = document.querySelector("form");
frm.addEventListener("submit",function(event){
    event.preventDefault();
    let user = document.querySelector("#user");
    console.log(user.value);
})
