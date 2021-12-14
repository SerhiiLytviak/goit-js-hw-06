const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("ul#ingredients");

let elements = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const ingredientsElementRef = document.createElement("li");

  ingredientsElementRef.classList.add("item");
  ingredientsElementRef.textContent = ingredients[i];
  elements.push(ingredientsElementRef);
}

ingredientsListRef.append(...elements);
