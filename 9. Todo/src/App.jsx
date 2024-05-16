import { useState, useEffect } from "react";
import './App.css'
import { TodoProvider } from './contexts/todoContext'
import TodoForm from "./components/TodoForm";
import { TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo)=>{
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo)=> {
    setTodos((prev) => 
      prev.map((prevTodo) =>
        prevTodo.id === id ? todo : prevTodo
    ))
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
      <div className="bg-[#172842] min-h-screen py-8 w-fu;">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Todo List</h1> 
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
