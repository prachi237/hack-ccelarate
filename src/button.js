import React from 'react';
import './App.css';

function button() {
  return (
    <button className="btn" onClick={() => alert('Enable Geolocation')}> Turn on Location </button>
    );
}
export default button