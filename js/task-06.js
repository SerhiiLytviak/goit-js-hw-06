const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputValid);
inputRef.addEventListener("blur", onInputInvalid);

function onInputValid(event) {
  if (
    Number(event.currentTarget.value.length) === Number(inputRef.dataset.length)
  ) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  }
}

function onInputInvalid(event) {
  if (
    Number(event.currentTarget.value.length) !== Number(inputRef.dataset.length)
  ) {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
