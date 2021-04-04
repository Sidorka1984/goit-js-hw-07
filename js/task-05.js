const input = document.querySelector('#name-input');
const text = document.querySelector('#name-output');

// function onInputChange(event) {
//     text.textContent = event.currentTarget.value;
//     if (!text.textContent) {
//         text.textContent = 'незнакомец';
//     }
    
// }
// input.addEventListener('input', onInputChange);

input.addEventListener('input', event => {
    text.textContent = event.currentTarget.value;
    if (!text.textContent) {
        text.textContent = 'незнакомец';
    }
});
