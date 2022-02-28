import React from "react";
import { FaCaravan, FaCarrot } from "react-icons/fa";

import ncassLogo from "../assets/ncass.jpg";

const About = () => {
  return (
    <div className="about-wrapper" id="about">
      <h2>About Us</h2>
      <p className="long-copy">
        {" "}
        Here at Astarburgers our number one priority is customer satisfaction.
        With our well thought out and carefully designed menu we aim to cater
        for every palette. Wheater it’s our famous <span className="font-weight-500">Full Monty Burger</span> or a
        portion of our freshly cooked steak cut chips for the kids we aim to 
        put a smile on each and everyone of our customer faces.
      </p>
      <div className="about-card-container">
        <section className="cards">
          <FaCaravan fontSize="70px" color="#f4bf2b" />
          <h3>Catering</h3>
          <p>
            Completely self-sufficent catering unit, we can cater to:
            Large Sporting Events, Festivals, Weddings, Street Parties &
            Carnivals
          </p>
        </section>
        <section className="cards">
          <img src={ncassLogo} />
          <h3>NCASS Member</h3>
          <p>
            We are members of NCASS.All members of staff are fully
            qualified. 
            <br/>
            We operate with full liability insurance.
          </p>
        </section>
        <section className="cards">
          <FaCarrot fontSize="70px" color="#f4bf2b" />
          <h3>Dietary & Allergens</h3>
          <p>
          AStar burgers are able to cater to most food allergens. 
          Please let us know if you have any special dietary requirements.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
