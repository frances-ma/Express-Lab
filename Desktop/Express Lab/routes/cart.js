"use strict"; 
console.log("cart route present!"); 

const express = require("express"); 
let cartRouter = express.Router(); 
const pg = require("pg"); 
const pool = require("../pg-connection-pool");

cartRouter.get("/cart", (req,res) => {
    pool.query("SELECT * FROM shopping_cart ORDER BY id").then((result) => {
        res.send(result.rows); 
    }); 
});

cartRouter.post("/cart", (req,res) => {
    pool.query("INSERT INTO shopping_cart(product, price, quantity) VALUES($1::text, $2::int, $3::int)", [req.body.product, req.body.price, req.body.quantity]).then(() => {
        pool.query("SELECT * FROM shopping_cart ORDER BY id").then((result) => {
          res.send(result.rows); 
        }); 
     }); 
  });


cartRouter.delete("/cart/:id", (req,res) => { // for loop runs with delete request 
    pool.query("DELETE FROM shopping_cart WHERE id=$1::int",[req.params.id]).then((reponse) => {
        pool.query("SELECT * FROM shopping_cart ORDER BY id").then((result) => {
            res.send(result.rows); 
        });
     });
  }); 

cartRouter.put("/cart/:id", (req,res) => {
    pool.query("UPDATE shopping_cart SET product=$1::text, price=$2::int, quantity=$3::int WHERE id=$4::int",[req.body.product, req.body.price, req.body.quantity, req.params.id])
    .then(() => {
        pool.query("SELECT * FROM shopping_cart ORDER by id").then((result) => {
            res.send(result.rows); 
        });
    });
}); 

//Export the router object 
module.exports = cartRouter; 
/* 
Start your server out with a hard-coded array of cart items, 
each including id, product,
price, and quantity.
*/ 