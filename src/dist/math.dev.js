"use strict";

// let square = function(number) {
//     return number * number;
// }
var square = function square(number) {
  return number * number;
};

console.log(square(5)); // function add(a, b) {
//     return a + b;
// }

var add = function add(a, b) {
  return a + b;
}; // let add = (a, b) => a + b;


console.log(add(7, 6));

var isDrinkingAge = function isDrinkingAge(age) {
  if (age >= 21) {
    return 'You can legally drink in the USA';
  } else {
    return 'You are too Young to legally drink';
  }
};

console.log(isDrinkingAge(23));