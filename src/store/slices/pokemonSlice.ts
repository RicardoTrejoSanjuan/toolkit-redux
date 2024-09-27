import { createSlice } from '@reduxjs/toolkit';
import { PokemonSliceType } from '../../types';

const initialState: PokemonSliceType = {
    page: 0,
    pokemons: [],
    loading: false
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        startLoadingPokemons: (state) => {
            state.loading = true
        },
        setPokemons: (state, actions) => {
            state.loading = false;
            state.page = actions.payload.page;
            state.pokemons = actions.payload.pokemons;
        }
    },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions
