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
        <img className="logoMobile" src={heroLogo} />
          <h1>"Good Food, Good Mood"</h1>
          <p>
            Our motto is <span className="font-weight-500">"good food, good mood"</span>, and we stand on this. With over 26
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
