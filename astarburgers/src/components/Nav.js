import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'

import heroLogo from "../assets/logo2.png"

const Navigation = () => {
 
  return (
    <div className='nav-wrapper'>
          <img className='logo' src={heroLogo}/>
      <Navbar className='nav' collapseOnSelect variant='dark' sticky='top' expand='sm'>
          <Container fluid>

              <Nav className='navbar-nav'>
                  <Nav.Link href='#home'>Home</Nav.Link>
                  <Nav.Link href='#about'>About</Nav.Link>
                  <Nav.Link href='#menu'>Menu</Nav.Link>
                  <Nav.Link href='#contact'>Contact</Nav.Link>
              </Nav>
   
          </Container>
      </Navbar>
      </div>
      
 
  );
};

export default Navigation;
