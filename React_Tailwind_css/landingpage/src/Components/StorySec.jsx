import React from 'react'

const StorySec = () => {
  return (
    <div className='container mx-auto mt-12'>
        <div className='text-center'>
            <h1>Recent Updates</h1>
            <h1 className='text-5xl'>Featured Stories</h1>
        </div>
        <div className='grid grid-cols-3 gap-4 '>
            <div className='bg-gray-200 rounded-2xl text-center hover:shadow-2xl'>
                <img className='mt-4 w-full h-60' src="https://picsum.photos/200" alt="" />
                <h1 className='text-xl mt-4 text-indigo-500'>Google Ranking</h1>
                <p className='font-thin my-4'>Make it connect with every client worldwide</p>
                <a href="#" className='text-indigo-500 font-bold hover:text-black'>Read More</a>
            </div>
            <div className='bg-gray-200 rounded-2xl text-center hover:shadow-2xl'>
                <img className='mt-4 w-full h-60' src="https://picsum.photos/200" alt="" />
                <h1 className='text-xl mt-4 text-indigo-500'>Communication</h1>
                <p className='font-thin my-4'>Best communication for the Business</p>
                <a href="#" className='text-indigo-500 font-bold hover:text-black'>Read More</a>
            </div>
            <div className='bg-gray-200 rounded-2xl text-center hover:shadow-2xl'>
                <img className='mt-4 w-full h-60' src="https://picsum.photos/200" alt="" />
                <h1 className='text-xl mt-4 text-indigo-500'>Remote Working</h1>
                <p className='font-thin my-4'>Remote connectivity for consistent</p>
                <a href="#" className='text-indigo-500 font-bold hover:text-black'>Read More</a>
            </div>
        </div>
    </div>
  )
}

export default StorySec