import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './NavigationBar.css';

const navbarStyle = {
  margin: 0
}

const NavigationBar = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar style={navbarStyle} key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand as={Link} to="/" className='brand-logo'>SUSPICIOUS ANTWERP</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  MENU
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/">Best Sellers</Nav.Link>
                  <Nav.Link as={Link} to="/detailed-product-page">Detailed Product</Nav.Link>
                  {/* <Nav.Link as={Link} to="/">Coming Soon</Nav.Link>
                  <Nav.Link as={Link} to="/">Gift Cards</Nav.Link>
                  <Nav.Link as={Link} to="/">A Blast From The Past</Nav.Link> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavigationBar;