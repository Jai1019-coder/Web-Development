const express = require('express');
const app = express();
let port = 8080;

app.set("view engine", "ejs");

app.get('/',(req,res) => {
    res.render('index.ejs');
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});




// const express = require('express')
// const app = express()
// let port = 8080;
// app.listen(port, () =>{
//     console.log(`App is listeming on port ${port}`);
// })

// // app.use((req,res) => {
// //     console.log("Request Received");
// //     res.send("Welcome to Govind Jaiswal")
// // })
// app.get('/', (req, res) => {
//     res.send("You are on root page");
// })
// app.get("/login", (req,res) => {
//     res.send("You are on login page");
// })
// app.get("/profile" , (req, res) => {
//     res.send("you are on profile page");
// })
// app.get("/aboutus", (req, res) => {
//     res.send("You are on about us page");
// })
// app.get('/search', (req, res) => {
//     let { q } = req.query;
//     if (!q) {
//         res.send("No search query provided. Please add a query string like ?q=your_search_term");
//         return;
//     }
//     let html = `<h1>Showing results for "${q}"...</h1>`;
//     res.send(html);
//     console.log(q)
// });
// app.get("/:username/:id", (req, res) => {
//     let {username, id} = req.params;
//     let htmlString = `<h1>Welcome to @${username}!`
//     res.send(htmlString);
// })

// app.get("*", (req, res) => {
//     res.send("Fuck off");
// })
