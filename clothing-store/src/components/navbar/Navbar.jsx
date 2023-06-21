import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';

const brandStyle = {
    fontWeight: 'bold',
    fontSize: '1.3rem'
  };

const Example = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar data-bs-theme="#fffff" key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#" style={brandStyle}>SUSPICIOUS ANTWERP</Navbar.Brand>
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
                  <Nav.Link href="#action1">Shop</Nav.Link>
                  <Nav.Link href="#action2">Next Drop</Nav.Link>
                  <Nav.Link href="#action3">Coming Soon</Nav.Link>
                  <Nav.Link href="#action4">Gift Cards</Nav.Link>
                  <Nav.Link href="#action5">A Blast From The Past</Nav.Link>
                </Nav>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Button variant="outline-primary">Primary</Button>{' '}
                <Button variant="outline-secondary">Secondary</Button>{' '}
                <Button variant="outline-success">Success</Button>{' '}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Example;