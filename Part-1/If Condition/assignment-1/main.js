/**
 * 
 * @param {number}  number you enter 
 */

function check(n)
{
    if (n < 10)
    {
        console.log(`00${n}`);
    }
    else if (n >10 && n < 100)
    {
        console.log(`0${n}`);
    }
    else
    {
        console.log(`${n}`);
    }
}
function main()
{
    check(num);
}


// // Test Case 1
// let num = 9; // "009"

// // Test Case 2
// let num = 20; // "020"

// // Test Case 3
// let num = 110; // "110"
main();