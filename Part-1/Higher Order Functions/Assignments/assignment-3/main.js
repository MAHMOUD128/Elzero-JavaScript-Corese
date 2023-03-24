let myArray = ["E", "l", "z", ["e", "r"], "o"];
output
Elzero
// solution
// first solution
let res1 = myArray.map(function(ele){return ele}).join("").split(",").join("");
console.log(res1);
// second solution
let res2 =myArray.flat().join("");
console.log(res2);
// third solution
let res3 = myArray.reduce(function(acc,curr){if(Array.isArray(curr)){return acc +curr.reduce(function(subAcc,subCurr){return subAcc+subCurr;},"");}return acc+curr;},"");
console.log(res3);
