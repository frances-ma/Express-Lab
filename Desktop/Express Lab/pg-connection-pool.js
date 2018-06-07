"use strict"; 
// step 1: require pg 
const pg = require("pg"); 

// step 2: create pool 
const pool = new pg.Pool({
    user: "postgres", 
    password: "yue", 
    host: "localhost", 
    port: 5342, 
    database: "ExpressShopDB", 
    ssl: false
}); 


module.exports = pool; 

