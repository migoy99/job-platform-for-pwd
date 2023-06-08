import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function SendProposal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button style={{ flex: '1', height: '50%', marginRight: '1%', borderRadius: '8px', backgroundColor: '#009087', color: 'white' }}variant="primary" onClick={handleShow}>
        Send Proposal
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send a Proposal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Cover Letter: </Form.Label>
              <Form.Control as="textarea" rows={7} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Attach Files Here: </Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button style={{backgroundColor: '#009087', color: 'white', borderRadius: '8px'}} variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button style={{backgroundColor: '#009087', color: 'white', borderRadius: '8px'}} variant="primary" onClick={handleClose}>
            Send Proposal
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SendProposal;