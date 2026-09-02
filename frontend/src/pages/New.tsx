import { useNavigate } from "react-router-dom";
import NewRecipeForm from "../components/NewRecipeForm";
import type { Recipe } from "../types";

interface NewProps {
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
};

const New = ({ setRecipes }: NewProps) => {

  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('/')}>Back</button>
      <h1>Create a new recipe</h1>
      <NewRecipeForm setRecipes={setRecipes} />
    </>
  )
}

export default New;
