const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', OnInputBlur);

function OnInputBlur(event) {    
    //console.log(inputRef.getAttribute('data-length'), inputRef.dataset.length);
    if (!(event.target.value.length - inputRef.dataset.length)) {   
        inputRef.classList.remove("invalid");
        inputRef.classList.add("valid");
    }
    else { 
        inputRef.classList.remove("valid");
        inputRef.classList.add("invalid");
    }    
}