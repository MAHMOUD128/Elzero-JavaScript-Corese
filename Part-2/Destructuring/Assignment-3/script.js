let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring

let allFriends = arr1.concat(arr2, arr3); // ["Ahmed", "Sameh", "Sayed", "Mohamed", "Gamal", "Amir", "Haytham", "Shady", "Mahmoud"]
[c, , , , , , , a , b] = allFriends;
console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed