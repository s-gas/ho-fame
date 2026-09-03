import type { Recipe } from "../types";

interface RecipeProps {
  recipe: Recipe;
};

const RecipeItem = ({ recipe }: RecipeProps) => {
  return (
    <div className="border-b py-2 flex gap-4">
      <h2>{recipe.name}</h2>
      {recipe.url && <a href={recipe.url} target="_blank" className="underline underline-offset-4">Link</a>}
    </div>
  );
};

export default RecipeItem;
