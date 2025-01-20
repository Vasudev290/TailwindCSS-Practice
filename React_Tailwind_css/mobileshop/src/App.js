import React from 'react'
import Navbar from './Components/Navbar'
import Filters from './Components/Filters'
import Items from './Components/Items'
import Season from './Components/Season'
import Finduson from './Components/Finduson'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Filters/>
      <Items/>
      <Season/>
      <Finduson/>
    </div>
  )
}

export default App