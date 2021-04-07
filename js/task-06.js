const inputValid = document.querySelector('#validation-input');

inputValid.addEventListener('blur', () => {
    const inputTextLength = inputValid.value.length;
    const maxLength = inputValid.getAttribute('data-length');
     
    if (inputTextLength > maxLength || inputTextLength < maxLength) {
     inputValid.classList.add('invalid');
        
        
    }  else {
        inputValid.classList.add('valid')
        inputValid.classList.remove('invalid');
    }          
    
})
// без переменной
// inputValid.addEventListener('blur', () => {
//      if (!inputValid.value.length) {
//         inputValid.classList.remove('valid');
//         inputValid.classList.remove('invalid');
//     }
//     if (inputValid.value.length === inputValid.getAttribute('data-length')) {
//         inputValid.classList.add('valid');
//         inputValid.classList.remove('invalid');
//     } else {
//         inputValid.classList.add('invalid')
//         inputValid.classList.remove('valid');
//     }
// });



