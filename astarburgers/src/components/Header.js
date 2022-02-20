import React from "react";
import { Link } from "react-scroll";

import Nav2 from "./Nav2";

const Header = () => {
  return (
    <div className="header-wrapper" id="home">
      <Nav2 />
      <div className="header">
        <div className="hero-text-box">
          <h1>"Good Food, Good Mood"</h1>
          <p>
            Our motto is good food good mood, and we stand on this. With over 26
            years of catering experience we are no strangers to working with the
            public and delivering an Astar service.
          </p>
          <Link className="btn" to="about">
            Show Me More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
