const palindromes = function (val) {
          
          val = val.toLowerCase().replace(/[!?,.\s]/g, "");
          return val === val.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;