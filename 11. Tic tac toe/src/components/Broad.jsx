import Square from './Square'

const Broad = () => {
    const renderedSquare = (i)=>{
        return <Square index = {i}/>
      }
      return (
        <div className="flex flex-col">
          <div className="text-2xl font-bold my-2 text-center">Tic Tac Toe</div>
          <div className='flex'>
            {renderedSquare(0)}
            {renderedSquare(1)}
            {renderedSquare(2)}
          </div>
          <div className='flex'>
            {renderedSquare(3)}
            {renderedSquare(4)}
            {renderedSquare(5)}
          </div>
          <div className='flex'>
            {renderedSquare(6)}
            {renderedSquare(7)}
            {renderedSquare(8)}
          </div>
        </div>
      )
}

export default Broad