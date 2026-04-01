const getTheTitles = function(arr) {
          // return arr.map(book => book.title);
          let values = [];
          for (let i = 0; i < arr.length; i++) {
                    values.push(arr[i].title);
          }
          return values;
};

// Do not edit below this line
module.exports = getTheTitles;