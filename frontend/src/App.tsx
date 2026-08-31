import { useState } from "react";
import type { Recipe } from "./types";
import RecipesList from "./components/RecipesList";

const App = () => {
  const [recipes, setRecipes] = useState(Array<Recipe>);

  return (
    <RecipesList recipes={recipes} setRecipes={setRecipes} />
  )
}

export default App
