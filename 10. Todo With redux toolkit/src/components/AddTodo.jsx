import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/TodoSlice'


const AddTodo = () => {
    const [data, setData] = useState('');
    const dispatch = useDispatch(addTodo());
    function handleSubmit(e){
        e.preventDefault();
        dispatch(data);
        setData('')
    }
  return (
    <>
        <input value={data} onChange={(e)=>e.target.value}/>
        <button onClick={handleSubmit}>Add</button>
    </>
  )
}

export default AddTodo