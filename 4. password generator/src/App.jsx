import './App.css'
import { useState} from "react";

function App() {
  const [length, setLength] = useState(3);
  const [numsAllowed, setNumsAllowed] = useState(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState(false);
  const [pswd, setPswd] = useState(" ")
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-3xl font-bold mb-2 text-center'>Password Generator</h1>
      
    </div>
  )
}

export default App
