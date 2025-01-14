import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Landing from './components/Landing'
import Pricing from './components/Pricing'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/pricing" element={<Pricing/>}></Route>
      </Routes>
    </>
  )
}

export default App
