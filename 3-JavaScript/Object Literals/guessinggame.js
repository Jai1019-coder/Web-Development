let max = prompt("Enter maximum limit");
num = Math.floor(Math.random()*max)+1;
guessnum = prompt(`Enter number to guess between 1 to ${max}`);
while(guessnum != num){
    if (guessnum < num) {
        console.log("Number is small");
    }
    else if( guessnum > num){
        console.log("Number is large")    
    }
    guessnum = prompt(`Enter number to guess between 1 to ${max}`);
    if (guessnum == "Quite" || guessnum == "quite") {
        console.log("Visit again");
        break;
    }
}
if(guessnum == num){
    console.log("Congrats")
}