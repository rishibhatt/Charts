import React from 'react';

import './App.css';
import Navbar from './component/Navbar';
import Main from './component/Main';
import Hero from './component/Hero';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Hero />
        <Main />
      </div>
    </div>
  );
}

export default App;
