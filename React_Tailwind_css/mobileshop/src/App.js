import React from 'react'
import Navbar from './Components/Navbar'
import Filters from './Components/Filters'
import Items from './Components/Items'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Filters/>
      <Items/>
    </div>
  )
}

export default App