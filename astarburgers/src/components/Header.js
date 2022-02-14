import React from "react";
import { Link } from "react-scroll";

import heroBackground from "../assets/burger3.jpeg";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="header-wrapper" id="home">
      <Nav />
      <div className="header">
        <div className="hero-text-box">
          <h1>"Good Food, Good Mood"</h1>
          <Link className="btn" to="about">
            Show Me More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
