// Modal.js
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function MyVerticallyCenteredModal(props) {
  const handleBuyClick = () => {
    const phoneNumber = '+8801536152074'; // Replace with your dedicated mobile number
    const message = `Hi! I'm interested in the item: ${props.card.name}. Details: ${props.card.detail}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.card.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ display: 'flex' }}>
        <div style={{ flex: '0 0 30%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={props.card.image}
            alt={props.card.name}
            style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'cover', borderRadius: '10px' }}
          />
        </div>
        <div style={{ flex: '1', padding: '20px' }}>
          <h4>Details</h4>
          <p>{props.card.detail}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleBuyClick}>Buy</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
