import { useCallback, useRef, useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  let [length, setLength] = useState(8)
  let [number,setNumber] =useState(false)
  let [char,setChar] =useState(false)
  let [password,setPassword] = useState("")

  const passwordRef = useRef(null)

  const passGenerate= useCallback(()=>{
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str+="0123456789"
    if (char) str+="[]{}<>/=-+_#$%^"
  for (let i = 1; i <= length; i++) {
    let char =Math.floor(Math.random()*str.length +1);
    pass += str.charAt(char);
  }
  setPassword(pass)
  },[length,number,char,setPassword])


  const copyPaste =useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)},[password])

  useEffect(()=>{passGenerate()},[length,number,char,passGenerate])
  return (
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-900'>
      <h1 className='text-white text-center my-2'>PASSWORD GENERATOR</h1>
      <div className='flex shadow-sm rounded-lg overflow-hidden mb-4'>
        <input type ="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref ={passwordRef}
        />
        <button onClick ={copyPaste} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>COPY</button>
      </div>
      < div className='flex text-sm gap-x-2'>
      <div className='flex text-sm gap-x-1'>
        <input type="range" 
        min ={6}
        max ={20}
        value ={length}
        className='cursor-pointer' 
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label>length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input type ="checkbox" 
      defaultChecked={number} 
      id="numberInput" 
      onChange={()=>{
        setNumber((prev)=>!prev);
      }}
      />
      <label htmlFor='numberInput'>NUMBERS</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type='checkbox' defaultChecked={char} id="charInput"
        onChange={()=>{
          setChar((prev)=>!prev);
        }}
        />
      <label htmlFor='charInput'> CHARACTERS</label>
      </div> 
      </div>
      </div>
  )
}

export default App
