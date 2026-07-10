import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddMission from './components/AddMission'
import DeleteMission from './components/DeleteMission'
import SearchMission from './components/SearchMission'
import ViewMission from './components/ViewMission'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddMission />} />
          <Route path='/search' element={<SearchMission />} />
          <Route path='/delete' element={<DeleteMission />} />
          <Route path='/view' element={<ViewMission />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
