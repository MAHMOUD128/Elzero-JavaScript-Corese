
let promptMsg = prompt("Print Number From – To");
console.log(promptMsg);

//to get the from and to values
let from = promptMsg.split("-")[0];
let to = promptMsg.split("-")[1];

//to make sure from is always less than to
if(from > to) 
{
    let temp = from;
    from = to;
    to = temp;
}

//to print the numbers
for(let i = from; i <= to; i++) {
    console.log(i);
}