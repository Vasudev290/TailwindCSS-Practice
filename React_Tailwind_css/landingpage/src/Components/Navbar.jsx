import React from 'react'

const Navbar = () => {
  return (
    <div className='container mx-auto bg-green-200 mt-3 '>
        <nav className='flex justify-between items-center py-2'>
            <div className='h-16 w-16'>
                <a href="#"><img className='rounded-full ms-2' src="https://picsum.photos/200" alt="" /></a>
            </div>
            <ul className='flex space-x-6'>
                <li><a className=' font-medium text-indigo-700 hover:text-green-900' href="#">Services</a></li>
                <li><a className=' font-medium text-indigo-700 hover:text-green-900' href="#">Pricing</a></li>
                <li><a className=' font-medium text-indigo-700 hover:text-green-900' href="#">About</a></li>
                <li><a className=' font-medium text-indigo-700 hover:text-green-900' href="#">Contact</a></li>
            </ul>
            <button className='bg-green-600 px-6 py-2 me-2 font-medium text-white rounded-full hover:bg-indigo-400 transition ease-in-out duration-500'>SignUp</button>
        </nav>
    </div>
  )
}

export default Navbar