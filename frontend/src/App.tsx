import { useState } from "react";
import type { Recipe } from "./types";
import RecipesList from "./components/RecipesList";
import NewRecipeForm from "./components/NewRecipeForm";

const App = () => {
  const [recipes, setRecipes] = useState(Array<Recipe>);

  return (
    <>
      <h1>ho-fame</h1>
      <RecipesList recipes={recipes} setRecipes={setRecipes} />
      <NewRecipeForm setRecipes={setRecipes} />
    </>
  )
}

export default App
