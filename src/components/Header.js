// src/components/Header.js
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-100 py-4 border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-4xl font-bold">The Newspaper</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#" className="hover:text-blue-500">Politics</a></li>
            <li><a href="#" className="hover:text-blue-500">Technology</a></li>
            <li><a href="#" className="hover:text-blue-500">Sports</a></li>
            <li><a href="#" className="hover:text-blue-500">Fashion</a></li>
            <li><a href="#" className="hover:text-blue-500">Food</a></li>
            <li><a href="#" className="hover:text-blue-500">Shortcodes</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact</a></li>
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
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#" className="hover:text-blue-500">Politics</a></li>
            <li><a href="#" className="hover:text-blue-500">Technology</a></li>
            <li><a href="#" className="hover:text-blue-500">Sports</a></li>
            <li><a href="#" className="hover:text-blue-500">Fashion</a></li>
            <li><a href="#" className="hover:text-blue-500">Food</a></li>
            <li><a href="#" className="hover:text-blue-500">Shortcodes</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
