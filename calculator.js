const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// urlencoded parses data that comes from an html form.
// extended: true allows for nested objects from post, need to explicitly declare this because it's good practice.
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res) {
    // __dirname is going to give us the filepath of the current file no matter where it's hosted.
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    // Need parseInt to convert the text into an integer.
    let num1 = parseInt(req.body.num1);
    let num2 = parseInt(req.body.num2);

    let sum = num1 + num2;

    res.send(`<h1 style="font-family: Arial;">The sum is 
                <span style="text-decoration: underline;">${sum}</span></h1>`);
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.")
});
