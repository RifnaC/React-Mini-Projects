// import { useEffect } from "react";
// import { useState } from "react"

import { useLoaderData } from "react-router-dom"


export default function Github() {
//   const [data, setData] =useState({});
//   useEffect(()=>{
//     fetch('https://api.github.com/users/RifnaC')
//     .then((response)=> response.json())
//     .then((res)=> {
//       console.log(res)
//       setData(res)})
//   },[data])
const data = useLoaderData()
  return (
    <div className="bg-gray-600 m-4 text-white p-4 text-3xl flex ">
      <div className="w-80">
        <img src={data.avatar_url} width={300} height={200} alt="" />
      </div>
      <div className="mx-4">
        <div>User Name: {data.login}</div>
        <div className="text-xl">Name : {data.name}</div>
        <div className="text-xl">Location : {data.location}</div>
        <div className="text-xl">Followers : {data.followers}</div>
        <div className="text-xl">Following : {data.following}</div>
      </div>
    </div>
  )
}


export const githubInfoLoader = async()=>{
  const response = await fetch('https://api.github.com/users/RifnaC')
  return response.json()
}