const totalIntegers = function(list) {
          if (typeof list !== "object" || list === null) {
                    return undefined;
          }
          let count = 0;

          for (let i in list) {
                    let obj = list[i];
                    if (typeof obj === 'number' && Number.isInteger(obj)) {
                              count++;
                    
                    }
                    else if (typeof obj === "object" && obj !== null) {
                              let result = totalIntegers(obj);
                              if (result != undefined) {
                                        count += result;
                              }
                    }
          }
  return count;
};
  
// Do not edit below this line
module.exports = totalIntegers;