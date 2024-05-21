import { useState } from 'react';

const useSelect = (initialValue, options) => {
  const [selectedOption, setSelectedOption] = useState(initialValue);

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
  };

  return {
    selectedOption,
    handleOptionSelect,
    options,
  };
};

export default useSelect;
