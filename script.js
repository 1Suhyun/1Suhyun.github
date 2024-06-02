function onClick(numberElement, inputElement) {
  inputElement.value = inputElement.value + numberElement.innerHTML
}


const inputElement = document.querySelector('input');


const numberElements = document.querySelectorAll('span.text');


for (let numberElement of numberElements) {
  

  numberElement.addEventListener('click', () => onClick(numberElement, inputElement));
}


function clearnumber() {
  document.getElementById("reset").reset();
}