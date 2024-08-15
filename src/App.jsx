import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='min-h-screen min-w-screen bg-gradient-to-b from-gray-800 to-black overflow-x-hidden text-neutral-200 antialiased selection:bg-cyan-400 selection:text-cyan-600'>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Education />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
