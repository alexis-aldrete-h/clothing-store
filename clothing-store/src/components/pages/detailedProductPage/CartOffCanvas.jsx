import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ItemCard from './ItemCard';
import './AddToCartButton.css';
import TotalBalance from './TotalBalance';

function CartOffCanvas({ show, handleClose, cartProductsData, handleQuantityChange, handleProductRemoved }) {
  const [totalBalance, setTotalBalance] = useState(0);

  useEffect(() => {
    let initialTotalBalance = 0;
    if(cartProductsData.length !== 0){
      cartProductsData.forEach((cartProduct) => {
        const price = parseFloat(cartProduct.price);
        initialTotalBalance += price * cartProduct.quantity;
      });
      setTotalBalance(initialTotalBalance);
    }
  }, [cartProductsData]);

  const updateTotalBalance = () => {
    if (cartProductsData.length === 1) {
      setTotalBalance(0); 
    } else {
      let newTotalBalance = 0;
      cartProductsData.forEach((cartProduct) => {
        const price = parseFloat(cartProduct.price);
        newTotalBalance += price * cartProduct.quantity;
      });
      setTotalBalance(newTotalBalance);
    }
  };

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
            updateTotalBalance={updateTotalBalance}
          />
        ))}
        <TotalBalance totalBalance={totalBalance.toFixed(2)} />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default CartOffCanvas;
