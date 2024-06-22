// src/components/FeaturedStories.js
import React from 'react';
import NewsData from '../API/NewsData';

const FeaturedStories = () => {
  return (
    <>
      <div className="container mx-auto">
        <p className="text-lg font-extrabold mb-4">Featured Stories</p>
        <hr/>
        <div className='card'>
          {
            NewsData.slice(0,3).map((val,index)=>{
              return(<>
          <div key={index} className=''>
            <img src={val.image} alt="Story 1" className="mb-2 h-[200px] w-[100%] cover bg-gray-300 filter grayscale" />
            <h3 className="text-sm font-bold ">{val.title}</h3>
            <p className='text-[12px] overflow-hidden line-clamp-5 '>{val.description}</p>
          </div>
          <br/>
          <hr/>
          <br/>
              </>)

            })
          }
        </div>
        </div>
    </>
  );
};

export default FeaturedStories;
