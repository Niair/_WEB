const reverseString = function(str) {
          let val = "";

          for (let i = str.length - 1; i >= 0; i--) {
                    val += str.charAt(i);
          }
          return val;
};

// Do not edit below this line
module.exports = reverseString;