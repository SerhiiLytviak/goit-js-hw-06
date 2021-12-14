const inputRef = document.querySelector("input#name-input");
const outputRef = document.querySelector("span#name-output");

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  event.currentTarget.value === ""
    ? (outputRef.textContent = "Anonymous")
    : (outputRef.textContent = event.currentTarget.value);
}
