import { useDispatch, useSelector } from "react-redux"
import { makeMove } from "../feature/TicTacToeSlice";

// eslint-disable-next-line react/prop-types
const Square = ({index}) => {
  const dispatch = useDispatch();
  const value = useSelector(state=> state.ticTacToe.board[index])
  return (
    <>  
        <button 
        className="border-2 font-bold text-white border-black border-e-1 w-12 h-12 "
        onClick={()=>dispatch(makeMove({index}))}
        >{value}</button>
    </>
    
  )
}

export default Square