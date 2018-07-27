"use strict";

angular
  .module("GCApp")
  .config(($routeProvider) => {
    $routeProvider
      .when("/courses", {
        template: `<courses></courses>`
      })
      .when("/students", {
        template: `<students></students>`
      })
      .when("/teachers", {
        template: `<teachers></teachers>`
      })
  });