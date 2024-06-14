/* eslint-disable react/prop-types */
import '../App.css'
const Card = ({ first_name, last_name, email, gender, ip_address}) => {
    return (
        <div className="flex justify-center text-wrap items-center w-1/2 mx-auto h-screen">
            <div className='bg-gray-100 p-8 text-lg font-semibold'>
              <h3>Full Name : <span className="font-medium">{first_name} {last_name}</span></h3>
              <p>Email : <span className="font-medium">{email}</span> </p>
              <p>Gender : <span className="font-medium">{gender}</span> </p>
              <p>IP Address : <span className="font-medium">{ip_address}</span></p>
            </div>
          </div>
    )
}

export default Card