import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import MainSec from './Components/MainSec'
import PricingSec from './Components/PricingSec'
import StorySec from './Components/StorySec'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <MainSec/>
      <PricingSec/>
      <StorySec/>
      <Footer/>
    </div>
  )
}

export default App