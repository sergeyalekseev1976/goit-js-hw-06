const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
console.log(inputEl, spanEl);

inputEl.addEventListener("input", onInput);
function onInput(event) {
  spanEl.style.fontSize = inputEl.value + "px";
}
