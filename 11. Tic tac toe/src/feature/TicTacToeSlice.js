import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    board: Array(9).fill(null),
    xIsNextPlayer: true,
    winner: null,
}


const calculateWinner = (board) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if(board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}


export const ticTacToeSlice = createSlice({
    name: "ticTacToe",
    initialState,
    reducers: {
        makeMove: (state, action) => {
            const {index} = action.payload
            if (state.board[index] || state.winner) return;
            state.board[index] = state.xIsNextPlayer ? "X" : "O";
            state.xIsNextPlayer = !state.xIsNextPlayer;
            state.winner = calculateWinner(state.board);
        },
        resetGame: (state) => {
            state.board = Array(9).fill(null);
            state.xIsNextPlayer = true;
            state.winner = null;
        },
    },
});

export const { makeMove, resetGame } = ticTacToeSlice.actions;
export default ticTacToeSlice.reducer;