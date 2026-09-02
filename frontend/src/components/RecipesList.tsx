import { useEffect } from "react";
import recipesService from "../services/recipes";
import type { Recipe } from "../types";

interface RecipesListProps {
  recipes: Recipe[];
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
};

const RecipesList = ({ recipes, setRecipes }: RecipesListProps) => {
  useEffect(() => {
    const getAll = async () => {
      try {
        const recipeList = await recipesService.getAll();
        setRecipes(recipeList);
      } catch (error) {
        console.log(error);
      }
    }

    getAll();
  }, [setRecipes]);

  if (!recipes.length) {
    return <p>No recipes</p>
  };

  return (
    <div className="flex flex-col gap-2">
      {recipes.map((recipe) => <p key={recipe.id}>{recipe.name}</p>)}
    </div>
  )
}

export default RecipesList;
