"use strict"; 
console.log("server present!"); 
const express = require("express"); 
const app = express(); 
const bodyParser = require("body-parser"); 
const cart = require("./routes/cart"); // should be called cart-items

app.use(bodyParser.json()); 
app.use("/options", cart); 
app.use(express.static(__dirname + "/public"));
let port = 3000; 
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
}); 
