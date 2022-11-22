import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';

const Navbar=() =>{

  const[mobMenu, setMobMenu] = useState(false)

  const showMenu = 'block absolute top-14 border-b bg-white w-full p-2';
  const hideMenu = 'hidden md:flex flex text-gray-500 text-base';
  return (
    <nav className="border-b bg-gray-100">
      <div x-data="{showMenu : false}" className="container max-w-screen-lg mx-auto flex justify-between h-14">
        <div className="container max-w-screem-lg mx-auto flex justify-between h-14">
          {/* BRAND  */}
          <a href="#" className='flex items-center cursor-pointer hover:bg-purple-50 px-2 ml-3'>
            {/* LOGO  */}
              <div className="rounded bg-purple-400 text-white font-bold w-10 h-10 flex justify-center text-3xl pt-0.5">T</div>
              <div className="text-gray-700 font-semibold ml-2">To Do</div>
          </a>
          <button
          onClick={() => setMobMenu(!mobMenu)} 
          className="block md:hidden text-gray-700 p-2 rounded hover:border focus:border focus:bg-gray-100 my-2 mr-5" 
          type="button" aria-controls="navbar-main" aria-expanded="false" aria-label="Toggle navigation">
              <svg className="w-5 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
          {/* NAV LINKS */}
          <ul className={mobMenu ? showMenu : hideMenu}>
            <li className="px-3 cursor-pointer hover:bg-purple-50 flex items-center hover:text-gray-800">
              <Link to='/home'>Home</Link>
            </li>
            <li className="px-3 cursor-pointer hover:bg-purple-50 flex items-center hover:text-gray-800">
              <Link to='/second'>Card</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar