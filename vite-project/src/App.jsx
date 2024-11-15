import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './navbar.jsx'
import CollapsibleExample from './navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CollapsibleExample/>
    </>
  )
}

export default App
