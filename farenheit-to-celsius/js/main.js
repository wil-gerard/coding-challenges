//Write your pseduo code first!
document.querySelector('#convert').addEventListener('click', convert)

function convert() {
  const startingTemp = document.querySelector('#temp').value

  const a = startingTemp - 32

  const convertedTemp = a/1.8

  document.querySelector('#convertedTemp').innerText = convertedTemp
}
