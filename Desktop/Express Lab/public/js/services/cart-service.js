"use strict"; 
console.log("cartService present!"); 

function CartService($http) {
    const getAllItems = () => {   // do not need to run .then again since this uses one router
        return $http({
          method: "GET", 
          url:"/options/cart"
        }); 
    }; 

    const addCart = (newCart) => {
        return $http({
          method: "POST", 
          url:"/options/cart", 
          data: newCart
        }); 
      };

    const deleteCart = (id) => {
        console.log(id); 
        console.log(typeof id); 
        return $http({
            method: "DELETE", 
            url:"/options/cart/" + id
        });
    };

    const updateCart = (cart) => {
        console.log(cart); 
        return $http({
          method: "PUT", 
          url:"/options/cart/" + cart.id,
          data: cart    // the new updated object "course"
        }); 
    }


    return{
        getAllItems, 
        addCart, 
        deleteCart, 
        updateCart
    }; 
} 

angular
  .module("cartApp")
  .factory("CartService", CartService);