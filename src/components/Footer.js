// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white  py-4">
      <div className="container  mx-auto">
        <div className="grid grid-cols-12 ">
          <div className='col-span-6'>
            <h4 className="text-lg font-bold">The Newspaper</h4>
            <p>© 2024 All Rights Reserved</p>
          </div>
          < div className='lg:col-span-6'>
            <ul className="flex space-x-4">
            <li className=' cursor-pointer hover:text-gray-400 hoover:font-bold'>Home</li>
            <li className=' cursor-pointer hover:text-gray-400 hoover:font-bold'>About-Us</li>
            <li className=' cursor-pointer hover:text-gray-400 hoover:font-bold'>Contact-Us</li>
            <li className=' cursor-pointer hover:text-gray-400 hoover:font-bold'>Help</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
