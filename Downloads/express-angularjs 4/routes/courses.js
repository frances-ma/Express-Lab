"use strict";
const express = require("express");
const courseRouter = express.Router();
const pg = require("pg");
const pool = require("../connection");

courseRouter.get("/courses", (req, res) => {
  pool.query("SELECT * FROM courses ORDER BY id").then((result) => {
    res.send(result.rows);
  });
});


courseRouter.post("/courses", (req, res) => {
  pool.query("INSERT INTO courses(name, startdate, enddate) VALUES($1::text, $2::text, $3::text)", [req.body.name, req.body.startdate, req.body.enddate]).then(() => {
    pool.query("SELECT * FROM courses ORDER BY id").then((result) => {
      res.send(result.rows);
    });
  });
});

courseRouter.delete("/courses/:id", (req, res) => {
  pool.query("DELETE FROM courses where id=$1::int", [req.params.id]).then(() => {
    pool.query("SELECT * FROM courses").then((result) => {
      res.send(result.rows); 
    });
  });
});

courseRouter.put("/courses/:id", (req, res) => {
  pool.query("UPDATE courses SET name=$1::text, startdate=$2::text, enddate=$3::text WHERE id=$4::int", [req.body.name, req.body.startdate, req.body.enddate, req.params.id]).then(() => {
    pool.query("SELECT * FROM courses ORDER BY id").then((result) => {
      res.send(result.rows);
    });
  });
});

module.exports = courseRouter;