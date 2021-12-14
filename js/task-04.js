let counterValue = 0;

const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
let valueRef = document.querySelector("#value");

decrementRef.addEventListener("click", () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});

incrementRef.addEventListener("click", () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});
