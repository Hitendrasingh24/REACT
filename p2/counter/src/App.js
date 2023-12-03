import './App.css'
import { useState } from 'react';
function App() {
let [count ,setCount]=useState(1);
const Add =() =>{
  count=count+1;
  if(count>20){
    count =20;
  }
  setCount(count);
}
const DEC =()=>{
  count=count-1;
  if(count<0){
    count= 0;
  }
  setCount(count);
}
  return (
    <>
    <h1>
      HELLO
    </h1>
    <h2>
      Count: {count}
    </h2>
    <button onClick={Add}>
      Increase:</button>
    <br/>
    <button onClick={DEC}>Decrease:</button>
    </>
  )
}

export default App
