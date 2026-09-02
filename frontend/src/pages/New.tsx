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
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3 items-center justify-items-start">
          <Button onClick={() => navigate('/')}>Back</Button>
          <h1 className="text-xl justify-self-center">Create a new recipe</h1>
        </div>
        <div className="self-center">
          <NewRecipeForm setRecipes={setRecipes} />
        </div>
      </div>
    </Layout>
  )
}

export default New;
