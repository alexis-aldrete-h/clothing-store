import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import OffCanvas from './OffCanvas'; 

import './AddToCartButton.css';

import { useSelectedProductContext } from '../../SelectedProductContext';
import { useCartContext } from '../../CartContext';

function AddToCartButton(props) {
  const [show, setShow] = useState(false);
  const { cartProductsData, setCartProductsData } = useCartContext();
  const { selectedProduct } = useSelectedProductContext();

  const toggleShow = () => setShow((s) => !s);

  const handleClose = () => setShow(false);

  const handleProductAdded = () => {
    const selectedProductTitle = selectedProduct.title;
    const selectedProductSize = selectedProduct.size;
  
    if (cartProductsData.length !== 0){
       const productInCart = cartProductsData.find((product) => product.title === selectedProductTitle && product.size === selectedProductSize);

       if (productInCart) {
        const updatedCartProducts = cartProductsData.map((product) => {
          if (product.title === selectedProductTitle && product.size === selectedProductSize) {
            const updatedQuantity = product.quantity + 1;
            return { ...product, quantity: updatedQuantity };
          }
          return product;
        });
    
        setCartProductsData(updatedCartProducts);
      } else {
        const newProduct = { ...selectedProduct, quantity: 1 };
        setCartProductsData([...cartProductsData, newProduct]);
      }
    } else {
        const newProduct = { ...selectedProduct, quantity: 1 };
        setCartProductsData([...cartProductsData, newProduct]);
    }
  };
  
  const handleAddToCartButtonPressed = () => {
    toggleShow();
    handleProductAdded();
  }

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
      <Button variant="light" onClick={handleAddToCartButtonPressed} className="me-2">
        ADD TO CART
      </Button>
      <OffCanvas
        show={show}
        handleClose={handleClose}
        cartProductsData={cartProductsData}
        handleQuantityChange={handleQuantityChange}
        handleProductRemoved={handleProductRemoved}
      />
    </>
  );
}

export default AddToCartButton;