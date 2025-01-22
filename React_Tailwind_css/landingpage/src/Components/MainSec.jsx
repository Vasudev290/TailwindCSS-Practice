import React from 'react'

const MainSec = () => {
  return (
    <div className='container mx-auto mt-12 flex flex-col md:flex-row gap-12'>
        <div className='md:w-1/3 flex flex-col items-center text-center'>
            <h1 className='text-2xl'>Design</h1>
            <img className='h-40 w-40 mt-2' src="assets/design.svg" alt="design" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam quas tenetur accusamus quasi molestias exercitationem a nostrum aliquam maxime.</p>
        </div>
        <div className='md:w-1/3 flex flex-col items-center text-center'>
            <h1 className='text-2xl'>Web Devlopment</h1>
            <img className='h-40 w-40 mt-2' src="assets/web.svg" alt="web" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam quas tenetur accusamus quasi molestias exercitationem a nostrum aliquam maxime.</p>
        </div>
        <div className='md:w-1/3 flex flex-col items-center text-center'>
            <h1 className='text-2xl'>Mobile App Devlopment</h1>
            <img className='h-40 w-40 mt-2' src="assets/mobile.svg" alt="mobile" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam quas tenetur accusamus quasi molestias exercitationem a nostrum aliquam maxime.</p>
        </div>
    </div>
  )
}

export default MainSec