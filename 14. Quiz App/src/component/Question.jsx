/* eslint-disable react/jsx-key */
import { useState } from 'react';
import { questions } from '../data/question'

const Question = () => {
  const [i, setI] = useState(0)
  const [isChecked, setIsChecked] = useState(false);
  const [question, setQuestion] = useState(questions[i])
  const [success, setSuccess] =useState(false)

  function handleChangeEvent (e){
    setIsChecked(e.target.checked);
  }
  const handleSumbit = (e) => {
    e.preventDefault();
    if(i<3){
      setI(i+1)
      setQuestion(questions[i]) 
    }else{
      setSuccess(true);
    }
    
    

  }
  return (
    < div >
    <form className='border-2 w-120 h-40' onSubmit={handleSumbit}>
      <p className='font-bold mx-2 my-4'>{i}.{question.question}</p>
      {question.options.map(option => (
        <label htmlFor={option} key={option} >
          <input type="checkbox" className='m-2' name={option} checked={isChecked} onChange={handleChangeEvent} />
          {option}
        </label>))
      }
      <div className='flex justify-center mt-3  '>
      <button type="submit" className='border-2 p-2'>sumbit</button>
      </div>
    </form>
    
    </div >
  )
}

export default Question