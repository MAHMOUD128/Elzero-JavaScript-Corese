//Method One Object literal notation
let objobjMethodOne = 
{
    property:"Method One",
};

console.log(objMethodOne.property); // "Method One"

//Method Two 
let objMethodTwo={}
objMethodTwo.property ="Method Two";

console.log(objMethodTwo.property); // "Method Two"

// Method Three
let objMethodThree =new Object();
objMethodThree.property ="Method Three";

console.log(objMethodThree.property); // "Method Three"

// Method Four
let objMethodFour =
{
   "property": "Method Four",
};

console.log(objMethodFour["property"]); // "Method Four"
