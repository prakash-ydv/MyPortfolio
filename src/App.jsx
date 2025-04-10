import React from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Aboutme from './components/Aboutme'

function App() {
  return (
    <div className='bg-black'>
      <Nav />
      <Hero />
      <Aboutme />
    </div>
  )
}

export default App
