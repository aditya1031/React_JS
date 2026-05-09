import { useState } from "react";
// import Recipe from "./Recipe";

import IngredientsList from "./IngredientsList";
import Recipe from "./Recipe";

import { getRecipeFromMistral } from "./ai";

export default function Form() {

     const [ingredients, setIngredients] = useState([
          
     ]);

     const [recipe, setRecipe] = useState("");

     function addIngredient(formData) {
          const newIngredient = formData.get("ingredient");
          setIngredients(ingredients => [...ingredients, newIngredient]);
     }

     async function getRecipe() {
          const recipeMarkdown = await getRecipeFromMistral(ingredients);
          setRecipe(recipeMarkdown);
     }


     return (
          <main>
               <form
                    action={addIngredient}
                    className="add-ingredient-form">

                    <input
                         type="text"
                         placeholder="e.g. oregano"
                         aria-label="Add Ingredient"
                         name="ingredient"
                    />
                    <button className="search-button">
                         Add Ingredient
                    </button>
               </form>

               {ingredients.length > 0 &&
                    <IngredientsList
                         ingredients={ingredients}
                         getRecipe={getRecipe}
                    />}

               {recipe && <Recipe
                    recipe={recipe} />}

          </main>
     )
}