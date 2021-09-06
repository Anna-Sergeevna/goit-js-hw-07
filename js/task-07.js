const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
  text.style.fontSize = input.value + 'px';
};