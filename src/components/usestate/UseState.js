// Hooks can use inside the function
// cannot use in class components
// cannot put in ifelse condition
// cannot put in loops
// cannot nested anything

// explaination of usestate
// const [state,setState]=useState(4)
//   state= currentstate here current state is 4
//   setState=update the current state
//   4=is default value ,can use other function as default,
//   cannot use function in usestate(here) becoz the function isnt run in background



import "./UseState.css"

import React,{useState} from 'react';

export default function UseState() {
    const [count,setCount]=useState(4)
  const [theme,setTheme]=useState("blue")
  console.log(count);

  function increaseCount() {
    setCount(PrevState=>PrevState+1)
  }
  function decreaseCount() {
    setCount(PrevState=>PrevState-1)
    setTheme("red")   }
  return (
    <div className="edit">
      <button className='btn' onClick={increaseCount}>+</button>
      <span >{count}</span>
      <span >{theme}</span>
      <button className='btn'onClick={decreaseCount}>-</button>
    </div>
  )
}
