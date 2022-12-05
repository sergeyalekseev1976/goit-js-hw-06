function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createEl = document.querySelector("[data-create]");
const destroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("div#boxes");
const inputEl = document.querySelector("#controls input");

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const createNewEl = document.createElement("div");
    createNewEl.style.width = `${30 + i * 10}px`;
    createNewEl.style.height = `${30 + i * 10}px`;
    createNewEl.style.backgroundColor = getRandomHexColor();
    boxesEl.append(createNewEl);
  }
}

createEl.addEventListener("click", onClick);
function onClick(event) {
  createBoxes(inputEl.valueAsNumber);
}
destroyEl.addEventListener("click", onClickRemove);
function onClickRemove(event) {
  boxesEl.innerHTML = "";
}
