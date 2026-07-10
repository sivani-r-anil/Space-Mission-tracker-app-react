import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddMission from './components/AddMission'
import DeleteMission from './components/DeleteMission'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddMission/>
      <DeleteMission/>
    </>
  )
}

export default App
