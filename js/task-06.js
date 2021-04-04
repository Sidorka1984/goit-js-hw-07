const inputValid = document.querySelector('#validation-input');

inputValid.addEventListener("blur", e => {
    const inputTextLength = inputValid.value.length;
    const maxLength = inputValid.getAttribute('data-length');
    inputValid.classList.add('valid');
    if (!inputTextLength) {
        inputValid.classList.remove('valid');
        inputValid.classList.remove('invalid');
    }
    if (maxLength < inputTextLength) {
       return inputValid.classList.replace('valid','invalid');
       
    } 
        if (inputValid.classList.contains('invalid')) {
            return inputValid.classList.replace('valid','invalid');
    }             
    
})
