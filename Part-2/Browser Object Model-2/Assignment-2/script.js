// set the default values of the fields and select box
document.getElementById("field1").value = localStorage.getItem("field1") || "";
document.getElementById("field2").value = localStorage.getItem("field2") || "";
document.getElementById("field3").value = localStorage.getItem("field3") || "";
document.getElementById("select1").value = localStorage.getItem("select1") || "option1";

// update the localStorage when the fields or select box change
document.querySelectorAll("input[type='text'], select").forEach((element) => {
  element.addEventListener("change", () => {
    localStorage.setItem(element.id, element.value);
  });
});

// update the localStorage when the page is closed or reloaded
window.onunload = () => {
  localStorage.setItem("field1", document.getElementById("field1").value);
  localStorage.setItem("field2", document.getElementById("field2").value);
  localStorage.setItem("field3", document.getElementById("field3").value);
  localStorage.setItem("select1", document.getElementById("select1").value);
};
