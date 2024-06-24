import { useState } from "react"


function App() {
 const [color,setColor] =  useState("Cyan")

  return (
    <>
      <div className="w-full h-screen duration-300" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button   onClick={()=>{setColor("red")}}   className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
            <button   onClick={()=>{setColor("green")}}   className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
            <button   onClick={()=>{setColor("cyan")}}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"cyan"}}>Cyan</button>
            <button   onClick={()=>{setColor("Blue")}}   className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Blue"}}>Blue</button>
            <button   onClick={()=>{setColor("Purple")}}   className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Purple"}}>Purple</button>
            <button   onClick={()=>{setColor("Brown")}}   className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Brown"}}>Brown</button>
            <button   onClick={()=>{setColor("Black")}}   className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Black"}}>Black</button>
            <button   onClick={()=>{setColor("Olive")}}   className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Olive"}}>Olive</button>
            <button   onClick={()=>{setColor("Silver")}}   className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Silver"}}>Silver</button>
            <button onClick={()=>{setColor("Yellow")}} className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:"Yellow"}}>Yellow</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
