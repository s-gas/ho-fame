import { Router } from "express";
import recipesService from "../services/recipes.ts";

const router = Router();

router.post("/", async (_req, res) => {
  await recipesService.reset();
  res.end();
});

export default router;
