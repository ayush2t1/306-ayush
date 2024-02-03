import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Features from './Features'
import Products from './Products'
import Hero from './Hero'

const App = () => {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Slider/>
    <Features/>
    <Products/>
   </div>
  )
}

export default App