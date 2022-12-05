const decrementEl = document.querySelector("[data-action=decrement]");
const valueEl = document.querySelector("#value");
const incrementEl = document.querySelector("[data-action=increment]");

let counterValue = 0;

console.log(decrementEl, valueEl, incrementEl);

decrementEl.addEventListener("click", decrementClick);
function decrementClick() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
incrementEl.addEventListener("click", incrementClick);
function incrementClick() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
