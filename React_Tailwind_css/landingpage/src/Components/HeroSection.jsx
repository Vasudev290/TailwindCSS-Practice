import React from 'react'

const HeroSection = () => {
  return (
    <div className='container mx-auto mt-12 flex'> 
        <div className='w-1/2 text-center'>
            <p className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit eveniet sunt aliquam hic commodi recusandae dolorem similique culpa quia? Reiciendis ut consequatur dicta eos, eum dolor eveniet quo vero soluta voluptatum recusandae quis atque ea.</p>
            <button className='bg-indigo-700 text-white font-medium px-6 py-2 rounded-full mt-5'>Get Started!</button>
        </div>
        <div className='w-1/2'>
            <img className='mx-auto' src="assets/Herosec.png" alt="Hersec" />
        </div>
    </div>
  )
}

export default HeroSection