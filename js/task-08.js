const formElem = document.querySelector(".login-form");
formElem.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!")
    }
    const userData = { email: email.value, Password: password.value }
    console.log(userData);
    event.currentTarget.reset()
}
