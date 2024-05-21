import React, { useEffect } from 'react';
import useSelect from '../../hooks/useSelect';
import useToggle from '../../hooks/useToggle';
import ToggleIcon from './ToggleIcon';

const SelectComponent = ({ selectOption,label, options, onChange }) => {
  const { selectedOption, handleOptionSelect } = useSelect('', options);
  const [isOpen, toggleIsOpen] = useToggle(false);

  const handleToggleClick = () => {
    toggleIsOpen(); 
  };

  const handleOptionClick = (option) => {
      handleOptionSelect(option);
      onChange(option);
  }

  useEffect(()=>{
    handleOptionSelect(selectOption)
  },[selectOption]);
   
  return (
    <div className='form-control'>
      <label>{label}</label>
      <div className={`select-wrapper`}>
        <div className={`custom-select-wrapper ${isOpen ? 'opened' : ''}`}>
          <div className='custom-select' onClick={handleToggleClick}>
            <div className={`custom-select-trigger ${isOpen ? 'active-select' : ''}`}>
              {selectedOption || `Select ${label}`}
              <ToggleIcon isActive={isOpen} />
            </div>
            <div className={`custom-options ${isOpen ? 'opened' : ''}`}>
              {options?.map((option) => (
                <span key={option} className='custom-option' onClick={() =>handleOptionClick(option)}>
                  {option}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectComponent;
