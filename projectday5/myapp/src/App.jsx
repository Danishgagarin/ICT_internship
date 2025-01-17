import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Add from './components/Add'
import View from './components/View'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <div>
      
      <Navbar/>
      <Routes>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/view" element={<View />}></Route>
          <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
