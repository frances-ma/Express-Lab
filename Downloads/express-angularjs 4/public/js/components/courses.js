"use strict";
const courses = {
  template: `
  <section ng-repeat="course in $ctrl.courses">
    <input ng-blur="$ctrl.updateCourse(course);" ng-model="course.name">
    <input ng-blur="$ctrl.updateCourse(course);" ng-model="course.startdate">
    <input ng-blur="$ctrl.updateCourse(course);" ng-model="course.enddate">
    <a href="" ng-click="$ctrl.deleteCourse(course.id);">Delete</a>
  </section>

  <form ng-submit="$ctrl.addCourse($ctrl.newCourse);">
    <input type="text" placeholder="Name" ng-model="$ctrl.newCourse.name">
    <input type="text" placeholder="Start Date" ng-model="$ctrl.newCourse.startdate">
    <input type="text" placeholder="End Date" ng-model="$ctrl.newCourse.enddate">
    <button>Add Course</button>
  </form>
  `,
  controller: ["CourseService", function(CourseService) {
    const vm = this;
    CourseService.getCourses().then((response) => {
      console.log(response);
      vm.courses = response.data;
    });
    vm.addCourse = (newCourse) => {
      CourseService.addCourse(newCourse).then((response) => {
        vm.courses = response.data;
      });
      vm.newCourse = {};
    };
    vm.deleteCourse = (id) => {
      CourseService.deleteCourse(id).then((response) => {
        vm.courses = response.data;
      });
    };
    vm.updateCourse = (course) => {
      CourseService.updateCourse(course).then((response) => {
        vm.courses = response.data;
      });
    };
  }]
};

angular
  .module("GCApp")
  .component("courses", courses);