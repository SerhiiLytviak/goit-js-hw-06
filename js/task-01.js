const categoryRef = document.querySelectorAll("li.item");

console.log("Number of categories:", categoryRef.length);

categoryRef.forEach((category) => {
  const categoryNameRef = category.querySelector("h2");
  console.log("Category:", categoryNameRef.textContent);
  const categoryElementRef = category.querySelectorAll("li");
  console.log("Elements:", categoryElementRef.length);
});
