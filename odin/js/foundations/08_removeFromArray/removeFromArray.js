const removeFromArray = function(arr, ...val) {
          
          return arr.filter(item => !val.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;