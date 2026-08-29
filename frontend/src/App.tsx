import { useEffect } from "react";
import recipesService from "./services/recipes";

const App = () => {

  useEffect(() => {
    const getAll = async () => {
      try {
        const recipes = await recipesService.getAll();
        console.log(recipes);
      } catch (error) {
        console.log(error);
      }
    }

    getAll();
  }, []);

  return (
    <>
      <p>ho-fame</p>
    </>
  )
}

export default App
