let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let count = letter.length;
//solution


for(let i = --count ; i < friends.length ; i++)
{
    if(!(friends[i].startsWith(letter.toUpperCase())))
    {
        console.log(`${++count} => ${friends[i]}`);
    }
}
// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"