import React from 'react'

export const Navbar = () => {
  return (
    <>
      <div className="navbar shadow-sm bg-transparent flex items-center justify-between ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow bg-black text-white scroll-smooth">
              <li><a href="#Home">Home</a></li>
              <li><a href="#About">About</a></li>
              <li><a href="#Services">Services</a></li>
              <li><a href="#Project">Feature</a></li>
                  <li><a href="#Review">Reviews</a></li>
              <li><a href="#Contact">ContactUs</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl" href="#Home">
            <img src="https://img.freepik.com/premium-vector/luxurious-real-estate-logo_42581-186.jpg" alt="Logo" className="w-10 h-10" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">Real-Estate</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-7">
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
                          <li><a href="#Services">Services</a></li>
            <li><a href="#Project">Project</a></li>
              <li><a href="#Review">Reviews</a></li>
            <li><a href="#Contact">ContactUs</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className='btn btn-primary'><a href="#Logout"   >Logout</a></button>
          
        </div>
      </div>
    </>
  );
};
