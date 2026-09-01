import { z } from "zod";

export const RecipeInputSchema = z.object({
  name: z.string().min(1),
});

export type RecipeInput = z.infer<typeof RecipeInputSchema>;
