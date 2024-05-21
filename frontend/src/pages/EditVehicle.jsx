import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useEditVehicleMutation, useFetchVehicleQuery } from '../api/vehicleApi';
import useVehicleForm from '../hooks/useVehicleForm';
import { setEdiVehicleMode } from '../redux/slices/editModeSlice';
import VehicleForm from '../form/VehicleForm';


const EditVehicle = () => {
  const { id } = useParams();
  const {
    vehicleName, setVehicleName, speed, setSpeed, positionX, setPositionX,
    positionY, setPositionY, direction, setDirection, scenario, setScenario,
    color, setColor, resetForm, validateForm, errorMessages
  } = useVehicleForm();
  
  const [editVehicle, { isLoading }] = useEditVehicleMutation();
  const { data, isSuccess: vehicleLoaded } = useFetchVehicleQuery(id);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const vehicle = data?.vehicle;
  
  useEffect(() => {
    if (vehicleLoaded && vehicle) {
      setVehicleName(vehicle.vehicleName);
      setSpeed(vehicle.speed?.toString() ?? '');
      setPositionX(vehicle.positionX?.toString() ?? '');
      setPositionY(vehicle.positionY?.toString() ?? '');
      setDirection(vehicle.direction ?? '');
      setScenario(vehicle.scenario ?? '');
      setColor(vehicle.color);
    }
  }, [vehicleLoaded, vehicle]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const vehicleData = {
      vehicleId: id,
      vehicleName,
      speed: Number(speed),
      positionX: Number(positionX),
      positionY: Number(positionY),
      direction,
      scenario,
      color,
    };

    try {
      const { data } = await editVehicle(vehicleData);
      toast.success(data.message);
      resetForm();
      navigate(-1);
      dispatch(setEdiVehicleMode(false));
    } catch (err) {
      console.error('Failed to update vehicle:', err);
    }
  };

  return (
    <div className='add-vehicle'>
      <h4>Vehicle / Edit</h4>
      <h1>Edit Vehicle</h1>
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
        text="Updated"
      />
    </div>
  );
};

export default EditVehicle;
