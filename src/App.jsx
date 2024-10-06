import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Gallery from './Components/Gallery'
import About from './Components/About'
import Contact from './Components/Contact'
import { Route, Routes } from 'react-router-dom'
import Vanue from './Components/Vanue'
const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>        
        <Route path="/about" element={<About />}></Route>        
        <Route path="/vanue" element={<Vanue />}></Route>        
        <Route path="/gallery" element={<Gallery />}></Route>        
        <Route path="/contact" element={<Contact />}></Route>        
      </Routes>     
      <Footer></Footer>
    </>
  )
}

export default App
