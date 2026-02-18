const removeFromArray = function(arr, ...items) {
  for (const item of items) {
    const index = arr.indexOf(item)
    const removedElement = index == -1 ? "" : arr.splice( index, 1 )
  }
  return arr
};

// Do not edit below this line
module.exports = removeFromArray;
