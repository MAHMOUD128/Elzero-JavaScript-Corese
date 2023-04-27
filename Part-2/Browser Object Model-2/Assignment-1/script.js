//Set default values from localStorage if available

if(localStorage.getItem("fontFamily"))
{
    document.getElementById("font-family-select").value = localStorage.getItem("fontFamily");
}
if(localStorage.getItem("color"))
{
    document.getElementById("color-select").value = localStorage.getItem("color");
}
if(localStorage.getItem("fontSize"))
{
    document.getElementById("font-size-select").value = localStorage.getItem("fontSize");
}

// Apply default values to the page
applyStyles();


function applyStyles()
{
    // Get the selected values
    let fontFamily = document.getElementById("font-family-select").value;
    let color = document.getElementById("color-select").value;
    let fontSize = document.getElementById("font-size-select").value;
    // Apply the styles to the page
    document.body.style.fontFamily = fontFamily;
    document.body.style.color = color;
    document.body.style.fontSize = fontSize;
    // Save the selected values to localStorage
    localStorage.setItem("fontFamily", fontFamily);
    localStorage.setItem("color", color);
    localStorage.setItem("fontSize", fontSize);
}


// Listen for changes to the select boxes
document.getElementById("font-family-select").addEventListener("change", applyStyles);
document.getElementById("color-select").addEventListener("change", applyStyles);
document.getElementById("font-size-select").addEventListener("change", applyStyles);