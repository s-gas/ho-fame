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
  const [url, setUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      let entry;
      if (url) {
        entry = await recipesService.createRecipe({ name: name, url: url });
      } else {
        entry = await recipesService.createRecipe({ name: name });
      }
      setRecipes((recipes) => recipes.concat(entry));
      setName("");
      setUrl("");
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("400")) {
          setErrorMessage("Name field cannot be empty");
        } else {
          setErrorMessage("Something went wrong");
        }
      } else {
        setErrorMessage("Something went wrong");
      }
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex gap-2">
          Name:
          <input onChange={handleNameChange} className="border-b"></input>
        </label>
        <label className="flex justify-between">
          URL:
          <input onChange={handleUrlChange} className="border-b"></input>
        </label>
        <Button type="submit">Create</Button>
      </form>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  )
}

export default NewRecipeForm;
