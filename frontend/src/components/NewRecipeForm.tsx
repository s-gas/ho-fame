import { useState } from "react";
import type { Recipe } from "../types";
import recipesService from "../services/recipes";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

interface NewRecipeFormProps {
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
}

const NewRecipeForm = ({ setRecipes }: NewRecipeFormProps) => {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const entry = await recipesService.createRecipe({ name: name });
      setRecipes((recipes) => recipes.concat(entry));
      setName("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        name
        <input onChange={handleChange}></input>
      </label>
      <Button type="submit">Create</Button>
    </form>
  )
}

export default NewRecipeForm;
