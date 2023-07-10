import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button variant="light" onClick={toggleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} placement='end' onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <h1>Hello</h1>
            <p>buddy</p>
            <button>Hi</button>
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
