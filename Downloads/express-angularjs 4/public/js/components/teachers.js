"use strict";
const teachers = {
  // TODO: Create a template to display all the students from this class
  template: `
  <p>teachers component here</p>
  `,
  controller: ["TeacherService", function(TeacherService) {
    const vm = this;
    // TODO: Call the StudentService to retrieve the list of the students
  }]
};

angular
  .module("GCApp")
  .component("teachers", teachers);