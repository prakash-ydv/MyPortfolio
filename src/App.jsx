import React from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Aboutme from './components/Aboutme'
import Experience from './components/Experience'
import Stats from './components/Stats'

function App() {
  return (
    <div className='bg-black'>
      <Nav />
      <Hero />
      <Aboutme />
      <Experience />
      <Stats />
    </div>
  )
}

export default App
