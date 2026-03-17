const palindromes = function (str) {
  const checkStr = "qwertyuiopasdfghjklzxcvbnm0987654321";
  const cleanedStr = str
    .toLowerCase()
    .split("")
    .filter((char) => checkStr.includes(char))
    .join("");
  const reverseStr = cleanedStr
    .split('')
    .reverse()
    .join('')

  return cleanedStr == reverseStr
};

// Do not edit below this line
module.exports = palindromes;
