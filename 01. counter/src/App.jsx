
import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount]=useState(0);

  const incrementCount = ()=>{
    setCount(count+1);
  }
  const decrementCount = ()=>{
    setCount(count-1);
    
  }
  return (
   <div className="container">
      <h1>Counter</h1>
      <div className="card-container">
        <button onClick={incrementCount}>+</button>
        <p>{count}</p>
        <button onClick={decrementCount}>-</button>
      </div>
   </div>
    
   
  )
}

export default App
