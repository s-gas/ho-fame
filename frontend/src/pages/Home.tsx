import RecipesList from "../components/RecipesList";
import type { Recipe } from "../types";

interface HomeProps {
  recipes: Recipe[];
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
};

const Home = ({recipes, setRecipes}: HomeProps) => {
  return (
    <>
      <h1>ho-fame</h1>
      <RecipesList recipes={recipes} setRecipes={setRecipes} />
      <button>New</button>
    </>
  )
};

export default Home;
