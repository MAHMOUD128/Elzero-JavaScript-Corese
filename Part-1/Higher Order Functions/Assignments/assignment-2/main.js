let myString = "EElllzzzzzzzeroo";
//output
// Elzero
//solution
let res = myString.split("").filter(function(char,index,array){return array.indexOf(char)===index;}).join("");
console.log(res); // "Elzero"
