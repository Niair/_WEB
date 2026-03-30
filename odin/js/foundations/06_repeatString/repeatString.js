const repeatString = function(str, num) {
          
          if (num < 0) { return "ERROR" };
          
          let val = "";
          
          for (let i = 0; i < num; i++) {
                    val += str;
          }
          return val;
};

// Do not edit below this line
module.exports = repeatString;