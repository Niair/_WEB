const contains = function(obj, value) {
          for (let i in obj) {
                    let cur = obj[i];
                    if (Number.isNaN(cur) && Number.isNaN(value)) {
                              return true;
                    }
                    if (cur === value) {
                              return true;
                    }
                    if (cur !== null && typeof cur === "object") {
                              if (contains(cur, value)) {
                                        return true;
                              };
                    }
          }
          return false;
};
  
// Do not edit below this line
module.exports = contains;