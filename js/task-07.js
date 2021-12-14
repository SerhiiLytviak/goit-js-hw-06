const inputRef = document.querySelector("input#font-size-control");
const textRef = document.querySelector("span#text");

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  textRef.setAttribute("style", `font-size:${event.currentTarget.value}px`);
}
