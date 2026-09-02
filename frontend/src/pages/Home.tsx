import { useNavigate } from "react-router-dom";
import RecipesList from "../components/RecipesList";
import Button from "../components/Button";
import Layout from "../layouts/Layout";
import type { Recipe } from "../types";

interface HomeProps {
  recipes: Recipe[];
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
};

const Home = ({recipes, setRecipes}: HomeProps) => {

  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex justify-between">
        <h1>Recipes</h1>
        <Button onClick={() => navigate('/new')}>New</Button>
      </div>
      <RecipesList recipes={recipes} setRecipes={setRecipes} />
    </Layout>
  )
};

export default Home;
