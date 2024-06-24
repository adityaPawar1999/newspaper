// src/components/Header.js
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-gray-100 fixed w-[100%] z-40' >
      <header className=" py-2 border-b border-gray-300 container mx-auto px-9">
      <div className="container mx-auto flex justify-between items-center px-4">
        <p className=" font-bold">The Newspaper</p>
        <nav className="hidden md:block">
          <ul className="flex space-x-4  text-sm pointer">
            <li className='text-gray-600 cursor-pointer hover:text-black hoover:font-bold'>Home</li>
            <li className='text-gray-600 cursor-pointer hover:text-black hoover:font-bold'>About-Us</li>
            <li className='text-gray-600 cursor-pointer hover:text-black hoover:font-bold'>Contact-Us</li>
            <li className='text-gray-600 cursor-pointer hover:text-black hoover:font-bold'>Help</li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none focus:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col space-y-2 mt-4 px-4">
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
          </ul>
        </nav>
      )}
    </header>
    </div>
    
  );
};

export default Header;
