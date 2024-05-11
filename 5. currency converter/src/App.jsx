// import { useState } from 'react'
import './App.css'
import { InputBox } from './components/InputBox'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="w-full h-screen flex flex-wrap items-center justify-center  bg-cover  bg-no-repeat " style={{backgroundImage:`url("https://images.pexels.com/photos/259234/pexels-photo-259234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}>
      <InputBox label="dd" amt={90} onAmtChange={30} onCurrencyChange="usd" currencyOptions = {[3,3]} selectedCurrency = "usd" amtDisabled = {false} currencyDisabled = {false} className="m-1"/>
    </div>
  )
}

export default App
