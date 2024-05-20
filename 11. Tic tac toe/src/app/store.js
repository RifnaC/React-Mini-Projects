import { configureStore } from "@reduxjs/toolkit";
import ticTacToeReducer from '../feature/TicTacToeSlice'

export const store = configureStore({
    reducer: {
        ticTacToe: ticTacToeReducer,
    },
})