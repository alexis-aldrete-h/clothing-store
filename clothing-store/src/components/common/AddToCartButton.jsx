import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ItemCard from '../pages/detailedProductPage/ItemCard';

import './AddToCartButton.css';

import cartProductsMockedData from '../../data/cartProductsData';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const cartProductsData = cartProductsMockedData;

  return (
    <>
      <Button variant="light" onClick={toggleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas className='off-canvas' show={show} placement='end' onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='off-canvas-title'>CART</Offcanvas.Title>
        </Offcanvas.Header>
        <hr/>
        <p className='cart-total-products'>{cartProductsData.length} products in your cart</p>
        <hr/>
        <Offcanvas.Body>
          {cartProductsData.map((cartProduct, index) => (
              <ItemCard
                key={index}
                imagePath={require(`../../${cartProduct.imagePath}`)}
                title={cartProduct.title}
                price={cartProduct.price}
                size={cartProduct.size}
                quantity={cartProduct.quantity}
              />
            ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export function AddToCartButton() {
  return (
        <OffCanvasExample name={'ADD TO CART'} scroll={false} backdrop={true} />
  );
}
