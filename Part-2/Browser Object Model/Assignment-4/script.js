let div = document.querySelector("div");

function countDown(){
    div.innerHTML -= 1;
    if(div.innerHTML === "0")
    {
        clearInterval(counter);
        window.location.href = "https://elzero.org";
    }
}

let counter = setInterval(countDown,1000);