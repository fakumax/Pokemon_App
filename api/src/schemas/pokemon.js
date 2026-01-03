import { z } from 'zod';

export const pokemonSchema = z.object({
  name: z.string().min(1).max(50),
  life: z.number().int().positive().optional(),
  strength: z.number().int().positive().optional(),
  defense: z.number().int().positive().optional(),
  speed: z.number().int().positive().optional(),
  height: z.number().positive().optional(),
  weight: z.number().positive().optional(),
  img: z.string().url().optional(),
  types: z.array(z.number()).min(1),
});

export const pokemonUpdateSchema = pokemonSchema.partial();
