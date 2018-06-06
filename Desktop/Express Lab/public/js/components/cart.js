"use strict"; 
console.log("cart component here!"); 

const cart = {
    template: `
 <h1>I'm Just Going to the Store</h1> 
 <section id="list" ng-repeat="items in $ctrl.cart">
    <input class="items" ng-blur="$ctrl.updateCart(items);" ng-model="items.product">
    <input class="items" ng-blur="$ctrl.updateCart(items);" ng-model="items.price">
    <input class="items" ng-blur="$ctrl.updateCart(items);" ng-model="items.quantity">
    <button class="delete" ng-click="$ctrl.deleteCart(items.id);">Delete</button>
  </section> 
  <form class="form" ng-submit="$ctrl.addCart($ctrl.newCart);">
    <input class="new" type="text" placeholder="Product" ng-model="$ctrl.newCart.product">
    <input class="new" type="text" placeholder="Price" ng-model="$ctrl.newCart.price">
    <input class="new" type="text" placeholder="Quantity" ng-model="$ctrl.newCart.quantity">
    <button class="add"> Add To Cart </button> 
  </form>
    `, 

    controller:["CartService", function(CartService) {
        const vm = this;
        CartService.getAllItems().then((response) => {  
            vm.cart = response.data;                        
        }); 

        vm.addCart = (newCart) => {
            CartService.addCart(newCart).then((response) => {
              vm.cart = response.data; 
            }); 
            vm.newCart = {}; 
        };

        vm.deleteCart = (id) => {
            CartService.deleteCart(id).then((response) => {
                vm.cart = response.data; 
            }); 
        };

        vm.updateCart = (cart) => {
            CartService.updateCart(cart).then((response) => {
                vm.cart = response.data; 
            }); 
        };
    }]

};
   


angular
  .module("cartApp")
  .component("cart", cart);

