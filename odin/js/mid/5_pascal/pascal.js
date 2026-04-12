// const pascal = function(n) {
          
//           let arr = [1];

//           for (let i = 0; i < n-1; i++) {
//                     let crow = [1];
//                     for (let j = 1; j < arr.length; j++) {
//                               crow.push(arr[j-1] + arr[j]);
//                     }
//                     crow.push(1);
//                     arr = crow;
//           }

//           return arr;
          
// };

const pascal = function(n) {
          if (n === 1) return [1];

          let prow = pascal(n-1);
          let crow = [1];
          for (let i = 1; i < prow.length; i++) {
                    crow.push(prow[i - 1] + prow[i]);
          }

          crow.push(1);
          return crow;
}
// Do not edit below this line
module.exports = pascal;
