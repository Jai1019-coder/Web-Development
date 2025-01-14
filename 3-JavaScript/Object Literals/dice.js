random = Math.floor(Math.random()*6)+1, num = prompt("Enter number you got after rolling a die");
chance = 3;
while(chance >= 0){
    if(random == num){
        console.log("You win");
        break;
    }
    else{
        chance--;
        console.log(`Wrong, now you are left with ${chance} chances`);
        num = prompt("Enter number you got after rolling a die");
    }
}
