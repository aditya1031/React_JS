import { useState } from "react";
// import Recipe from "./Recipe";


export default function Form() {

     const [ingredients, setIngredients] = useState(["dahi","banana","cream","milk"]);

     const [recipeShown, setRecipe] = useState(false);

     const ingredientsListItem = ingredients.map((ingredient) =>
          <li key={ingredient}>
               {ingredient}
          </li>
     )

     function addIngredient(formData) {
          const newIngredient = formData.get("ingredient");
          setIngredients(ingredients => [...ingredients, newIngredient]);
     }

     function getRecipe() {
          setRecipe(prevRecipe => !prevRecipe);
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

               {ingredients.length > 0 && <section >
                    <h2>Ingredient on hand : </h2>
                    <ul className="ingredients-list" aria-live="polite">{ingredientsListItem}</ul>
                    {ingredients.length > 3 && <div className="get-recipe-container">
                         <div>
                              <h3>Ready for a recipe?</h3>
                              <p>Generate a recipe from you given list of ingredient.</p>
                         </div>
                         <button onClick={getRecipe} >Get a recipe</button>
                    </div>}
               </section>}

               {/* {recipeShown && Recipe} */}


          </main>
     )
}