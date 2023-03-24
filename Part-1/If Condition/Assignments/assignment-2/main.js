
/**
 * 
 * @param {var1} frist value you input 
 * @param {var2} second value you input 
 */

function check(var1,var2)
{
    if(var1 == var2)
    {
        console.log(`${var1} Is The Same Value As ${var2}`);
    }
    if(var1 == var2 && typeof var1 != typeof var2)
    {
        console.log(`${var1} Is The Same Value As ${var2} But Not The Same Type`);
    }
    if(var1 != var2 && typeof var1 == typeof var2)
    {
        console.log(`${var1} Is The Same Type As ${var2} But Not The Same Value`)
    }
}

function main()
{
    let num1 = 9;
    let str = "9";
    let str2 = "20";
    check(str,str2);
}
main();
// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"