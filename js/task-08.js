const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    mail,
    password,
  };
  console.log(formData);

  if (!formElements.email.value || !formElements.password.value) {
    alert("All fields must be filled");
  }
  return formElements.email.value || formElements.password.value;

  form.reset();
}
