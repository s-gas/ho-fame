import recipesService from "../services/recipes.ts";
import { Router } from "express";

const router = Router();

router.get("/", async (_req, res) => {
  const entries = await recipesService.getAll();
  return res.json(entries);
})

export default router;
