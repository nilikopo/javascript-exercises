const removeFromArray = function(arr, item) {
  const index = arr.indexOf(item)
  const removedElement = arr.splice( index, 1 )
  return arr
};

// Do not edit below this line
module.exports = removeFromArray;
