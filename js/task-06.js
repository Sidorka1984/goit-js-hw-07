const inputValid = document.querySelector('#validation-input');

inputValid.addEventListener('blur', () => {
    const inputTextLength = inputValid.value.length;
    
    if (!inputTextLength) {
        inputValid.classList.remove('valid');
        inputValid.classList.remove('invalid');       
    }
     
    if (inputTextLength === 6) {
     inputValid.classList.add('valid');
        inputValid.classList.remove('invalid');
        
    }  else {
        inputValid.classList.add('invalid')
        inputValid.classList.remove('valid');
    }          
    
})
// без переменной
// inputValid.addEventListener('blur', () => {
//      if (!inputValid.value.length) {
//         inputValid.classList.remove('valid');
//         inputValid.classList.remove('invalid');
//     }
//     if (inputValid.value.length === 6 ) {
//         inputValid.classList.add('valid');
//         inputValid.classList.remove('invalid');
//     } else {
//         inputValid.classList.add('invalid')
//         inputValid.classList.remove('valid');
//     }
// });