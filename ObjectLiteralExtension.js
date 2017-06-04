'use strict';
var price = 5.99, quantity =10;
var productView = {
  price,
  quantity
};
console.log(productView);
/*output :
{price: 5.99,
quantity: 30} */

var price = 5.99, quantity =10;
var productView = {
  price,
  quantity
  calculateValue() { //short notation for a function
    return this.price * this.quantity
  }
};
console.log(productView.calculateValue()); //return 5.99000

var price = 5.99, quantity =10;
var productView = {
  price: 8,
  quantity: 1
  calculateValue() { //short notation for a function
    return this.price * this.quantity //this refers to context not to the object literal
  }
};
console.log(productView.calculateValue()); //return 5.99000
