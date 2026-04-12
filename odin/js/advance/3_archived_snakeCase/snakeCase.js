const snakeCase = function(str) {
          return str.split(/[^a-zA-Z0-9]+/).filter(Boolean).flatMap(word => {
                    if (word[0] === word[0].toLowerCase()) {
                              return word.replace(/([a-z])([A-Z])/g, '$1_$2').split('_');
                    }
                    return [word];
          })
          .map(word => word.toLowerCase()).join("_");
};

// Do not edit below this line
module.exports = snakeCase;