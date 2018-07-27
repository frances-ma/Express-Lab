"use strict";
function CourseService($http) {
  const getCourses = () => {
    return $http({
      method: "GET",
      url: "/portal/courses"
    });
  };

  const updateCourse = (course) => {
    return $http({
      method: "PUT",
      url: "/portal/courses/" + course.id,
      data: course
    });
  };

  const deleteCourse = (id) => {
    return $http({
      method: "DELETE",
      url: "/portal/courses/" + id
    });
  };

  const addCourse = (newCourse) => {
    return $http({
      method: "POST",
      url: "/portal/courses",
      data: newCourse
    });
  };

  return {
    getCourses,
    addCourse,
    deleteCourse,
    updateCourse
  };
}

angular
  .module("GCApp")
  .factory("CourseService", CourseService);