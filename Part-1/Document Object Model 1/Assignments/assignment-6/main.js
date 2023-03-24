//select the form and result elements
let form = document.getElementById('element-form');
let result = document.querySelector('.results');

// listen for the form submission event
form.addEventListener('submit', function(event) {
  // prevent the default form submission behavior
  event.preventDefault();

  // retrieve the user inputs from the form elements
  let numElements = parseInt(document.getElementsByName('elements')[0].value);
  let elementText = document.getElementsByName('texts')[0].value;
  let elementType = document.getElementsByName('type')[0].value;

  // clear any previous results
  result.innerHTML = '';

  // create a loop that iterates over the specified number of elements
  for (let i = 0; i < numElements; i++) {
    // create the desired element
    let newElement = document.createElement(elementType);
    newElement.textContent = elementText;

    // append the element to the document
    result.appendChild(newElement);
  }
});
