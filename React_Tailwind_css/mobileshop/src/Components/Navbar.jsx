import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const menuClicked = () => {
    console.log("menuClicked..!");
    setOpen(!open)
  };
  return (
    <div>
      <nav className="mt-5">
        <div className="md:flex justify-between w-5/6 md:max-w-7xl mx-auto">
          <div className="flex justify-between">
          <div>
            <span className="text-sky-500 font-bold text-4xl">Mobiles</span>
            <span className="text-slate-500 font-thin text-3xl">Shop</span>
          </div>
          <div className="md:hidden mt-3">
            <button onClick={menuClicked}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          </div>
          <div className={`flex justify-end ${open ? 'block' : 'hidden'}`}>
            <ul className="md:flex md:space-x-6 space-y-6 md:space-y-0">
              <li className="menu border-b-4">
                <a href="#" className="font-dispaly">
                  Mobiles
                </a>
              </li>
              <li className="menu">
                <a href="#" className="font-dispaly">
                  Tablets
                </a>
              </li>
              <li className="menu">
                <a href="#" className="font-dispaly">
                  More!
                </a>
              </li>
              <li className="px-4 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-sky-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
