import React from 'react'

const Divider = ({title}) => {
  return (
    <div className="relative">
    {/* Divider */}
    <div className="absolute inset-0 flex items-center">
      <div className="border border-slate-300 w-9/12 mx-auto"></div>
    </div>
    {/* Text */}
    <div className="flex justify-center relative ">
      <div className="font-body text-slate-600 text-4xl bg-white px-4">
        {title}
      </div>
    </div>
  </div>
  )
}

export default Divider