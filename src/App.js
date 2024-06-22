// src/App.js
import React from 'react';
import Header from './components/Header';
import BreakingNews from './components/BreakingNews';
import FeaturedStories from './components/FeaturedStories';
import Footer from './components/Footer';
import Layout from './Layout';

function App() {
  return (
    <div className="App font-serif">
      <Header/>
      <Layout/>
    </div>
  );
}

export default App;
