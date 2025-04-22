import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Achievements from './components/Achievements'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/education' element={<Education />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/achievements' element={<Achievements />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
