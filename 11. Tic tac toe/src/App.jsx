import './App.css'
import Square from './components/Square'

function App() {

  return (
    <div className="flex flex-col">
      <div className="text-2xl font-bold my-2 ">Tic Tac Toe</div>
      <div>
        <Square /> 
        <Square />
        <Square />
      </div>
      <div>
        <Square /> 
        <Square />
        <Square />
      </div>
      <div>
        <Square /> 
        <Square />
        <Square />
      </div>
    </div>
  )
}

export default App
