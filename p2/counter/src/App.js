import React, { useState } from 'react'

export default function App() {
let [count,setCount]=useState(0)
const add = () =>{
count ++;
setCount(count);
}
const sub = () =>{
  count--;
  setCount(count);
}
  return (
    <>
    <h1> Counter:{count}</h1>
<div>
  <button onClick={add}>
    increase
  </button>
  <button onClick={sub}>
    decrease
  </button>
</div>
    </>
  )
}
