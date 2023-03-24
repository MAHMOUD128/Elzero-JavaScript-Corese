let myVar = "100.56789 Views";
// ParseInt => data analysis and return number only from string if the number in the head of string
console.log(Math.trunc(parseInt(myVar))); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57