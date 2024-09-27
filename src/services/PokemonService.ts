// import axios from "axios";
import { setPokemons, startLoadingPokemons } from "../store/slices/pokemonSlice";
import { AppDispatch, RootState } from "../store/store";
import { ResponsePokemonSchema } from "../schema/pokemonSchema";
import { apiGet } from "./apiService";

export const getPokemonApi = (page: number = 0) => {
    console.log('page :', page);
    return async (dispatch: AppDispatch, _getState: () => RootState) => {
        dispatch(startLoadingPokemons());
        const pokemonsUrl: string = `/pokemon?limit=10&offset=${page * 10}`;

        const { data } = await apiGet(pokemonsUrl);

        const result = ResponsePokemonSchema.safeParse(data)
        if (result.success) {
            const pokemons = result.data.results;
            dispatch(setPokemons({
                pokemons,
                page: page + 1
            }))
        } else {
            // dispatch(startLoadingPokemons());
        }
    }
};
