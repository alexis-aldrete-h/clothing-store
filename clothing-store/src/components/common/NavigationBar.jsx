import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartOffCanvas from '../pages/detailedProductPage/CartOffCanvas';
import './NavigationBar.css';
import { useCartContext } from '../CartContext';

const navbarStyle = {
  margin: 0,
};

const NavigationBar = () => {
  const [showNavbarOffcanvas, setShowNavbarOffcanvas] = useState(false);
  const [showCartOffcanvas, setShowCartOffcanvas] = useState(false);

  const { cartProductsData, setCartProductsData } = useCartContext();

  const toggleNavbarOffcanvas = () => setShowNavbarOffcanvas((s) => !s);
  const toggleCartOffcanvas = () => setShowCartOffcanvas((s) => !s);

  const handleCloseNavbarOffcanvas = () => setShowNavbarOffcanvas(false);
  const handleCloseCartOffcanvas = () => setShowCartOffcanvas(false);

  const handleQuantityChange = (change, title, size) => {
    const updatedProducts = cartProductsData.map((product) => {
      if (product.title === title && product.size === size) {
        const updatedQuantity = product.quantity + change;
        return { ...product, quantity: updatedQuantity > 1 ? updatedQuantity : 1 };
      }
      return product;
    });
    setCartProductsData(updatedProducts);
  };

  const handleProductRemoved = (title, size) => {
    const indexToRemove = cartProductsData.findIndex(
      (product) => product.title === title && product.size === size
    );

    if (indexToRemove !== -1) {
      const updatedProducts = [...cartProductsData];
      updatedProducts.splice(indexToRemove, 1);
      setCartProductsData(updatedProducts);
    }
  };

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          style={navbarStyle}
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-3"
        >
          <Container fluid>
            <Navbar.Brand as={Link} to="/" className="brand-logo">
              SUSPICIOUS ANTWERP
            </Navbar.Brand>
            <span className="navbar-toggler-wrapper">
              <img
                onClick={toggleCartOffcanvas}
                src={require('../../assets/images/icons/cart.png')}
                alt="Logo"
                className="cart-icon"
              />
              <Navbar.Toggle
                onClick={toggleNavbarOffcanvas}
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
            </span>
            <Navbar.Offcanvas
              show={showNavbarOffcanvas}
              onHide={handleCloseNavbarOffcanvas}
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
                  <Nav.Link as={Link} to="/catalog-page">
                    Best Sellers
                  </Nav.Link>
                  <Nav.Link as={Link} to="/detailed-product-page">
                    Detailed Product
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <CartOffCanvas
        show={showCartOffcanvas}
        handleClose={handleCloseCartOffcanvas}
        cartProductsData={cartProductsData}
        handleQuantityChange={handleQuantityChange}
        handleProductRemoved={handleProductRemoved}
      />
    </>
  );
};

export default NavigationBar;
