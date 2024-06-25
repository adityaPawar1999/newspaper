// src/components/Layout.js
import React from 'react';
import SubLinks from './components/SubLinks';
import LatestArticle from './components/LatestArticle';
import BreakingNews from './components/BreakingNews'
import FeaturedStories from './components/FeaturedStories';

const Layout = () => {
  return (
    <div className="container mx-auto px-8 ">
      <SubLinks />
      <br />

      <div className="block md:hidden lg:grid lg:grid-cols-12 gap-1">
        <div className="lg:col-span-2  p-4 hidden lg:block">
          <LatestArticle/>
        </div>
        <div className="  col-span-12 lg:col-span-8 p-4">
          <BreakingNews/>
        </div>
        <div className="lg:col-span-2  p-4 hidden lg:block">
          <FeaturedStories/>
        </div>
      </div>

      <div className="lg:hidden grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-12 bg-gray-200 p-4"><BreakingNews/></div>
        <div className="col-span-12 md:col-span-6 bg-gray-300 p-4"><LatestArticle/></div>
        <div className="col-span-12 md:col-span-6 bg-gray-200 p-4"><FeaturedStories/></div>
      </div>
    </div>
  );
};

export default Layout;
