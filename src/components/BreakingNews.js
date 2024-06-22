// src/components/BreakingNews.js
import React from 'react';

const BreakingNews = () => {
  return (
    <section className="py-8 border-b border-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Breaking News</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 md:pr-4 mb-4 md:mb-0">
            <img src="https://via.placeholder.com/600x400" alt="Breaking News" className="mb-4 w-full"/>
            <h3 className="text-2xl font-semibold mb-2">Get the Best Catering for Your Summer Wedding in Philly</h3>
            <p className="text-gray-600 mb-2">By Admin | July 9, 2024</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="md:w-1/3 md:pl-4">
            <h4 className="text-xl font-semibold mb-4">Daily Feed</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">How to be as Productive as a Google Employee</a></li>
              <li><a href="#" className="hover:text-blue-500">The Most Fascinating Show? The Net Trying to Fix Itself</a></li>
              <li><a href="#" className="hover:text-blue-500">Liverpool Tops Hoffenheim in First Leg of Champions Playoff</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakingNews;
