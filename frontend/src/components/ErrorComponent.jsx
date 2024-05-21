import React from 'react';

const ErrorComponent = ({ showError, error }) => {
  return (
    showError && error ? (
      <div className='error-message'>
        <p>{error}</p>
      </div>
    ) : null
  );
};

export default ErrorComponent;
