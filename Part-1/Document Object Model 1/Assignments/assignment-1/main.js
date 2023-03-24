//document.getElementById
let divElement = document.getElementById('elzero');
//document.querySelector
let divElement = document.querySelector('#elzero.element[name="js"]');
//document.querySelectorAll
let divElements = document.querySelectorAll('#elzero.element[name="js"]');
let divElement = divElements[0];
//document.getElementsByTagName
let divElements = document.getElementsByTagName('div'); // this is general to come back all div but if we want spacific div we will use loop and choose we are want
for (let i = 0; i < divElements.length; i++) {
  let divElement = divElements[i];
  if (divElement.getAttribute('id') === 'elzero' && divElement.getAttribute('class') === 'element' && divElement.getAttribute('name') === 'js') {
    break;
  }
}
//document.getElementsByTagName
let divElements = document.getElementsByTagName("p")[0].;
//document.getElementsByClassName
const divElements = document.getElementsByClassName('element');
for (let i = 0; i < divElements.length; i++) {
  const divElement = divElements[i];
  if (divElement.getAttribute('id') === 'elzero' && divElement.getAttribute('name') === 'js') {
    break;
  }
}
//document.querySelector
let divElement = document.querySelector("div");
//document.querySelectorAll
let divElement = document.querySelectorAll("div");
// direct accsess
for(let i =0 ;i < linkesElements.length ; i++)
{
 console.log(document.links[i].value);
}

