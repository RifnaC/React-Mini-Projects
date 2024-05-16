import { useState, useEffect } from "react";
import './App.css'
import { TodoProvider } from './contexts/todoContext'
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo)=>{
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo)=> {
    setTodos((prev) => prev.map( (prevTodo) => {prevTodo.id === todo.id ? todo: prevTodo;}))
  }

  const removeTodo = (id)=>{
    setTodos((prev)=>prev.filter((prevTodo)=> prevTodo.id !== id))
  }

  const toggleTodo = (id) =>{
    setTodos((prev)=>
      prev.map((prevTodo) =>
        prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo)
    )
  }

  useEffect(()=>{
    const todo = JSON.parse(localStorage.getItem("todos"))
    setTodos(todo)
  },[]);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos]);

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, removeTodo, toggleTodo}}>
      <TodoForm />
    </TodoProvider>
  )
}

export default App
