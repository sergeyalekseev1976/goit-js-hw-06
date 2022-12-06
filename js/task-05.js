const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", textInput);
function textInput(event) {
  if (event.currentTarget.value) {
    spanEl.textContent = event.currentTarget.value;
  } else {
    spanEl.textContent = "Anonymous";
  }
}
