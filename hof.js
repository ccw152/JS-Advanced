// Highter-order functions:
// Type 1.Take a function as an input (argument) - Callback function
// Type 2.Return a function as an output


// ex1: type 1

element.addEventListener('click' , function() {
  console.log('event clicked!');
});


// ex2: type 2

var add = function(num1) {
  var num1 = num;

  return function sum(num2) {
    return num1 + num2;
  };
}

// ex3: Callback: A callback function is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of routine or action.

var ifElse = function(condition, isTrue, isFalse){ // can't put () beside -isTrue/isFalse parameter
                                       // parameter is un-initializied until passing as an argument.

  if(condition){
    return isTrue();    // must return an invoking function
  } else {
    return isFalse();
  }

};

ifElse(true,

 function(){ console.log(true);},

 function(){ console.log(false);}

);

// ex4 : alternative way to pass a function as argument

var ifElse = function(condition, isTrue, isFalse){
  if(condition){
    return isTrue();
  } else {
    return isFalse();
  }
};

var logTrue = function(){ console.log(true); };
var logFalse = function(){ console.log(false); };

ifElse(true,logTrue,logFalse);  // pass a function definition


// ex5: passing argument

var increment = function(n){ return n + 1; };

var square = function(n){ return n*n; };

var doMathSoIDontHaveTo = function(n, func) {
  return func(n);
}

doMathSoIDontHaveTo(5, square); // 25

doMathSoIDontHaveTo(4, increment); // 5


// jQuery
element.addEventListener('click' , function(event) {
  event.preventDefault();
  console.log('event clicked!');
});
