let div = document.querySelector("div");

function countDown(){
    div.innerHTML -= 1;
    if(div.innerHTML === "5")
    {
        window.open("https://elzero.org", "_blank", "width=500,height=500");
    }
    if(div.innerHTML === "0")
    {
        clearInterval(counter);
    }
}

let counter = setInterval(countDown,1000);