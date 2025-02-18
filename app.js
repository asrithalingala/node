const express = require("express");
const app = express();
const port = 5000;

app.get('/practice', (req, res) => {
    res.send("practice makes man perfect");
});

app.listen(port, () => {
    console.log("Server started successfully on port " + port);
});
