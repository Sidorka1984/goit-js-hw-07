
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


let valueEl = Number(document.querySelector('#value').textContent);
let counterValue = document.querySelector('#value');

const decrementBtnEl = document.querySelector('#counter').firstElementChild;
const incrementBtnEl = document.querySelector('#counter').lastElementChild;

incrementBtnEl.addEventListener('click', event => {
  valueEl += 1;
  counterValue.innerHTML = valueEl;
});

decrementBtnEl.addEventListener('click', event => {
  valueEl -= 1;
  counterValue.innerHTML = valueEl;
})

