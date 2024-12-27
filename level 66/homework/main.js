function getUnique(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === arr.lastIndexOf(item));
  }
  
  // Example usage:
  console.log(getUnique([1,2,2,3,3,4,5])); // [1,4,5]
  console.log(getUnique(['a','b','b','c'])); // ['a','c']
  function getUnique(arr) {
    const count = {};
    arr.forEach(item => count[item] = (count[item] || 0) + 1);
    return arr.filter(item => count[item] === 1);
  }