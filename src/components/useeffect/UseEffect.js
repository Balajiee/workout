// useEffect(()=>{
//     every single time updates when app renders
// console.log("useEffect");
// every time render when app is reloaded
// })


import React,{useEffect, useState}from 'react'

export default function UseEffect() {
    const[resourceType,setResourceType]=useState("post")
    useEffect(()=>{
        console.log("balaji");
    })
  return (
    <div>
        <button onClick={()=>setResourceType("Posts")}>Posts</button>
        <button onClick={()=>setResourceType("Users")}>Users</button>
        <button onClick={()=>setResourceType("Comments")}>Comments</button>
        <div>
            <h1>{resourceType}</h1>
        </div>
    </div>
  )
}
