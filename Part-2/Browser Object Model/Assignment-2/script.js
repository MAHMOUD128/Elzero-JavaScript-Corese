setTimeout(popup(), 5000);

//function to create the popup
function popup() {

    let popup = document.createElement("div");
    popup.classList.add("popup");
    let closeBtn = document.createElement("span");
    closeBtn.classList.add("popup-close");
    closeBtn.innerHTML = "&times;";

    closeBtn.onclick = function() {
        popup.remove();
    }
    let popupContent = document.createElement("p");
    popupContent.innerHTML = 
    `<h2>Welcome</h2>
    <h4>Welcome To Elzero Web School</h4>
    `;

    //to show the popup
    popup.appendChild(closeBtn);
    popup.appendChild(popupContent);
    document.body.appendChild(popup);
}