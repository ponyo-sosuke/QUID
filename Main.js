import React from 'react';

import './main.css';

import HomeClub from './components/HomeClub';
import Newsletter from './components/Newsletter';
import Presentation from './components/Presentation';
import Events from './components/Events';
import Donut from './components/Donut';



function Main() {
  return (
    

    <div className="Main">
      <HomeClub />
      <Newsletter />
      <Presentation />
      <Events />
      <Donut />
      
    </div>
  );
}

export default Main;
