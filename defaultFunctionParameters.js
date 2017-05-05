'use strict';
//one default parameter
var getproduct = function(productId = 1000) {
  console.log(productId);
};
getProduct(); //output 1000

//2 default parameters
var getProduct2 = function(productId = 100, type = 'software') {
  console.log(productId + ' , ' + type);
};
getProduct2(undefined, 'hardware');

//one default parameter and one non-default
var getTotal = function(price, tax = price * 0.07) {
  console.log(price + tax);
};

getTotal(5.00); //5.35

//variables outside the function scope
var baseTax = 0.07;
var getTotal2 = function(price, tax = price * baseTax) {
  console.log(price + tax);
};

getTotal2(5.00); //again 5.35

//accessing functions
var generateBaseTax = () => 0.07;
var getTotal3 = function(price, tax = price * generateBaseTax()) {
  console.log(price + tax);
}

getTotal3(5.00);

//arguments length
var getTotal4 = function(price, tax = 0.07) {
  console.log(arguments.length);
};
getTotal(5.00); //output 1 because 1 argument is passed to a function

//use before declaration - syntax error
var getTotal5 = function(price = adjustment, adjustment = 1.00){
    console.log(price + adjustment);
};

getTotal5(); //syntax error: use before declaration

//now without syntax error because we passed an argument to a function
var getTotal5 = function(price = adjustment, adjustment = 1.00){
    console.log(price + adjustment);
};

getTotal5(5.00); //6

//dynamic function with the default- it works with dynamic functions\
var getTotal = new Function("price=20.00", "return price;");
console.log(getTotal()); //20
