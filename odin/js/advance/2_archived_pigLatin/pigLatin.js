function pigLatin(string) {
          stringL = string.split(" ");
          setA = new Set(['a', 'e', 'i', 'o', 'u']);
          let newStrL = [];
          for (let i in stringL) {
                    let j = 0;
                    while (j < stringL[i].length) {
                              if (!(setA.has(stringL[i][j])) || (stringL[i][j] === "u" && stringL[i][j-1] === "q")) {
                                        j += 1;
                              }
                              else {
                                        break;
                              }
                    }
                    newStr = stringL[i].slice(j, stringL[i].length) + stringL[i].slice(0, j) + "ay";
                    newStrL.push(newStr);
          }
          return newStrL.join(" ");
};
  
// Do not edit below this line
module.exports = pigLatin;