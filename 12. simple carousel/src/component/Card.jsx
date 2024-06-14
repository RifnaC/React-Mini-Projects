/* eslint-disable react/prop-types */
import '../App.css'
const Card = ({ name, email, gender }) => {
    console.log("name", name)
    return (
        <>
            <div className='text-center mt-8'>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <p>{email}</p>
                <p>{gender}</p>
            </div>


        </>
    )
}

export default Card