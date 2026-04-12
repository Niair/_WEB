const caesar = function(string, shift) {
          stringL = string.split("");

          for (let i in stringL) {
                    if (stringL[i] == stringL[i].toUpperCase() && 65 <= stringL[i].charCodeAt(0) && stringL[i].charCodeAt(0) <= 90) {
                              stringL[i] = String.fromCharCode(((stringL[i].charCodeAt(0) - 65 + shift) % 26 + 26) % 26 + 65);
                    }
                    else if (!(stringL[i] == stringL[i].toUpperCase()) && 97 <= stringL[i].charCodeAt(0) && stringL[i].charCodeAt(0) <= 122) {
                              stringL[i] = String.fromCharCode(((stringL[i].charCodeAt(0) - 97 + shift) % 26 + 26) % 26 + 97);
                    }
                    else {
                              stringL[i] = stringL[i];
                    }
          }
          return stringL.join("");
};

// Do not edit below this line
module.exports = caesar;