const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(arr) {
	if (arr.length === 0) {
                    return 0;
          }
          let sum = 0;
          for (let i = 0; i < arr.length; i++) {
                    sum += arr[i];
          }
          return sum;
};

const multiply = function(arr) {
          if (arr.length === 0) {
                    return 0;
          }
          let mul = 1;
          for (let i = 0; i < arr.length; i++) {
                    mul *= arr[i];
          }
          return mul;
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(val) {
	if (val === 0) {
                    return 1;
          }
          let fact = 1;
          for (let i = 1; i < val + 1; i++) {
                    fact *= i;
          }
          return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};