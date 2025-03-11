const findTheOldest = function(arr) {
  return arr.reduce((obj, person) => {
    if (obj.yearOfDeath === undefined) {
      obj.yearOfDeath = new Date().getFullYear();
    }
    if (person.yearOfDeath - person.yearOfBirth > obj.yearOfDeath - obj.yearOfBirth) {
      obj = person;
    }
    return obj;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
