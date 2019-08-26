"use strict";

var arr = [1, 3, 4, 5, 6];
var newArr = arr.map(function (item) {
  return item;
});
console.log("Valores do vetor: " + newArr);
var mult = arr.map(function (item) {
  return item * 3;
});
console.log("Valores do vetor: multiplicados \npor 3: " + mult);
