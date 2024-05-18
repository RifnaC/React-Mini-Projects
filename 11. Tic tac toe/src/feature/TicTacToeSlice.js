import { createSlice } from "@reduxjs/toolkit";

export const ticTacToeSlice = createSlice({
    name: "ticTacToe",
    initialState: {
        value: [],
    },
    reducers: {
        isNextPlayer: (state) => {
            state.value = [...state.value];
        },
    },
});

export const { isNextPlayer } = ticTacToeSlice.actions;
export default ticTacToeSlice.reducer;