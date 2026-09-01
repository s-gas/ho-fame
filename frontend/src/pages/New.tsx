import NewRecipeForm from "../components/NewRecipeForm";
import type { Recipe } from "../types";

interface NewProps {
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
};

const New = ({ setRecipes }: NewProps) => {
  return (
    <NewRecipeForm setRecipes={setRecipes} />
  )
}

export default New;
