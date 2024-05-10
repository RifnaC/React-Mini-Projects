import './App.css'
import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(5);
  const [numsAllowed, setNumsAllowed] = useState(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState(false);
  const [pswd, setPswd] = useState(" ");
  const [text,setText] = useState("Copy")
  const pswdGenerator = useCallback(()=>{
      let pass = '';
      let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numsAllowed) str += "0123456789"
      if(symbolsAllowed) str += "!@#$%^*()_+"
      for(let i=1; i<length; i++){
        const char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char)
      }
      setPswd(pass);
      setText("copy")
    },[length, numsAllowed, symbolsAllowed, text]
  )

  useEffect(()=>{
    pswdGenerator()
  },[length, numsAllowed, symbolsAllowed]);

  const copyPswdToClipboard = () =>{
    window.navigator.clipboard.writeText(pswd);
    setText("copied")
  }
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-3xl font-bold mb-2 text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'> 
        <input 
          type="text" 
          value={pswd} 
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly/>
        <button 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPswdToClipboard}>{text}</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={4} max={16} value={length} className='cursor-pointer' onChange={(e)=>setLength(e.target.value)}/>
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={numsAllowed} className='cursor-pointer' onChange={(prev)=>setNumsAllowed(!prev)}/>
          <label htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={symbolsAllowed} className='cursor-pointer' onChange={(prev)=>setSymbolsAllowed(!prev)}/>
          <label htmlFor="symbol">Symbols</label>
        </div>
      </div>
    </div>
  )
}

export default App
