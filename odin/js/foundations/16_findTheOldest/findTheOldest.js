const findTheOldest = function(val) {
          let oldestPerson = val[0];
          let maxAge = 0;
          for (let i = 0; i < val.length; i++) {
                    death = val[i].yearOfDeath || new Date().getFullYear();
                    age = death - val[i].yearOfBirth;

                    if (age > maxAge) {
                              maxAge = age;
                              oldestPerson = val[i];
                    }
          }
          return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;