import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import MainSec from './Components/MainSec'
import PricingSec from './Components/PricingSec'
import StorySec from './Components/StorySec'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <MainSec/>
      <PricingSec/>
      <StorySec/>
    </div>
  )
}

export default App