let birth = new Date("2001-01-01"); //my birthday
let now = new Date(); // current date
let diff = now - birth;
let seconds = diff/1000;
let minutes = seconds/60;
let hours = minutes/60;
let days = hours/24;
let years = days/365;

console.log(`${seconds} Seconds`);
console.log(`${minutes} Minutes`);
console.log(`${hours} Hours`);
console.log(`${days} Days`);
console.log(`${years} Years`);
