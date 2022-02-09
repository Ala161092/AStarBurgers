import React from 'react';

import burger1 from '../assets/burger1.jpg'
import burger2 from '../assets/burger2.jpg'
import burger3 from '../assets/burger3.jpg'
import burger4 from '../assets/burger4.jpg'
import burger5 from '../assets/burger5.jpg'
import burger6 from '../assets/burger6.jpg'

const ImageView = () => {
  return (
  <div className='meals-wrapper'>
      <ul className='meal-show-container'> 
          <li>
              <figure className='meal-photo'>
                  <img src={burger1}/>
              </figure>
          </li>
          <li>
              <figure className='meal-photo'>
                  <img src={burger2}/>
              </figure>
          </li>
          <li>
              <figure className='meal-photo'>
                  <img src={burger3}/>
              </figure>
          </li>
          <li>
              <figure className='meal-photo'>
                  <img src={burger4}/>
              </figure>
          </li>
          <li>
              <figure className='meal-photo'>
                  <img src={burger5}/>
              </figure>
          </li>
          <li>
              <figure className='meal-photo'>
                  <img src={burger6}/>
              </figure>
          </li>
      </ul>


  </div>
  );
};

export default ImageView;
