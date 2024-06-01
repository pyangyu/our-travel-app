// src/App.js
import React from 'react';
import './App.css';
import MapComponent from './components/MapComponent';
import usMapImage from './us-map.png'; // Directly import the image

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="console-container">
          Our Travel
        </div>
      </header>
      <main>
        <MapComponent usMapImage={usMapImage} />
      </main>
    </div>
  );
}

export default App;
