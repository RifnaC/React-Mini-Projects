import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos: [{
        id: 1,
        title: "Todo 1"
    }],
};

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find((todo)=>todo.id === action.payload.id);
            todo.title = action.payload.title;
        }
    }
});

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer