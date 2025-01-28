function isSortedAndHow(arr) {
    if (arr.every((val, i, array) => i === 0 || array[i - 1] <= val)) {
      return "yes, ascending";
    }
    // Check if the array is sorted in descending order
    else if (arr.every((val, i, array) => i === 0 || array[i - 1] >= val)) {
      return "yes, descending";
    }
    else {
      return "no";
    }
  }
  console.log(isSortedAndHow([1, 2, 3, 4]));  
  console.log(isSortedAndHow([4, 3, 2, 1]));  
  console.log(isSortedAndHow([1, 3, 2, 4]));    