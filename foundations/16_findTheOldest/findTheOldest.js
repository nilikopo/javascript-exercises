const findTheOldest = function(arr) {
  return arr.reduce((oldest, current) => {
    const getAge = person => {
      const finish = person.yearOfDeath || new Date().getFullYear()
      return finish - person.yearOfBirth
    }
    const oldestAge = getAge(oldest)
    const currentAge = getAge(current)

    return currentAge > oldestAge ? current : oldest
  })
};

// Do not edit below this line
module.exports = findTheOldest;
