import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

 function App() {
  const [amt, setAmt] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmt, setConvertedAmt] = useState();
  // custom hook
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  console.log("options:", Object.keys(currencyInfo));


  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmt(amt)
    setAmt(convertedAmt)
  }
  const convert = () =>{
    setConvertedAmt(amt * currencyInfo[to])
  }

  return (
    <div className="w-full h-screen flex flex-wrap items-center justify-center  bg-cover  bg-no-repeat " style={{backgroundImage:`url("https://images.pexels.com/photos/259234/pexels-photo-259234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}>
      <div className='w-full'> 
        <div className='w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e)=>{
            e.preventDefault()
            convert();
          }}>
            <div className='w-full mb-1'>
            <InputBox 
            label="From"
            amt={amt}
            onAmtChange= {(amount)=> setAmt(amount)}
            onCurrencyChange= {(currency)=>setFrom(currency)}
            currencyOptions = {options}
            selectedCurrency ={from}
            className=""/>
            </div>
            <div className='relative w-full h-0.5'>
              <button
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}>
                Swap
              </button>
            </div>
            <div className='w-full mb-1'>
            <InputBox 
            label="To"
            amt={convertedAmt}
            onAmtChange= {(amount)=> setAmt(amount)}
            onCurrencyChange= {(currency)=>setTo(currency)}
            currencyOptions = {options}
            selectedCurrency ={to}
            amtDisabled={true}
            className=""/>
            </div>
            <button 
            type="submit"
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
