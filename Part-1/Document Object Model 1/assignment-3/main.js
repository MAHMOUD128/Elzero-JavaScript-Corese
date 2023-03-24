// select result elements
let result = document.querySelector('.result');
// add an input event listener to the dollar input field
let dollarInput = document.getElementsByName('dollar')[0];
dollarInput.addEventListener('input', function() {
  // retrieve the user input from the dollar input field
  let dollars = dollarInput.value;

  // perform the currency conversion calculation
  let pounds = dollars * 30.8724;

  // update the result text with the converted values
  result.textContent = `${dollars} USD Dollar = ${pounds} Egyptian Pound`;
});