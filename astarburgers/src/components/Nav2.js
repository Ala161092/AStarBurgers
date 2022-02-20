import React from "react";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";

const Nav2 = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      variant="dark"
      className="nav"
      fixed="top"
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav2;
