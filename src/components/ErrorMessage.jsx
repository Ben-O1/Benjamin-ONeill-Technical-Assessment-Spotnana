// Component to display error messages
import React from 'react';

const ErrorMessage = ({ error }) => {
  if (!error) return null;

  return (
    <div className="error-message">
      <p>Error: {error}</p>
    </div>
  );
};

export default ErrorMessage;
