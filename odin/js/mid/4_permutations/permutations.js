const permutations = function(arr) {
          let result = [];

          function backtrack(start) {
                    if (start == arr.length) {
                              result.push([...arr]);
                              return;
                    }

                    for (let i = start; i < arr.length; i++) {
                              [arr[start], arr[i]] = [arr[i], arr[start]];

                              backtrack(start + 1);

                              [arr[start], arr[i]] = [arr[i], arr[start]];
                    }
          }

          backtrack(0);
          return result;
};
  
// Do not edit below this line
module.exports = permutations;