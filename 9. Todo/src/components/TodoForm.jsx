import { useState } from "react"
import { useTodo } from "../contexts"

const TodoForm = () => {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo();
    
    const add = (e) =>{
        e.preventDefault();
        if(!todo)return 
        addTodo({todo, completed:false})
        setTodo('')
    }
  return (
    <form onSubmit={add} className="flex">
        <input type="text" 
            placeholder="Enter the Todo"
            className="w-full border border-black/10
            rounded-1-19 px-3 outline-none duration-150 bg-white"
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
        />
        <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 Itext-white shrink-0">+</button>
    </form>
  )
}

export default TodoForm