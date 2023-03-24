let start = 0;
let swappedName = "elZerO";
let st = "";

for (let i =start ; i < swappedName.length ;i ++)
{
    let lower = swappedName[i].toLowerCase();
    st += swappedName[i] == lower ? swappedName[i].toUpperCase() : lower;
}
console.log(st);
// Output
"ELzERo"