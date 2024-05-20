import Board  from './Broad';
import { useDispatch, useSelector } from 'react-redux';
import { resetGame } from '../feature/TicTacToeSlice'


const TicTacToe = () => {
    const dispatch = useDispatch();
    const xIsNext = useSelector(state => state.ticTacToe.xIsNextPlayer);
    const winner = useSelector(state => state.ticTacToe.winner);
      
    const status = winner 
        ? `Winner: ${winner}`
        : `Next player: ${xIsNext ? 'X' : 'O'}`;
        return (
          <div>
            <div className='flex'>
              <Board />
            </div>
            <div className='p-2 text-center'>
              {winner && <div className='bg-green-400 py-2 font-bold mx-2'>{status}</div>}
              <button className='text-red-600 font-bold p-1' onClick={() => dispatch(resetGame())}>Restart Game</button>
            </div>
          </div>
        );
    };

export default TicTacToe