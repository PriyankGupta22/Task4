import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedSection from './components/FeaturedSection'
import LocationSection from './components/LocationSection'

const App = () => {
  return (
    <div>
      <Hero />
      <FeaturedSection />
      <LocationSection />
    </div>
  )
}

export default App
