// Function to handle what happens after you click the element
// numberElement = clicked number
// inputElement = input box
function onClick(numberElement, inputElement) {
  inputElement.value = inputElement.value + numberElement.innerHTML
}

// Get the input box element 
const inputElement = document.querySelector('input');

// Get the number elements 
const numberElements = document.querySelectorAll('span.text');

// For each number element, add an event listener. 
for (let numberElement of numberElements) {
  
  // Pass the number element and the input box element 
  numberElement.addEventListener('click', () => onClick(numberElement, inputElement));
}


function clearnumber() {
  document.getElementById("reset").reset();
}