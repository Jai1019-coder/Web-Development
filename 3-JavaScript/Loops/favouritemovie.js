let favmovie = "3 idiots";
let guessmovie = prompt("Guess my favourite movie");
while (favmovie!=guessmovie && guessmovie!="quite") {
    guessmovie = prompt("Wrong guess! Try again");
}
if (favmovie == guessmovie) {
    console.log("Congrats");
}
else if (guessmovie == "quite") {
    console.log("Visit Again!");
}