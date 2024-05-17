import { useSelector } from "react-redux"


const Todo = () => {
    useSelector(state => state.todos)
  return (
    <div>Todo</div>
  )
}

export default Todo