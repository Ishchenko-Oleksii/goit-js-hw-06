const inputElem = document.querySelector("#font-size-control");
const spanElem = document.querySelector("#text");
const handlerInput = () => {
  spanElem.style.fontSize = `${inputElem.value}px`;
};
inputElem.addEventListener("input", handlerInput);