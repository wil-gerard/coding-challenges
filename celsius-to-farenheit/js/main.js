//Write your pseduo code first!
document.querySelector('#convert').addEventListener('click', convert)

function convert() {
  const startingTemp = document.querySelector('#temp').value

  const convertedTemp = startingTemp * 9/5 + 32 

  document.querySelector('#convertedTemp').innerText = convertedTemp
}
