// select text to be converted

// convert text

// display converted text

document.querySelector('#convertButton').addEventListener('click', convertTextToLowercase)

function convertTextToLowercase() {
  const textToBeConverted = document.querySelector('#textToBeConverted').value;
  const convertedText = textToBeConverted.toLowerCase();
  document.querySelector('#convertedTextBox').innerText = convertedText;
}
