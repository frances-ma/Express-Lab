"use strict";
const pg = require("pg");

const pool = new pg.Pool({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "Key-Join Demos",
  ssl: false
});

module.exports = pool;