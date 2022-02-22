import React from "react";
import { Link } from "react-scroll";

import heroLogo from "../assets/logo2.png";
import MobileNav from "./MobileNav";
import Navigation from "./Nav";

const Header = () => {
  return (
    <div className="header-wrapper" id="home">
      <img className="logo" src={heroLogo} />
      <div className="header">
        <Navigation />
        <MobileNav />
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
