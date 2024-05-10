import './App.css'
import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(5);
  const [numsAllowed, setNumsAllowed] = useState(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState(false);
  const [pswd, setPswd] = useState(" ");
  const [text,setText] = useState("Copy");
  const pswdRef = useRef(null);

  const pswdGenerator = useCallback(()=>{
      let pass = '';
      let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numsAllowed) str += "0123456789"
      if(symbolsAllowed) str += "!@#$%^*()_+"
      for(let i=0; i<length; i++){
        const char = Math.floor(Math.random() * str.length );
        pass += str.charAt(char)
      }
      setPswd(pass);
      setText("copy")
    },[length, numsAllowed, symbolsAllowed]
  )

  useEffect(()=>{
    pswdGenerator()
  },[length, numsAllowed, symbolsAllowed]);

  const copyPswdToClipboard = () =>{
    window.navigator.clipboard.writeText(pswd);
    pswdRef.current?.select();
    setText("copied")
  }
  return (
    <div className='w-full h-full flex flex-col items-center my-auto justify-center '>
      <div className='max-w-md mx-auto shadow-md rounded-lg px-8 py-8  bg-gray-900 text-orange-500'>
      <div>
        <h1 className='text-3xl font-bold mb-2 text-center my-3'>Password Generator</h1>
      </div>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'> 
        <input 
          type="text" 
          value={pswd} 
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={pswdRef}/>
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
          <input type="checkbox" defaultChecked={numsAllowed} className='cursor-pointer' onChange={(prev)=>setNumsAllowed(prev.target.checked)}/>
          <label htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={symbolsAllowed} className='cursor-pointer' onChange={(prev)=> setSymbolsAllowed(prev.target.checked)}/>
          <label htmlFor="symbol">Symbols</label>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
