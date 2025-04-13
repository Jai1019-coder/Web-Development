const express = require("express");
const app = express();
let port = 8080;

app.set("view engine", "ejs");
app.get('/', (req,res) => {
    res.render("index.ejs");
})
app.listen(port, () => {
    console.log(`Listening to request on port ${port}`);
});
app.get("/rolldice", (req,res) => {
    diceValue = Math.floor(Math.random()*6 + 1);
    res.render("rolldice.ejs", {num : diceValue});
})
