const field = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
}
field.input.addEventListener("input", onInputChange);
function onInputChange(event) {
    field.output.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        field.output.textContent = "Anonymous";
    };
};