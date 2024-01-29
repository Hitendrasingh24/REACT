import React from 'react'
import { useContext } from 'react'
import { CounterContext } from './context/Counter'
export default function Counter() {
    const counterState = useContext(CounterContext);
  return (
    <div>
        <button onClick={()=>{counterState.setCount(counterState.count+1)}}>increment</button>
        <button  onClick={()=>{counterState.setCount(counterState.count-1)}}> decrement</button>

    </div>
  )
}
