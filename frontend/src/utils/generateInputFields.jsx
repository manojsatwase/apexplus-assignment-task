export const generateInputFields = ({ vehicleName, setVehicleName, speed, setSpeed, positionX, setPositionX, positionY, setPositionY, color, setColor }) => {
  return [
    { label: 'Vehicle Name', type: 'text', value: vehicleName, onChange: setVehicleName },
    { label: 'Speed', type: 'number', value: speed, onChange: setSpeed },
    { label: 'Position X', type: 'number', value: positionX, onChange: setPositionX },
    { label: 'Position Y', type: 'number', value: positionY, onChange: setPositionY },
    { label: 'Color', type: 'text', value: color, onChange: setColor }
  ];
};
