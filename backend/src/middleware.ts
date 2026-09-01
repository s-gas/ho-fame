import type { Request, Response, NextFunction } from "express";
import { RecipeInputSchema } from "./types.ts";
import { z }  from "zod";

export const parseRecipeInput = (req: Request, _res: Response, next: NextFunction) => {
  try {
    RecipeInputSchema.parse(req.body);
    next();
  } catch (err) {
    next(err);
  }
};

export const errorParser = (error: unknown, _req: Request, res: Response, next: NextFunction) => {
  if (error instanceof z.ZodError) {
    res.status(400).json({ error: error.issues });
  } else {
    next(error);
  }
};
