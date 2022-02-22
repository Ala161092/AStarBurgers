import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import heroLogo from "../assets/logo2.png";

const Navigation = () => {
  const [colorNavDisplay, setcolorNavDisplay] = useState(false);

  const changeNavDisplay = () => {
    if (window.scrollY >= 50) {
      setcolorNavDisplay(true);
    } else {
      setcolorNavDisplay(false);
    }
  };

  window.addEventListener("scroll", changeNavDisplay);

  return (
    <div className="nav-wrapper">
      <Navbar
        className={colorNavDisplay ? "fixed-top nav" : "nav"}
        collapseOnSelect
        variant="dark"
        expand="sm"
      >
        <Container fluid>
          <Nav className={colorNavDisplay ? "ms-auto nav-scroll" : "navbar"}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
