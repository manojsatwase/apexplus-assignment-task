import React from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const ToggleIcon = ({ isActive }) => {
  return isActive ? <FaChevronUp className='active-icon-color' /> : <FaChevronDown />;
};

export default ToggleIcon;
