let jsonString = '{"firstName": "Mahmoud" , "lastName": "Khaleel" }';
console.log(typeof jsonString);
let obj = JSON.parse(jsonString);
console.log(typeof obj);
console.log(`My name is ${obj.firstName} ${obj.lastName}`);