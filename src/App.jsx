import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/pages/Home'
import About from './component/pages/About'
import Login from './component/pages/Login'
import Nav from './component/nav/Nav'

const App = () => {
  return (
   <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path='login' element={<Login/>}/>
    </Routes>
   </>
  )
}

export default App
