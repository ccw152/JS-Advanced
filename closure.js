
// 1. Closure: A closure is the combination of a function and the lexical environment(inner function access the parents variable) within which that function was declared.
// 2. A closure !== to a Hof, a Higher-order functions can return a value of any type – not just a Function type

// closure example
function createCounter() {
   var counter = 0;
   var myFunction = function() {
     counter = counter + 1;
     return counter;
   }
   return myFunction;   // return the function definition
 }


var count = createCounter(); // JS: how a reference to a function is returned to a variable
// step 1: whatever the 'createCounter()' return will store into 'count' variable,
// step 2: so right now the 'count' variable is refere to 'myFunction' definition
// step 3: once call count(), means call 'myFunction()',
// step 4: it will return whatever the myFunction will return, in this case, return counter value.
console.log(count());  // 1


// case 1: return an invoking function
function createCounter() {
   var counter = 0;
   var myFunction = function() {
     counter = counter + 1;
     return counter;
   }
   return myFunction();   // error: to return the invoked function
 }


var count = createCounter();
console.log(count());


// case 2: No return of parents function
function createCounter() {
   var counter = 0;
   var myFunction = function() {
     counter = counter + 1;
     return counter;
   }
   myFunction();   // error: no return, only invoking myFunction();
 }


var count = createCounter();
console.log(count());


// case 3: only put the inner function name
function createCounter() {
   let counter = 0;
   const myFunction = function() {
     counter = counter + 1;
     return counter;
   }
   myFunction;  // error: the code skip myFunction body, meaning to do nothing.
 }


var count = createCounter();
console.log(count());



// other way to explain a closure, looks like a Hof
function magic(x) {
  return function calc(x) { return x * 42; };
}

var answer = magic();
answer(1337); // 56154


// add setTimeout(function, milliseconds) inside closure


// what's more, FEM - call stack concept to explain the closure
