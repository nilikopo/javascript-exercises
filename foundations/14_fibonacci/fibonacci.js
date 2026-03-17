const fibonacci = function(num) {
  if (num < 0) return "OOPS"
  let a = 0, b = 1
  for (let i = 0; i < num; i++) {
    let temp = a
    a = b
    b += temp
  }
  return a
};

// Do not edit below this line
module.exports = fibonacci;
