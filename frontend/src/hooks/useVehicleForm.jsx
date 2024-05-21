import { useState, useEffect } from 'react';

const useVehicleForm = () => {
  const [vehicleName, setVehicleName] = useState('');
  const [speed, setSpeed] = useState('');
  const [positionX, setPositionX] = useState('');
  const [positionY, setPositionY] = useState('');
  const [direction, setDirection] = useState('');
  const [scenario, setScenario] = useState('');
  const [color, setColor] = useState('');
  const [errorMessages, setErrorMessages] = useState({});

  const resetForm = () => {
    setVehicleName('');
    setSpeed('');
    setPositionX('');
    setPositionY('');
    setDirection('');
    setScenario('');
    setColor('');
    setErrorMessages({});
  };

  useEffect(() => {
    validateForm(); // Re-validate form on every change
  }, [vehicleName, speed, positionX, positionY, direction, scenario, color]);

  const validateForm = () => {
    const errors = {};

    if (!vehicleName) errors.vehiclename = 'Vehicle Name is required';
    if (!speed) errors.speed = 'Speed is required';
    if (!positionX) errors.positionx = 'Position X is required';
    if (!positionY) errors.positiony = 'Position Y is required';
    if (!direction) errors.direction = 'Direction is required';
    if (!scenario) errors.scenario = 'Scenario is required';
    if (!color) errors.color = 'Color is required';

    const posX = parseFloat(positionX);
    if (!isNaN(posX) && (posX < 0 || posX > 800)) {
      errors.positionx = 'Position X should be between 0 and 800';
    }

    setErrorMessages(errors);
    return Object.keys(errors).length === 0;
  };

  return {
    vehicleName,
    setVehicleName,
    speed,
    setSpeed,
    positionX,
    setPositionX,
    positionY,
    setPositionY,
    direction,
    setDirection,
    scenario,
    setScenario,
    color,
    setColor,
    resetForm,
    validateForm,
    errorMessages
  };
};

export default useVehicleForm;
