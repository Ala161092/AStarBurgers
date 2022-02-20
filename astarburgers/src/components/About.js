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
        for every palette. Wheater it’s our famous full Monty burger or a
        portion of our freshly cooked steak cut chips for the kids we aim to put
        a smile on all of our customers faces!
      </p>
      <div className="about-card-container">
        <section className="cards">
          <FaCaravan fontSize="70px" color="#f4bf2b" />
          <h3>Catering</h3>
          <p>
            Completely self-sufficent catering unit, we can cater to:
            <br/>
            Large Sporting Events, Festivals, Weddings, Street Parties & Carnivals
          </p>
        </section>
        <section className="cards">
          <img src={ncassLogo} />
          <h3>NCASS Member</h3>
          <p>
            We are members of the NCASS & All members of staff are fully
            qualified.
            <br /> Up-to-date public liability insurance.{" "}
          </p>
        </section>
        <section className="cards">
          <FaCarrot fontSize="70px" color="#f4bf2b" />
          <h3>Dietary & Allergens</h3>
          <p>
            We are able to cater for any allergens.
            <br /> Please let us know if you have any food allergies or special
            dietary needs.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
