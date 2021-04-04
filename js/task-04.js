
const counterValue = document.querySelector('#value');

const incrementBtnEl = document.querySelector('#counter button[data-action="increment"]');
const decrementBtnEl = document.querySelector('#counter button[data-action="decrement"]');

function IncrementBtnClick() {
     
  counterValue.textContent++;
};

function DecrementBtnClick() {
     
  counterValue.textContent--;
};
incrementBtnEl.addEventListener('click', IncrementBtnClick);
decrementBtnEl.addEventListener("click", DecrementBtnClick);