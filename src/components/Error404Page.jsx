import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate for React Router v6

const Error404Page = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  const handleGoHome = () => {
    navigate('/'); // Navigate to the home page
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="error-404-container">
      <div className="error-404-content">
        <h1 className="error-404-title">404</h1>
        <h2 className="error-404-subtitle">Oops! Page not found</h2>
        <p className="error-404-description">
          The page you're looking for doesn't exist or has been moved. You can go back to the homepage or try going back to the previous page.
        </p>
        <div className="error-404-actions">
          <button className="error-404-btn" onClick={handleGoHome}>
            Go to Home
          </button>
          <button className="error-404-btn" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error404Page;
