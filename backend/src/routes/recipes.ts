import recipesService from "../services/recipes.ts";
import { Router } from "express";
import { errorParser, parseRecipeInput } from "../middleware.ts";

const router = Router();

router.get("/", async (_req, res) => {
  const entries = await recipesService.getAll();
  return res.status(200).json(entries);
});

router.post("/", parseRecipeInput, async (req, res) => {
  const entry = await recipesService.createRecipe(req.body);
  return res.status(201).json(entry);
});

router.use(errorParser);

export default router;
