const figlet = require("figlet");
let input = "Priyanshi/Tanya Pagal"
figlet(input, function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});