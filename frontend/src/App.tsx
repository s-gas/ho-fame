import { useState } from "react";
import type { Recipe } from "./types";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";

const App = () => {
  const [recipes, setRecipes] = useState(Array<Recipe>);

  return (
    <Routes>
      <Route path="/" element={<Home recipes={recipes} setRecipes={setRecipes} />} />
      <Route path="/new" element={<New setRecipes={setRecipes} />} />
    </Routes>
  )
}

export default App
