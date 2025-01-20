import React from 'react';

const MobilesCard = ({ mobile }) => {
  return (
    <div className='border rounded-lg p-4 shadow-md text-center transform hover:scale-110 duration-100'>
      <img
        src={require(`../images/${mobile.image}`)}
        alt={mobile.name}
        className='w-32 h-32 mx-auto object-cover mb-4'
      />
      <div className='flex flex-col items-center my-2 py-2'>
        <span className='font-display block text-lg'>{mobile.name}</span>
        <span className='font-display text-slate-500 text-lg'>{`₹${mobile.price}`}</span>
      </div>
    </div>
  );
};

export default MobilesCard;
