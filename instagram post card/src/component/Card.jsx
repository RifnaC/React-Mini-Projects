/* eslint-disable react/jsx-key */
import profile from "../assets/profile.jpg"
import post from "../assets/img1.jpg"
import { ChatBubbleBottomCenterTextIcon, HeartIcon } from '@heroicons/react/24/outline'
import { useState } from "react"


const Card = () => {
    const [count, setCount] = useState(0);
    const [icon, setIcon] = useState(<HeartIcon className="w-8 h-8 " />)
    const [text, setText] = useState('');   
    const [comment, setComment] = useState([])
    const [isFormVisible, setIsFormVisible] = useState(false);

    const likeCounter = () => {
        setCount(count + 1)
        setIcon(<HeartIcon className="w-8 h-8 fill-[#e31b23] text-[#e31b23]" />)
    }

    const handleComment = () => {
        setIsFormVisible(true);
    }


    const handleSumbit = (e) => {
        e.preventDefault();
        setComment()
        localStorage.setItem("comments", comments);
        setIsFormVisible(false);
    }
    const postComments = localStorage.getItem("comments");
    console.log(postComments)

    return (
        <>
        <div className='bg-gray-800 rounded-lg w-80 h-80 text-gray-50 '>
            <div className="flex py-2">
                <img src={profile} alt="profile" className=" mx-2 w-8 h-8 rounded-full" />
                <p className="mt-1">rifna</p>
            </div>
            <img src={post} alt="" className="w-80 h-56 " />
            <div className="flex justify-between m-2">
                <div className="flex">
                    <button onClick={likeCounter}>
                        {icon} 
                    </button>
                    <p className="m-1 text-lg">{count}</p>
                </div>
                <button onClick={handleComment }>
                    <ChatBubbleBottomCenterTextIcon className="w-8 h-8" />
                </button>
            </div>

        </div>
        <div>
            <h1>Comments</h1>
            {postComments.map((comment) => <div>{comment}</div>)}
            
        </div>
        {isFormVisible && (<form onSubmit={handleSumbit}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <input type="submit" value='submit' /> 
            </form>)
        }

        </>
        
    )
}

export default Card