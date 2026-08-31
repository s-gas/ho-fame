import recipesService from "../services/recipes.ts";
import { Router } from "express";

const router = Router();

router.get("/", async (_req, res) => {
  const entries = await recipesService.getAll();
  console.log(entries);
  return res.status(200).json(entries);
});

router.post("/", async (req, res) => {
  const entry = await recipesService.createRecipe(req.body);
  return res.status(201).json(entry);
})

export default router;
