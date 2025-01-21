import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import MainSec from './Components/MainSec'
import PricingSec from './Components/PricingSec'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <MainSec/>
      <PricingSec/>
    </div>
  )
}

export default App