let milliseconds = Date.parse("2001-01-01");
let one = new Date(milliseconds);
let two = new Date("2001-01-01");
let three = new Date("2001-01-01T00:00:00");
console.log(one);
console.log(two);
console.log(three);