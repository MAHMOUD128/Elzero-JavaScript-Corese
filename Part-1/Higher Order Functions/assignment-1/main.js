let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
//output
// Elzero
//solution
let res =mix.map(function(ele){return isNaN(parseInt(ele)) ? ele :"";}).reduce(function(acc,curr){return acc + curr});
console.log(res);