function InputBox({
    label, 
    amt, 
    onAmtChange, 
    onCurrencyChange, 
    currencyOptions = [],
    selectedCurrency = "usd",
    amtDisabled = false,
    currencyDisabled = false,
    className="",
  }) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1-2'>
            <label className='text-black/40 mb-2 inline-block'>{label}</label>
            <input 
                type="number" 
                className='outline-none w-full bg-transparent py-1.5'
                placeholder="Amount"
                disabled={amtDisabled}
                value={amt}
                onChange={(e)=>{onAmtChange && onAmtChange(Number(e.target.value))}}
            />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">Currency type</p>
            <select 
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                value={selectedCurrency}>
                
            </select>
        </div>
    </div>
  )
}

export default InputBox