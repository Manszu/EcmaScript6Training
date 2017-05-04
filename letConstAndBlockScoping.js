'use string';
console.log(productId); //undefined, because Declarations NOT initializations are hoisted to top
var productId = 12;
//let
console.log(productId2); //reference error : productId is not defined
let productId2 = 12; // let is not hoisted

//block Scoping
let productId3 = 12; {
  let productId3 = 2000;
}
console.log(productId3); //output 12


{
  let prId4 = 200;
}
console.log(prId4); //reference error: productId is not defined


//example with function
function updateProductId() {
  productId4 = 12;
}
let productId4 = null;
updateProductId();
console.log(productId4);


//let in for loops
let fL = 23;
for (let fL = 0; fL < 10; fL++) {}
console.log(productId); // 42 for loop terminate the fL inside for loops


//example with array
let updateFunctions = [];
for (var i = 0; i < 2; i++) {
  updateFunctions.push(function() {
    return i;
  });
}
console.log(updateFunctions[0]()); //return 2

//used let in for
let updateFunctions2 = [];
for (let i = 0; i < 2; i++) {
  updateFunctions2.push(function() {
    return i;
  });
}
console.log(updateFunctions2[0]()); //returns 0


//const
const MARKUP_PCT = 100; //const variables muse be initialized
// MARCUP_PCT=10; //cannot do this
console.log(MARKUP_PCT);


//const as a scope variables
const MARKUP = 100;
if (MARKUP_PCT > 0) {
  const MARKUP = 10;
}
console.log(MARKUP); //returns 100
