"use strict";
const express = require("express");
const studentRouter = express.Router();
const pg = require("pg");
const pool = require("../connection");

studentRouter.get("/students", (req, res) => {
  pool.query("SELECT * FROM students ORDER BY id").then((result) => {
    res.send(result.rows);
  });
});

studentRouter.post("/students", (req, res) => {
  pool.query("INSERT INTO students(name, course) VALUES($1::text, $2::text)", [req.body.name, req.body.course]).then(() => {
    pool.query("SELECT * FROM students ORDER BY id").then((result) => {
      res.send(result.rows);
    });
  });
});

studentRouter.delete("/students/:id", (req, res) => {
  pool.query("DELETE FROM students WHERE id=$1::int", [req.params.id]).then(() => {
    pool.query("SELECT * FROM students ORDER BY id").then((result) => {
      res.send(result.rows);
    });
  });
});

studentRouter.put("/students/:id", (req, res) => {
  pool.query("UPDATE students SET name=$1::text, course=$2::text WHERE id=$3::int", [req.body.name, req.body.course, req.params.id]).then(() => {
    pool.query("SELECT * FROM students ORDER BY id").then((result) => {
      res.send(result.rows);
    });
  });
});

module.exports = studentRouter;