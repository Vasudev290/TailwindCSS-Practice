import React, { useState } from 'react'

const Filters = () => {
    const [selectedItem, setSelectedItem] = useState(1)
  return (
    <div>
        <section className='my-10 py-5 w-3/5 md:w-4/6 mx-auto flex flex-col md:flex-row justify-around'>
            <button onClick={() => setSelectedItem(1)} className={`button ${selectedItem === 1 ? 'bg-sky-500 text-white' : 'text-slate-500'}`}>Latest</button>
            <button onClick={() => setSelectedItem(2)} className={`button ${selectedItem === 2 ? 'bg-sky-500 text-white' : 'text-slate-500'}`}>Best Seller</button>
            <button onClick={() => setSelectedItem(3)} className={`button ${selectedItem === 3 ? 'bg-sky-500 text-white' : 'text-slate-500'}`}>Special</button>
        </section>
    </div>
  )
}

export default Filters