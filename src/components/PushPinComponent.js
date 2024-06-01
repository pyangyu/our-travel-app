// src/components/PushPinComponent.js
import React from 'react';
import pushpinImage from './round-pushpin.png'; // Default pushpin image
import couplePinImage from './couple-pushpin.png'; // Active pushpin image
import './PushPinComponent.css';

export default function PushPinComponent({ className, name, onClick, isActive }) {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <div className="push-pin-wrapper">
      <button
        onClick={handleClick}
        className={`push-pin-button ${className} ${isActive ? 'active' : ''}`}
      >
        <img src={isActive ? couplePinImage : pushpinImage} alt="Push Pin" className="push-pin-image" />
      </button>
      {isActive && <div className="pin-dot"></div>}
    </div>
  );
}
