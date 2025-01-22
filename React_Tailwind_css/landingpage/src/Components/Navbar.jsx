import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsmenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsmenuOpen(!isMenuOpen)
  }
  return (
    <div className='container mx-auto bg-green-200 mt-3 '>
        <div>
        <nav className='flex justify-between items-center py-2'>
            <div className='h-16 w-16'>
                <a href="#"><img className='rounded-full ms-2' src="https://picsum.photos/200" alt="" /></a>
            </div>
            <ul className='hidden md:flex space-x-6'>
                <li><a className=' font-medium text-indigo-700 hover:text-green-900' href="#">Services</a></li>
                <li><a className=' font-medium text-indigo-700 hover:text-green-900' href="#">Pricing</a></li>
                <li><a className=' font-medium text-indigo-700 hover:text-green-900' href="#">About</a></li>
                <li><a className=' font-medium text-indigo-700 hover:text-green-900' href="#">Contact</a></li>
            </ul>
            <button className='hidden md:block bg-green-600 px-6 py-2 me-2 font-medium text-white rounded-full hover:bg-indigo-400 transition ease-in-out duration-500'>SignUp</button>
            <button className='md:hidden mobile-icon' onClick={toggleMenu}>
            <svg className='h-10 w-10 mr-3' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </button>
        </nav>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden mobile-menu ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className='flex flex-col items-center  space-y-6'>
                <li><a className=' font-medium text-indigo-700 hover:text-green-900' href="#">Services</a></li>
                <li><a className=' font-medium text-indigo-700 hover:text-green-900' href="#">Pricing</a></li>
                <li><a className=' font-medium text-indigo-700 hover:text-green-900' href="#">About</a></li>
                <li><a className=' font-medium text-indigo-700 hover:text-green-900' href="#">Contact</a></li>
                <li><button className='bg-green-600 px-6 py-2 me-2 font-medium text-white rounded-full hover:bg-indigo-400 transition ease-in-out duration-500'>SignUp</button></li>
            </ul>
        </div>
    </div>
    
  )
}

export default Navbar