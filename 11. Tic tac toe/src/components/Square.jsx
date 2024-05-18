import { useDispatch, useSelector } from "react-redux"
import { isNextPlayer } from "../feature/TicTacToeSlice";

const Square = () => {
    const value = useSelector((state)=> state.value)
    const dispatch = useDispatch();
    function nextPlayer (){
        dispatch(isNextPlayer(value))

    }
  return (
    <>  
        <button className="border-2 border-black border-e-1 py-1 px-3" 
        onClick={nextPlayer} >{value}</button>
    </>
    
  )
}

export default Square