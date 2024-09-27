import { z } from "zod";


export const PokemonSchema = z.object({
    name: z.string(),
    url: z.string(),
})

export const ResponsePokemonSchema = z.object({
    count: z.number(),
    next: z.string(),
    previous: z.string().nullable(),
    results: z.array(PokemonSchema)
})
