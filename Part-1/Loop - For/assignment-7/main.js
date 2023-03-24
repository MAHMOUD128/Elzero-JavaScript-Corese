let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
let res = [];

for (let i = ++start ; i < mix.length ;i++)
{
    if(!(isNaN(mix[i])))
    {
        console.log(mix[i]);
    }
    else
    {
        continue;
    }
}
// Output
2
3
4