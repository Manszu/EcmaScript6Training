'use strict';
//rest set arguments to an array
var showCategories = function (productId, ...categories){
  console.log(categories instanceof Array);
}
showCategories(123, 'search', 'advertising'); //true

//example of output with Array
var showCategories2 = function (productId, ...categories){
  console.log(categories);
}
showCategories2(123, 'search', 'advertising'); //true

//no arguments for rest
var showCategories3 = function(productId, ...categories){
  console.log(categories);
};
showCategories3(123); //empty array is an output []

//number
var showCategories4 = function (productId, ...categories){
};
console.log(showCategories4.length);//output is 1, rest parameters are ignored

var showCategories5 = function (productId, ...categories){
  console.log(arguments.length);
};

showCategories5(123, 'search', 'advertising'); //output is 3

//use in dynamic function
var showCategories6= new Function("...categories", "return categories;");
console.log(showCategories6('search', 'advertising'));


//Spread operator - converts array into list of parameters
var prices = [12 , 20, 18];
var maxPrice = Math.max(...prices);
console.log(maxPrice); //20


//creating new array with spread operator
var prices2 = [12, 20 ,18];
var newPriceArray = [...prices2];
console.log(newPriceArray); //output is array [12,20,18]

//spread out empty values
var newPriceArray = Array(...[,,]);
console.log(newPriceArray); //there is nothing after the last coma so the output will be [undefined, undefined]

//instead of using Array or new Array
var newPriceArray2 = [...[,,]];
console.log(newPriceArray2); //[undefined,undefined]

//using in string
var maxCode = Math.max(..."43210");
console.log(maxCode);

//using in array with strings
var codeArray = ["A", .."BCD", "E"];
console.log(codeArray); // ["A", "B", "C", "D", "E"]
