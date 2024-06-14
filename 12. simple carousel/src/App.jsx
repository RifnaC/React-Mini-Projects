import { Carousel } from '@material-tailwind/react'
import './App.css'
import Card from './component/Card'
import { datas } from './data/initialData'

function App() {
  return (
    <>
      <Carousel className="rounded-xl flex bg-gray-800 m-5 h-52 ">
        {datas.map((data) =>  <Card key={data.id} name={data.first_name} email={data.email} gender={data.gender} /> 
        )}

      </Carousel>

    </>
  )
}

export default App
