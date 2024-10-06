import React, { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './NavigationBar.css';

const NavigationBar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggle = () => setShowOffcanvas(prev => !prev);
  const handleLinkClick = () => setShowOffcanvas(false); // Close offcanvas on link click

  return (
    <>
      <Navbar expand="lg" className="navbar-custom" fixed="top">
        <Container>
          <Navbar.Brand href="#">FLACZIT AGRO PHARMA</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleToggle} />
          <Navbar.Collapse id="offcanvasNavbar" className="d-none d-lg-flex">
            <Nav className="ms-auto"> {/* Aligns Nav items to the right */}
              <Nav.Link as={Link} to='hero' smooth={true} duration={500} onClick={handleLinkClick}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='products' smooth={true} duration={500} onClick={handleLinkClick}>
                Products
              </Nav.Link>
              <Nav.Link as={Link} to='contact_us' smooth={true} duration={500} onClick={handleLinkClick}>
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to='about_us' smooth={true} duration={500} onClick={handleLinkClick}>
                About Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={showOffcanvas}
            onHide={handleToggle}
            className="d-lg-none" // Only show offcanvas in mobile view
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to='hero' smooth={true} duration={50} onClick={handleLinkClick}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to='products' smooth={true} duration={50} onClick={handleLinkClick}>
                  Products
                </Nav.Link>
                <Nav.Link as={Link} to='contact_us' smooth={true} duration={50} onClick={handleLinkClick}>
                  Contact
                </Nav.Link>
                <Nav.Link as={Link} to='about_us' smooth={true} duration={50} onClick={handleLinkClick}>
                  About Us
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
