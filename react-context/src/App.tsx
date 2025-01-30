import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewContext from './assets/NewContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NewContext />
    </>
  )
}

export default App
