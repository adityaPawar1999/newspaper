// src/components/Layout.js
import React from 'react';

const Layout = () => {
  return (
    <div className="container mx-auto px-4">
      <div className='lg:block md:hidden sm:hidden '>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-2 lg:col-span-2 bg-gray-200 p-4">left</div>
        <div className="col-span-12 md:col-span-8 lg:col-span-8 bg-gray-300 p-4">center</div>
        <div className="col-span-12 md:col-span-2 lg:col-span-2 bg-gray-200 p-4">right</div>
      </div>
      </div>
  
      <div className=' lg:hidden'>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-12 bg-gray-200 p-4">center</div>
        <div className="col-span-12 md:col-span-6 bg-gray-300 p-4">left</div>
        <div className="col-span-12 md:col-span-6 bg-gray-200 p-4">right</div>
      </div>
      </div>

      
    </div>
  );
};

export default Layout;
