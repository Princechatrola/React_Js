import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Navbar from './pages/navbar.jsx'
import {Navigate} from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<Navigate to="/contact" />} />
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App
