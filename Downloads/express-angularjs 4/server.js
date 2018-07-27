"use strict";
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const courses = require("./routes/courses");
const students = require("./routes/students.routes");

app.use(bodyParser.json());
app.use("/portal", courses);
app.use("/portal", students);
app.use(express.static(__dirname + "/public"));

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Server listening on ${port}.`);
});