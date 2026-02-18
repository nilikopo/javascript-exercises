const sumAll = function(startVal, endVal) {
  let sum = 0
  const min = startVal < endVal ? startVal : endVal
  const max = startVal > endVal ? startVal : endVal

  if (min < 0 || max < 0) {
    return 'ERROR'
  } else if (typeof min !== "number" || typeof max !== "number") {
    return 'ERROR'
  } else if (Math.floor(min) !== min || Math.floor(max) !== max) {
    return 'ERROR'
  }
  
  for (let i = min; i <= max; i++) {
    sum += i
  }
  return sum
};

// Do not edit below this line
module.exports = sumAll;
