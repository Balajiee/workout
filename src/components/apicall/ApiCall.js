import './ApiCall.css'
import React,{useEffect, useState} from 'react';
const url='https://jsonplaceholder.typicode.com/users'

export default function ApiCall() {
    const [state,SetState]=useState()
    console.log(state);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(response=> SetState(response))
       
    },[])
  return (
    <div>
        <h1>API-CALL</h1>
        <ul>
            {state.map((item)=>(
                <>
                <li key={item.key}>{item.name}</li>
                <li key={item.key}>{item.username}</li>
                </>
            ))}
        </ul>
    </div>
  )
}


