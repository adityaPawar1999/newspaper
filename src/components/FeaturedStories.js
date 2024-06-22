// src/components/FeaturedStories.js
import React from 'react';

const FeaturedStories = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Featured Stories</h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <img src="story1.jpg" alt="Story 1" className="mb-2"/>
            <h3 className="text-xl font-semibold">The Most Fascinating Show? The Net Trying to Fix Itself</h3>
          </div>
          <div>
            <img src="story2.jpg" alt="Story 2" className="mb-2"/>
            <h3 className="text-xl font-semibold">Liverpool Tops Hoffenheim in First Leg of Champions Playoff</h3>
          </div>
          <div>
            <img src="story3.jpg" alt="Story 3" className="mb-2"/>
            <h3 className="text-xl font-semibold">Which New York City Subway Method is Right for You?</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;
