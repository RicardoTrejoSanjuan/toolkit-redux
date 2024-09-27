import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 10,
    },
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        incrementBy: (state, action: PayloadAction<number>) => {
            state.counter += action.payload
        },
        decrement: (state) => {
            state.counter -= 1;
        },
    },
})

export const { increment, incrementBy, decrement } = counterSlice.actions;