import React from 'react';
import './index.css'
import './css/scrollbar.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import CardContainer from './components/CardContainer'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <CardContainer />
    </div>
  );
}

export default App;