// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

// \n inserts a newline when logging a string, you could also put another console.log('Ingredients:') on the next line
// similiar to how I logged the ingredients

console.log(`${recipe.title} serves ${recipe.serves} \nIngredients: `);

for (const ingredient of recipe.ingredients) {
  console.log(ingredient);
}
