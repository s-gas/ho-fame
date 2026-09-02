import { useNavigate } from "react-router-dom";
import NewRecipeForm from "../components/NewRecipeForm";
import Button from "../components/Button";
import type { Recipe } from "../types";
import Layout from "../layouts/Layout";

interface NewProps {
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
};

const New = ({ setRecipes }: NewProps) => {

  const navigate = useNavigate();

  return (
    <Layout>
      <Button onClick={() => navigate('/')}>Back</Button>
      <h1>Create a new recipe</h1>
      <NewRecipeForm setRecipes={setRecipes} />
    </Layout>
  )
}

export default New;
