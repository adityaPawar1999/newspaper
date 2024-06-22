// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <h4 className="text-lg font-bold">The Newspaper</h4>
            <p>© 2024 All Rights Reserved</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-blue-500">News</a></li>
              <li><a href="#" className="hover:text-blue-500">Opinion</a></li>
              <li><a href="#" className="hover:text-blue-500">Most Popular</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
