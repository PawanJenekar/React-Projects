import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter] = useState(0);
 let AddValue = () =>{
  counter = counter + 1;
 
  setCounter(counter)
  console.log("Clicked " + counter);
 }

 let DecValue = () => {
  if(counter > 0)
    {
      counter = counter - 1;
      setCounter(counter)
    }else{
      setCounter(0)
    }
  console.log("Clicked " + counter);

 }

  return (
    <>
     <div>
      <h1> Counter  : {counter}</h1>
      <button onClick={AddValue}>ADD </button>
      
      <button onClick={DecValue}>DECREMENT </button>
     </div>
    </>
  )
}

export default App
