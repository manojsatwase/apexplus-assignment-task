import React, { useState, useEffect } from 'react';
import ErrorComponent from '../components/ErrorComponent';

const InputField = ({ label, value, onChange, errorMessage, type = 'text' }) => {
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (errorMessage) {
      setTouched(true);
    }
  }, [errorMessage]);

  const handleBlur = () => {
    setTouched(true);
  };

  return (
    <div className='form-control'>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input
        className={`form-input ${touched && errorMessage &&  !value ? 'active-border' : ''}`}
        type={type}
        placeholder={`Enter ${label}`}
        id={label.toLowerCase()}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={handleBlur}
      />
      <ErrorComponent showError={touched && !!errorMessage && !value} error={errorMessage} />
    </div>
  );
};

export default InputField;
