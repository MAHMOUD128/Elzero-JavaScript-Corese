let start = 10;
let end = 0;
let stop = 3;
// using loop
for (let i = start; i >= stop; i--)
{
    if(i != start)
    {
        console.log("0"+i+"\n");
    }
    else{
        console.log(i+"\n");
    }
}
// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03