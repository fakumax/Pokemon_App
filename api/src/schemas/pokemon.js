import { z } from 'zod';

export const pokemonSchema = z.object({
  name: z.string().min(1).max(50),
  life: z.number().int().nonnegative().optional(),
  strength: z.number().int().nonnegative().optional(),
  defense: z.number().int().nonnegative().optional(),
  speed: z.number().int().nonnegative().optional(),
  height: z.number().nonnegative().optional(),
  weight: z.number().nonnegative().optional(),
  img: z.string().url().optional().nullable().or(z.literal('')),
  types: z.array(z.number().int()).min(1).max(2), // Array de números (IDs de tipo)
});

export const pokemonUpdateSchema = pokemonSchema.partial();
