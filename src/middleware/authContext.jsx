import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import PasswordModal from '../utils/PasswordModal'; // Adjust the import path as needed
import 'bootstrap/dist/css/bootstrap.min.css';

const ProtectedRoute = ({ element: Component, isAuthenticated, setIsAuthenticated }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      setShowModal(true);
    }
  }, [isAuthenticated]);

  const handleModalSubmit = (password) => {
    if (password === "pass") {
      setIsAuthenticated(true);
      setShowModal(false);
      setShowSuccessAlert(true);
      setTimeout(() => setShowSuccessAlert(false), 3000);
    } else {
      setShowErrorAlert(true);
      setTimeout(() => setShowErrorAlert(false), 3000);
    }
  };

  if (isAuthenticated) {
    return <Component />;
  }

  return (
    <>
      {showSuccessAlert && (
        <div className="alert alert-success" role="alert">
          Access granted. Redirecting...
        </div>
      )}
      {showErrorAlert && (
        <div className="alert alert-danger" role="alert">
          Incorrect password. Please try again.
        </div>
      )}
      <div>Please enter password to access this page.</div>
      <PasswordModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleSubmit={handleModalSubmit}
      />
    </>
  );
};

ProtectedRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  setIsAuthenticated: PropTypes.func.isRequired,
};

export default ProtectedRoute;
