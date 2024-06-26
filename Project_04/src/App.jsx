import { useCallback, useEffect, useRef, useState } from "react"


function App() {
  const [length,setLength] = useState(8);
  const [useNumbers , setUseNumbers] =useState(false);
  const [useChars,setUseChars] = useState(false);
  const [Password , setPassword] = useState("");
  const passwordRef = useRef(null)
// To optimize the Project
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwxyz";
    if(useNumbers){
      str += "123456789";
    }else if(useChars){
      str += "!@#$%^&*()_+-={}[]/><.,";
    }
    for( let i = 1; i<=length;i++){
      let char = Math.floor( Math.random()*str.length + 1); //taking random char from str 
      pass += str.charAt(char);  //appending the random char from str len
    }
    setPassword(pass);
  },[length,useNumbers,useChars,setPassword]);
  
  const copyToClipBoard = useCallback(()=>{
    passwordRef.current.select();
    window.navigator.clipboard.writeText(Password)
  },[Password])

  // To Run The Project
  useEffect(()=>{
    passwordGenerator();
  },
  [useNumbers,useChars,length,passwordGenerator])

  return (
    
    // Basic UI for password generator
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value = {Password}
           className="outline-none w-full py-1 px-3"
            placeholder = "password" readOnly ref={passwordRef}/>
            <button  className= " hover:bg-blue-600 outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyToClipBoard}>Copy</button>
      </div>
      {/* for Length Range */}
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" min={6} max={50} value={length} className="cursor-pointer" onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length: {length}</label>
        </div>
        {/* for NumberIncluded check box */}

        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={useNumbers} id="numberInput" onChange={()=>{setUseNumbers(prev => !prev) }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        {/* For Chars Inclusion checkbox */}
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={useChars} id="charsInput" onChange={()=>{setUseChars(prev => !prev) }} />
          <label htmlFor="charsInput">Characters</label>
        </div>


      </div>
     </div>
    
  )
}

export default App
