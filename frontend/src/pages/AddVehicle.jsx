import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useVehicleForm from '../hooks/useVehicleForm';
import { useAddNewVehicleMutation } from '../api/vehicleApi';
import VehicleForm from '../form/VehicleForm';


const AddVehicle = () => {
  const {
    vehicleName, setVehicleName, speed, setSpeed, positionX, setPositionX,
    positionY, setPositionY, direction, setDirection, scenario, setScenario,
    color, setColor, resetForm, validateForm, errorMessages
  } = useVehicleForm();

  const navigate = useNavigate();
  const [addNewVehicle, { isLoading }] = useAddNewVehicleMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const vehicleData = {
      vehicleName,
      speed: Number(speed),
      positionX: Number(positionX),
      positionY: Number(positionY),
      direction,
      scenario,
      color
    };

    try {
      const { data } = await addNewVehicle(vehicleData);
      toast.success(data.message);
      resetForm();
      navigate(-1);
      dispatch(setEdiVehicleMode(false));
    } catch (err) {
      console.error('Failed to add vehicle:', err);
    }
  };

  return (
    <div className='add-vehicle'>
      <h4>Vehicle / Add</h4>
      <h1>Add Vehicle</h1>
      <VehicleForm
        vehicleData={{
          vehicleName, setVehicleName, speed, setSpeed, positionX, setPositionX,
          positionY, setPositionY, direction, setDirection, scenario, setScenario,
          color, setColor, navigate
        }}
        handleSubmit={handleSubmit}
        handleReset={resetForm}
        isLoading={isLoading}
        errorMessages={errorMessages}
        text="Add"
      />
    </div>
  );
};

export default AddVehicle;
