import React from 'react';
import { FaCaravan, FaCarrot } from 'react-icons/fa';

import ncassLogo from '../assets/ncass.jpg'

const About = () => {
  return (
  <div className='about-wrapper' id='about'>
      <h2>About Us</h2>
      <p className='long-copy'> Here at Astarburgers our number one priority is customer satisfaction.
         With our well thought out and carefully designed menu we aim to cater for every palette.  
         Wheater it’s our famous full Monty burger or a portion of our freshly cooked steak cut chips for the kids we aim to put a smile on all of our customers faces! 
         Our motto is good food good mood, and we stand on this. 
        With over 26 years of catering experience we are no strangers to working with the public and delivering an Astar service.</p>
        <div className='about-card-container' >
            <section className='cards'>
                <h3>Catering</h3>
                <FaCaravan fontSize='70px' color='#f4bf2b' />
                <p>
                    Completely self-sufficent catering unit, we can cater for:
                    <ul className='catering-lists'>
                        <li> Large Sporting Events</li>
                        <li> Festivals</li>
                        <li> Weddings</li>
                        <li> Street Parties</li>
                        <li> Carnivals</li>
                    </ul>
                </p>
            </section>
            <section className='cards'>
                <h3>NCASS Member</h3>
                <img src={ncassLogo}/>
                <p>
                    We are members of the NCASS & All members of staff are fully qualified.
                    <br/> Up-to-date public liability insurance. </p>
            </section>
            <section className='cards'>
                <h3>Dietary & Allergens</h3>
                <FaCarrot  fontSize='70px' color='#f4bf2b' />
                <p>
                   We are able to cater for any allergens.
                   <br/> Please let us know if you have any food allergies or special dietary needs.
                </p>
            </section>

        </div>
    

  </div>
  );
};

export default About;
