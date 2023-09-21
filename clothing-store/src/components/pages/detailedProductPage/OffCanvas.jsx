import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ItemCard from './ItemCard';
import './AddToCartButton.css';

function OffCanvas({ show, handleClose, cartProductsData, handleQuantityChange, handleProductRemoved }) {
  return (
      <Offcanvas className='off-canvas' show={show} placement='end' onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='off-canvas-title'>CART</Offcanvas.Title>
        </Offcanvas.Header>
        <hr />
        <p className='cart-total-products'>{cartProductsData.length} products in your cart</p>
        <hr />
        <Offcanvas.Body>
          {cartProductsData.map((cartProduct, index) => (
            <ItemCard
              key={index}
              imagePath={require(`../../../${cartProduct.imagePath}`)}
              title={cartProduct.title}
              price={cartProduct.price}
              size={cartProduct.size}
              quantity={cartProduct.quantity}
              onQuantityChange={handleQuantityChange}
              onProductRemoved={handleProductRemoved}
            />
          ))}
        </Offcanvas.Body>
      </Offcanvas>
  );
}

export default OffCanvas;