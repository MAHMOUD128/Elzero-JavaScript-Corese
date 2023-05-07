// //1 solution 
// let start = new Date();

// for(let i = 0 ; i < 1000000; i++)
// {
//     document.write(`<div> ${i} </div>`);
// }
// let end = new Date();
// 
// console.log(`Loop Took${duration} Milliseconds.`);

// second solution

console.log(`Loop Took${duration} Milliseconds.`);

const start = Performance.now();

for(let i = 0 ; i < 1000000; i++)
{
    document.write(`<div> ${i} </div>`);
}
const end = Performance.now();
let duration = end - start;
console.log(`Loop Took${duration} Milliseconds.`);