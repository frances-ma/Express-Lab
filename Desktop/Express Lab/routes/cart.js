"use strict"; 
console.log("cart route present!"); 

const express = require("express"); 
let cartRouter = express.Router(); 

const cartItems = [
    {
        product: "Broccoli", 
        price: "2.50", 
        quantity: "4", 
        id: 0 
    }, 

    {
        product: "Radish", 
        price: "1.50", 
        quantity: "6", 
        id: 1 
    }, 

    {
        product: "Eggplant", 
        price: "3.00", 
        quantity: "2", 
        id: 2  
    }, 

    {
        product: "Tofu", 
        price: "3.50", 
        quantity: "4", 
        id: 3  
    }, 
 ]; 

let idCount = 4; 

cartRouter.get("/cart", (req,res) => {
    res.send(cartItems); 
}); 

cartRouter.post("/cart", (req,res) => {
    console.log(req.body); 
    cartItems.push({    // push method pushes object into the array of cartItems and sends to our service (the front-end)
      product: req.body.product,  // what you send from server to front end 
      price: req.body.price, 
      quantity: req.body.quantity, 
      id: idCount++
    }); 
    res.send(cartItems); 
  });


cartRouter.delete("/cart/:id", (req,res) => { // for loop runs with delete request 
    console.log(req.body); 
    console.log(req.params.id); 
    for(let cart of cartItems) { // loops through our array of cartItems 
      if(cart.id == req.params.id) { //.params = anything you are attaching to the url 
        cartItems.splice(cartItems.indexOf(cart), 1); // 1 = how many elements we want to remove 
      }
    }
    res.send(cartItems); // re-sends our updated array minus one object 
  }); 

cartRouter.put("/cart/:id", (req,res) => {
    console.log(req.body); 
    console.log(req.params.id); 
    for(let cart of cartItems) { 
        if(cart.id == req.params.id) { 
          cartItems.splice(cartItems.indexOf(cart), 1, {
            product: req.body.product,  
            price: req.body.price, 
            quantity: req.body.quantity,
            id: cart.id
        }); 
     }
  }
  res.send(cartItems); 
}); 

//Export the router object 
module.exports = cartRouter; 
/* 
Start your server out with a hard-coded array of cart items, 
each including id, product,
price, and quantity.
*/ 