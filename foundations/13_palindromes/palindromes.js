const palindromes = function (str) {
  return str.toLowerCase() == str.split('').reverse().join('').toLowerCase()
};

// Do not edit below this line
module.exports = palindromes;
