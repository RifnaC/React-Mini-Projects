import { configureStore } from "@reduxjs/toolkit";
import ticTacToe from '../feature/TicTacToeSlice'

export const store = configureStore({
    reducer: ticTacToe,
})