// Using split()
const str = "1,2,3,4,5";
const arr1 = str.split(","); // ['1','2','3','4','5']
const numbers1 = arr1.map(Number); // [1,2,3,4,5]

// Using Array.from()
const str2 = "12345";
const arr2 = Array.from(str2); // ['1','2','3','4','5']
const numbers2 = arr2.map(Number); // [1,2,3,4,5]