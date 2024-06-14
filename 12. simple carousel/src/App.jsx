import { Carousel } from '@material-tailwind/react'
import './App.css'
import Card from './component/Card'
import { datas } from './data/initialData'

function App() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Carousel className="rounded-xl bg-hero object-cover">
        {datas.map((data) => <Card key={data.id} first_name={data.first_name} last_name={data.last_name} email={data.email} gender={data.gender} ip_address={data.ip_address} />
        )}
      </Carousel>
    </div>
  )
}

export default App
