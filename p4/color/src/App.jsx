import { useState } from 'react'
import './App.css'

export default function App() {
  let [color,setColor] = useState("green")
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-9 inset-x-0 px-2'>
      <div className='justify-center flex flex-wrap bg-black px-2 py-3 rounded-3xl'>
        <button onClick={()=>{setColor("red")}}className='outline-none  m-3 px-4 py-1 rounded-full text-white' style={{backgroundColor:"red"}}>
        R
        </button>
        <button onClick={()=>{setColor("GREEN")}} className='outline-none px-4 m-3 py-1 rounded-full text-white' style={{backgroundColor:"green"}}>
        G 
        </button>
        <button onClick={()=>{setColor("BLUE")}} className='outline-none px-4 py-1  m-3 rounded-full text-white' style={{backgroundColor:"blue"}}>
          B
        </button>
        <button onClick={()=>{setColor("YELLOW")}} className='outline-none px-4 py-1 m-3 rounded-full text-white' style={{backgroundColor:"yellow"}}>
          Y
        </button>
      </div>
      </div>
    </div>
  )
}