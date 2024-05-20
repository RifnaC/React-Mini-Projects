import { useState } from 'react'


function App() {
  const [color, setColor] = useState('white')


  return (
    <div className='w-full h-screen duration-2 bg-black' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black' onClick={()=>setColor("black")}>Black</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-gray-500' onClick={()=>setColor("gray")}>Gray</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-green-500' onClick={()=>setColor("#70AF85")}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-red-500' onClick={()=>setColor("#D37676")}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-violet-500' onClick={()=>setColor("#756AB6")}>Violet</button>
        </div>
      </div>

    </div>
  )
}

export default App
