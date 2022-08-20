const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', OnInputChange);

function OnInputChange(event) {   
    spanRef.style.fontSize = `${inputRef.value}px`;
}