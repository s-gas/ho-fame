import { useNavigate } from "react-router-dom";
import RecipesList from "../components/RecipesList";
import type { Recipe } from "../types";

interface HomeProps {
  recipes: Recipe[];
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
};

const Home = ({recipes, setRecipes}: HomeProps) => {

  const navigate = useNavigate();

  return (
    <>
      <h1>ho-fame</h1>
      <RecipesList recipes={recipes} setRecipes={setRecipes} />
      <button onClick={() => navigate('/new')}>New</button>
    </>
  )
};

export default Home;
