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


document.addEventListener('click', () => console.log(this)); //output WIndow {...} this is not gonna be set to element that is
//getting the event

var invoice = {
    number: 123,
    process : function () {
        console.log(this);
    }
};

invoice.process(); // Object {} number: 123 }

//context of the code running
var invoice = {
    number:123,
    process: () => console.log(this)
};
invoice.process(); //output Window{...}

//another example
var invoice = {
  number: 123,
  process: function () {
      return () => console.log(this.number);
  }
};
invoice.process()(); //123 because process is the function here and that the context we are working in

//bind
var invoice = {
  number: 123,
  process: function () {
      return () => console.log(this.number);
  }
};
var newInvoice = {
    number: 456
}
invoice.process().bind(newInvoice)(); //123 because arrow function are not gonna be able to change the value of this with bind

//using call
var invoice = {
  number: 123,
  process: function () {
      return () => console.log(this.number);
  }
};
var newInvoice = {
    number: 456
}
invoice.process().call(newInvoice); //123

//arrow functions are useless with call, bind and apply


//do not this:
var getPrice = ()
    =>5.99;
console.log(typeof getPrice);
