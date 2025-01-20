import React from "react";

const MobilesCard = ({ mobile }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md text-center transform group hover:scale-110 duration-100 relative">
      <img
        src={require(`../images/${mobile.image}`)}
        alt={mobile.name}
        className="w-32 h-32 mx-auto object-cover mb-4"
      />
      <div className="flex flex-col items-center my-1 space-y-1">
        <span className="font-display block text-lg">{mobile.name}</span>
        <span className="font-display text-slate-500 text-lg">{`₹${mobile.price}`}</span>
        <button className="font-display text-xs border px-4 py-2 bg-sky-500 rounded-full uppercase hover: text-white transform ease-in-out duration-175 group-hover:visible invisible">
          Add to cart
        </button>
      </div>
      <span className="absolute top-3 right-3 bg-sky-300 text-white border-sky-300 p-1 rounded-lg text-sm">
        1% off
      </span>
    </div>
  );
};

export default MobilesCard;
