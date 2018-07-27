"use strict";
const students = {
  template: `
  <section ng-repeat="student in $ctrl.students">
    <input ng-blur="$ctrl.updateStudent(student);" ng-model="student.name">
    <input ng-blur="$ctrl.updateStudent(student);" ng-model="student.course">
    <a href="" ng-click="$ctrl.deleteStudent(student.id);">Delete</a>
  </section>

  <form ng-submit="$ctrl.addStudent($ctrl.newStudent);">
    <input type="text" placeholder="Name" ng-model="$ctrl.newStudent.name">
    <input type="text" placeholder="Course Name" ng-model="$ctrl.newStudent.course">
    <button>Add Student</button>
  </form>
  `,
  controller: ["StudentService", function(StudentService) {
    const vm = this;
    StudentService.getStudents().then((response) => {
      vm.students = response.data;
    });
    vm.addStudent = (newStudent) => {
      StudentService.addStudent(newStudent).then((response) => {
        vm.students = response.data;
      });
    };
    vm.deleteStudent = (id) => {
      StudentService.deleteStudent(id).then((response) => {
        vm.students = response.data;
      });
    };
    vm.updateStudent = (student) => {
      StudentService.updateStudent(student).then((response) => {
        vm.students = response.data;
      });
    };
  }]
};

angular
  .module("GCApp")
  .component("students", students);