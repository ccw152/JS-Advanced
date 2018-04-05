
// 1. Closure: A closure is the combination of a function and the lexical environment(inner function access the parents variable) within which that function was declared.
// 2. A closure !== to a Hof, a Higher-order functions can return a value of any type – not just a Function type

// 1. closure example
function createCounter() {
   var counter = 0;
   var myFunction = function() {
     counter = counter + 1;
     return counter;
   }
   return myFunction;   // return the function definition
 }


var count = createCounter(); // count is a closure, because it hold a reference to access the environment
console.log(count());  // 1

// JS: how a reference to a function is returned to a variable
// step 1: whatever the 'createCounter()' return will store into 'count' variable,
// step 2: so right now the 'count' variable is refere to 'myFunction' definition
// step 3: once call count(), means call 'myFunction()',
// step 4: it will return whatever the myFunction will return, in this case, return counter value.



// misconception case 1: return an invoking function
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


// misconception case 2: No return of parents function
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


// misconception case 3: only put the inner function name
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



// 2. other way to explain a closure: return a function type only  , looks like a Hof, but not a Hof
function magic(x) {
  return function calc(x) { return x * 42; };
}

var answer = magic();
answer(1337); // 56154




// 3. add setTimeout(function, milliseconds) inside closure

var closureAlert = function() {
  var x = 'I am a string stuck in a closure!';

  var alerter = function() {
    alert(x);
  };

  setTimeout(alerter, 1000);    // Hint: misconception, it is asynchronous, the parents function
                                // don't pause 1 second

  console.log('will still run right away');

}

closureAlert();



// 4. passing the parameter into the closure function: functional programming

var add = function(num) {
  var num1 = num;
  var addToNum1 = function(num2) {
    return num1 + num2;
  }
  return addToNum1;
}

var add5 = add(5);
add5(2);      // 7


// 5. closure object

function counter() {
  var n = 0;
  return {
    count: function() {return ++n; },
    reset: function() {return n = 0; }
  };
}

var myCounter = counter();
myCounter.count(); // 1
myCounter.count(); // 2


// 6. Closure Module Pattern
var makeStopwatch = function() {
  console.log('Initialized');
  var elapsed = 0;
  console.log(elapsed);

  var stopwatch = function() {
    console.log('stopwatch');
    return elapsed;
  };

  var increase = function() { elapsed++; };
  setInterval(increase, 1000);    // works like setTimeout()

  return stopwatch;
}

var x = makeStopwatch();
x();

// the 'initialized' and elapsed = 0, only run once for the first time call

// what's more, FEM - call stack concept to explain the closure
