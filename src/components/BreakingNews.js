import React from 'react';
import {NewsData} from '../API/NewsData'
const BreakingNews = () => {
  return (
    <section className=" border-b ">
      <div className="container ">
          {
            NewsData.slice(2,3).map((val,index)=>{
            return(<>
            <div className="" key={index}>
            <img src={val.image} alt="Breaking News" className="w-full h-[500px] object-cover  grayscale"/>
            <h3 className="text-2xl font-semibold py-5">{val.title}</h3>
            <p className="text-gray-600 mb-2">By Admin | July 9, 2024</p>
            <p>{val.description}</p>
          </div>
          </>)
          })
          }
      </div>
      <br/><hr/><br/>
      <div>
        <h2 className="text-3xl font-bold mb-2">More News</h2>
          {
            NewsData.slice(5,9).map((val,index)=>{
            return(<>
            <div className="py-5 px-3 hover:shadow-lg hover:bg-gray-100" key={index}>
            <h3 className="text-lg font-semibold mb-2 ">{val.title}</h3>
            <p className="text-gray-600 mb-2 text-sm">{val.category} | July 9, 2024</p>
            <p className='line-clamp-2'>{val.description}</p>
            <button className='bg-gray-800 text-white text-[12px] px-2 py-1 mt-2'>Read More</button>
          </div>
          </>)
          })
          }
      </div>
    </section>
  );
};
export default BreakingNews;
