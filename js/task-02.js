const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsMain = document.getElementById("ingredients");
const IngredientItem = name => {
	const ingredientElem = document.createElement("li");
	ingredientElem.textContent = name;
	ingredientElem.classList.add(".item");
	return ingredientElem;
}
const ingredientsNodelist = ingredients.map(IngredientItem);
ingredientsMain.append(...ingredientsNodelist);