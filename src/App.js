// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './Layout';

function App() {
  return (
    <div className="App font-serif">
      <Header/>
      <Layout/>
      <Footer/>
    </div>
  );
}

export default App;
