const express = require("express");

const app = express();

app.get("/", function(req, res) {
    // __dirname is going to give us the filepath of the current file no matter where it's hosted.
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.")
});
