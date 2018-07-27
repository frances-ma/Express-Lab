"use strict";
function StudentService($http) {
  const getStudents = () => {
    return $http({
      method: "GET",
      url: "/portal/students"
    });
  };

  const addStudent = (newStudent) => {
    return $http({
      method: "POST",
      url: "/portal/students",
      data: newStudent
    });
  };

  const deleteStudent = (id) => {
    return $http({
      method: "DELETE",
      url: "/portal/students/" + id
    });
  };

  const updateStudent = (student) => {
    // student = { id: 4, name: "adam", course: "front-end"}
    return $http({
      method: "PUT",
      url: "/portal/students/" + student.id,
      data: student
    });
  };


  return {
    getStudents,
    addStudent,
    deleteStudent,
    updateStudent
  };
}

angular
  .module("GCApp")
  .factory("StudentService", StudentService);