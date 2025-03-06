
let gameSeq = [];
let userSeq = [];
let btnslst = ["btn1","btn2","btn3","btn4"];
let started = false;
let level = 0;
let score = 0;

document.addEventListener("keypress",function(){
    if(!started){
        console.log("Game Started");
        started = true;
        levelup();
        randFlash();
    }
})
function levelup(){
    userSeq=[];
    level++;
    document.querySelector("h2").innerText = "Level "+level;
}
function randFlash(){
    let randIdx = Math.floor(Math.random()*4);
    let randBtn = document.querySelector(`.${btnslst[randIdx]}`);
    randBtn.classList.add("flash");
    setTimeout(function(){
        randBtn.classList.remove("flash");
    },100);
    gameSeq.push(randBtn);
    console.log(gameSeq);
}
let allBtns = document.querySelectorAll("button");
allBtns.forEach(btn=>{
    btn.addEventListener("click",function() {
        // console.log(`${btn} is clicked`);
        userSeq.push(btn);
        console.log(userSeq);
        checkSequence(userSeq.length-1);
    })
})
function checkSequence(idx){
    // console.log(`This is Level ${level}`);
    if(userSeq[idx] === gameSeq[idx]){
        console.log(`Same value`);
        if(userSeq.length === gameSeq.length){
            score++;
            levelup();
            setTimeout(randFlash,1000);
        }
    }else{
        document.querySelector("h2").innerText = "Game Over! Press any key to restart.";
        restartGame();
    }
}

function restartGame(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    score = 0;
    started = false;
    // document.querySelector("h2").innerText = "Press any key to start.";
    console.log("Game has been reset.");
}
