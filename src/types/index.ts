import { z } from "zod";
import { PokemonSchema, ResponsePokemonSchema } from "../schema/pokemonSchema";

export type PokemonSliceType = {
    page: number,
    pokemons: Pokemon[],
    loading: boolean
}

export type Pokemon = z.infer<typeof PokemonSchema>

export type ResponsePokemon = z.infer<typeof ResponsePokemonSchema>;