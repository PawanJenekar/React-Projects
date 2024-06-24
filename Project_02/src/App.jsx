import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './assets/components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 rounded-xl text-black p-4 mb-5'>Hello There!!</h1>
      <Cards userName="Pawan" btnText='Visitors '   img='https://img.freepik.com/free-photo/portrait-woman-working-dried-flowers-shop_23-2151362111.jpg?size=626&ext=jpg&ga=GA1.1.135134367.1719213207&semt=ais_user'/>
      <Cards userName="Jackson" btnText='visit Me'  img='https://cdn4.sharechat.com/LeahGotti_da3273_1658329816360_sc_cmprsd_75.jpg?tenant=sc&referrer=pwa-sharechat-service&f=rsd_75.jpg'/>
      <Cards/>
    </>
  )
}

export default App
