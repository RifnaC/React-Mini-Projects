
// eslint-disable-next-line react/prop-types
const CardContainer = ({name, position, img}) => {
  return (
    <>
        <li>
            <div className="flex items-center gap-x-6">
                {img ? <img className="h-16 w-16 rounded-full" src={img} alt=""/>:<img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>}
                <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{position}</p>
                </div>                
            </div>
        </li>
    </>
  )
}

export default CardContainer