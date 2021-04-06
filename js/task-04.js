
// const counterValue = document.querySelector('#value');

// const incrementBtnEl = document.querySelector('#counter button[data-action="increment"]');
// const decrementBtnEl = document.querySelector('#counter button[data-action="decrement"]');

// function IncrementBtnClick() {
     
//   counterValue.textContent++;
// };

// function DecrementBtnClick() {
     
//   counterValue.textContent--;
// };
// incrementBtnEl.addEventListener('click', IncrementBtnClick);
// decrementBtnEl.addEventListener("click", DecrementBtnClick);


const btnEl = document.querySelectorAll('#counter button');

const btnDecrementEl = btnEl[0].dataset;
console.log(btnEl[0]);

const btnIncrementEl = btnEl[1].dataset;
console.log(btnEl[1])


const spanEl = document.querySelector('#value');
let spanContentEl = spanEl.textContent;


let counterValue = 0;

btnEl[0].addEventListener('click', decrement);
btnEl[1].addEventListener('click', increment);


function decrement() {
  counterValue -= 1;
  return counterValue;
}

function increment() {     
  counterValue += 1;
 return counterValue;
}




