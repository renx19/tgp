// PasswordModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const PasswordModal = ({ show, handleClose, handleSubmit }) => {
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    handleSubmit(password);
    setPassword('');
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Enter Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

PasswordModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default PasswordModal;
