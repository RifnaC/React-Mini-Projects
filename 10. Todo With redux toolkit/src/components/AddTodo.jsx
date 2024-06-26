import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/TodoSlice'


const AddTodo = () => {
    const [data, setData] = useState('');
    const dispatch = useDispatch();
    function handleSubmit(e){
        e.preventDefault();
        dispatch(addTodo(data));
        setData('')
    }
  return (
    <>
      <form onSubmit={handleSubmit} className='space-x-3 mt-12'>
        <input 
        type='text' 
        className='bg-gray-800 rounded border border-gray-700 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-out'
        placeholder='Enter a Todo ...' 
        value={data} 
        onChange={(e)=>setData(e.target.value)}/>
        <button type='submit' 
        className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>Add Tod</button>
      </form>
    </>
  )
}

export default AddTodo