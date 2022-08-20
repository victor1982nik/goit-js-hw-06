const inputRef = document.querySelector('#name-input');
const outputSpanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', OnInputChange);

function OnInputChange({ target }) {       
    outputSpanRef.textContent = target.value ? target.value : 'Anonymous';
}