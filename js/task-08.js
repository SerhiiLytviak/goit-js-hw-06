const formRef = document.querySelector(".login-form");
const objectWithData = {};

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    alert("Все поля должны быть заполнены!");
  }

  objectWithData.mail = event.currentTarget.elements.email.value;
  objectWithData.password = event.currentTarget.elements.password.value;

  console.log(objectWithData);

  formRef.reset();
}
