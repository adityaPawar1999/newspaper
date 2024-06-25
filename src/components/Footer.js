// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          {/* Logo and Description */}
          <div className="col-span-12 md:col-span-4">
            <h4 className="text-lg font-bold mb-2">The Newspaper</h4>
            <p>© 2024 All Rights Reserved</p>
            <p>Your trusted source for the latest news and information.</p>
          </div>

          {/* Quick Links */}
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-lg font-bold mb-2">Quick Links</h5>
            <ul className="space-y-2">
              <li className='cursor-pointer hover:text-gray-400'>Home</li>
              <li className='cursor-pointer hover:text-gray-400'>About Us</li>
              <li className='cursor-pointer hover:text-gray-400'>Contact Us</li>
              <li className='cursor-pointer hover:text-gray-400'>Help</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-lg font-bold mb-2">Contact Us</h5>
            <p>Email: info@thenewspaper.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 News Street, City, Country</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 mt-8">
          {/* Social Media Links */}
          <div className="col-span-12 md:col-span-6">
            <h5 className="text-lg font-bold mb-2">Follow Us</h5>
            <ul className="flex space-x-4">
              <li className='cursor-pointer hover:text-gray-400'>Facebook</li>
              <li className='cursor-pointer hover:text-gray-400'>Twitter</li>
              <li className='cursor-pointer hover:text-gray-400'>Instagram</li>
              <li className='cursor-pointer hover:text-gray-400'>LinkedIn</li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-span-12 md:col-span-6">
            <h5 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h5>
            <form>
              <div className="flex flex-col md:flex-row md:space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 mb-2 w-[60%] md:mb-0 rounded text-gray-900"
                />
                <button
                  type="submit"
                  className="p-2 rounded bg-white text-gray-900 hover:bg-gray-700 transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
