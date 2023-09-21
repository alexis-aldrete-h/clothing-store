import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import OffCanvas from './OffCanvas'; 
import './AddToCartButton.css';
import cartProductsMockedData from '../../../data/cartProductsData';
import { useSelectedProductContext } from '../../SelectedProductContext';

function AddToCartButton(props) {
  const [show, setShow] = useState(false);
  const [cartProductsData, setCartProductsData] = useState(cartProductsMockedData);
  const { selectedProduct } = useSelectedProductContext();

  const toggleShow = () => setShow((s) => !s);

  const handleClose = () => setShow(false);

  const handleProductAdded = () => {
    const selectedProductTitle = selectedProduct.title;
  
    const productInCart = cartProductsData.find((product) => product.title === selectedProductTitle);
  
    if (productInCart) {

      const updatedCartProducts = cartProductsData.map((product) => {
        if (product.title === selectedProductTitle) {
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
  };
  
  const handleAddToCartButtonPressed = () => {
    toggleShow();
    handleProductAdded();
  }

  const handleQuantityChange = (title, change) => {
    const updatedProducts = cartProductsData.map((product) => {
      if (product.title === title) {
        const updatedQuantity = product.quantity + change;
        return { ...product, quantity: updatedQuantity > 1 ? updatedQuantity : 1 };
      }
      return product;
    });

    setCartProductsData(updatedProducts);
  };

  const handleProductRemoved = (title) => {
    const updatedProducts = cartProductsData.filter((product) => product.title !== title);
    setCartProductsData(updatedProducts);
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