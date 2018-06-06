"use strict";
console.log("cart config present!"); 
angular
  .module("cartApp")
  .config(($routeProvider) => {
    $routeProvider
      .when("/cart", {
        template: `<cart></cart>`
    })
}); 


