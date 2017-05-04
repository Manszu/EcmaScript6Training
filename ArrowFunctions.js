//arrow functions without input
'use strict';
var getPrice = () => 5.99;
console.log(typeof getPrice); //function
console.log(getPrice()); //5.99


//arrow functions with  1 input
var getPrice = count => count * 4.00;
console.log(getPrice(2)); //output 8

//arrow function with 2 inputs
var getPrice = (count, tax) => count * 4.00 * (1 + tax);
console.log(getPrice(2, .07));


//another example of arrow function
var getPrice = (count,tax) => {
    var price = count * 4.00;
    price *= (1 + tax);
    return price;
}

console.log(getPrice(2, .07));

//use with this
document.addEventListener('click', function() {
  console.log(this); //output:  #document
});
