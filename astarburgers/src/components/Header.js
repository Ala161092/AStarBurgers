import React from 'react';

import heroBackground from '../assets/burger3.jpeg'
import Nav from './Nav';

const Header = () => {
  return (
  <div className='header-wrapper'>
      <Nav />
      <div className='header'>
      <div className="hero-text-box">
      <h1>Good Food, Good Mood</h1>
      <button className="btn btn-full" href="">Show Me More</button>
      </div>
      </div>


  </div>
  );
};

export default Header;
