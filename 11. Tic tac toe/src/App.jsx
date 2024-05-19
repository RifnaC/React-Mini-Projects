import { useState } from 'react';
import './App.css'
import Square from './components/Square'

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-bold my-2 ">Tic Tac Toe</div>
      <div className='flex'>
        <Square value={squares[0]}/> 
        <Square value={squares[1]}/>
        <Square value={squares[2]}/>
      </div>
      {/* <div className='flex'>
        <Square value={squares[3]}/> 
        <Square value={squares[4]}/>
        <Square value={squares[5]}/>
      </div> */}
      {/* <div className='flex'>
        <Square value={squares[6]}/> 
        <Square value={squares[7]}/>
        <Square value={squares[8]}/>
      </div> */}
    </div>
  )
}

export default App
