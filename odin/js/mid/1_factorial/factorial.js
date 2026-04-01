const factorial = function(val) {
          if (typeof val != 'number' || !Number.isInteger(val) || val < 0) {
                    return undefined;
          }
          if (val === 0 || val === 1) {
                    return 1;
          }
          return val * factorial(val - 1);
};

// Do not edit below this line
module.exports = factorial;