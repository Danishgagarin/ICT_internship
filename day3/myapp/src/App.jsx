import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import State from './components/State'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Counter from './components/Counter'
import Welcome from './components/Welcome'
import Api from './components/Api'
import Cardget from './components/Cardget'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div>
        <img src="https://assets.aboutamazon.com/dims4/default/74c7491/2147483647/strip/true/crop/665x200+0+0/resize/300x90!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fae%2F22%2F21fcc46d46c7a5b04ce83151964c%2Famazonin-logo.jpg" alt="amaon"></img>
      </div>
      <Routes>
        <Route path="/log" element={<Login />}></Route>
        <Route path="/sign" element={<SignUp />}></Route >
        <Route path="/state" element={<State />}></Route >
        <Route path="/counter" element={<Counter />}></Route >
        <Route path="/welcome" element={<Welcome />}></Route >
        <Route path="/cardget" element={<Cardget/>}></Route >
        <Route path="/api" element={<Api />}></Route >

      </Routes >
    </>
  )
}

export default App
