/* eslint-disable react/jsx-key */
import profile from "../assets/profile.jpg"
import post from "../assets/img1.jpg"
import { ChatBubbleBottomCenterTextIcon, HeartIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from "react"


const Card = () => {
    const [count, setCount] = useState(0);
    const [icon, setIcon] = useState(<HeartIcon className="w-8 h-8 " />)
    const [text, setText] = useState('');
    const [comment, setComment] = useState([])
    const [isFormVisible, setIsFormVisible] = useState(false);

    useEffect(() => {
        const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
        console.log(storedComments)
        setComment(storedComments);
    }, [])
    const likeCounter = () => {
        setCount(count + 1)
        setIcon(<HeartIcon className="w-8 h-8 fill-[#e31b23] text-[#e31b23]" />)
    }

    const handleComment = () => {
        setIsFormVisible(true);
    }


    const handleSumbit = (e) => {
        e.preventDefault();
        if (text === "") return;
        if (text.trim()) {
            const newComment = [...comment, text];
            setComment(newComment);
            localStorage.setItem("comments", JSON.stringify(newComment));
            setText('');
            setIsFormVisible(false);
        }
    }
    console.log(comment)

    return (
        <div className="flex flex-col ">
            <div className='bg-gray-800 rounded-t-lg w-80 h-80 text-gray-50 '>
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
                        <p className="m-1 text-lg">{count} Likes</p>
                    </div>
                    <button onClick={handleComment}>
                        <ChatBubbleBottomCenterTextIcon className="w-8 h-8" />
                    </button>
                </div>

            </div>
            <div className='bg-[#f3f1f144] w-80 h-60  px-3'>
                <h1 className="text-black m-2 -px-2 font-medium text-lg">Comments</h1>
                <hr />
                {isFormVisible && (
                    <form onSubmit={handleSumbit} className="flex justify-between my-2 bg-transparent border-2 border-gray-50">
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="py-1  p-2 w-full" />
                        <input type="submit" className="border-2 p-1 border-gray-50 hover:border-gray-950" value='Post' />
                    </form>)
                }
                {comment && comment.map((comment) => <div className='mx-2 my-2 border-2 p-2'>{comment}</div>)}
            </div>
        </div>

    )
}

export default Card