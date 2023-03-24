let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
//output
// [-1, -10, 10, 20, -5, -3]
//solution
let res = numsAndStrings.filter(function(ele){return typeof ele ==="number"}).map(function(ele){return -ele});
console.log(res);