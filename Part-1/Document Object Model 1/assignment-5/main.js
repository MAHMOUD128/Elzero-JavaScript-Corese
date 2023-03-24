let myElement =document.querySelectorAll("img");
for(let i = 0 ; i < myElement.length ; i++)
{
    if(myElement[i].hasAttribute("alt"))
    {
        myElement[i].setAttribute("alt","Old");
    }
    else
    {
        myElement[i].setAttribute("alt"," Elzero New");
    }
    
}