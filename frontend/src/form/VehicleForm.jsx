import React from 'react';
import DirectionSelect from '../components/selectComponent/DirectionSelect';
import ScenarioSelect from '../components/selectComponent/ScenarioSelect';
import InputField from '../form/InputField';
import { generateInputFields } from '../utils/generateInputFields';
import { setEdiVehicleMode } from '../redux/slices/editModeSlice';
import { useDispatch } from 'react-redux';

const VehicleForm = ({ vehicleData, handleSubmit, handleReset, isLoading, errorMessages,text }) => {
  const inputFields = generateInputFields(vehicleData);
  const dispatch = useDispatch();

  return (
    <div className='add-vehicle-form'>
      <form>
        <ScenarioSelect scenario={vehicleData.scenario} onChange={vehicleData.setScenario} />
        {inputFields?.map((field, index) => (
          <InputField
            key={index}
            label={field.label}
            type={field.type}
            value={field.value}
            onChange={field.onChange}
            errorMessage={errorMessages[field.label.toLowerCase().replace(/\s/g, '')]} 
          />
        ))}
        <DirectionSelect direction={vehicleData.direction} onChange={vehicleData.setDirection} />
      </form>
      <div className='buttons'>
          <button onClick={handleSubmit} className='add-btn' type='button' disabled={isLoading}>
            {isLoading ? 'Submitting...' : text}
          </button>
          <button className='reset-btn' type='button' onClick={handleReset}>
            Reset
          </button>
          <button className='back-btn' type='button' onClick={() => {
            vehicleData.navigate(-1);
            dispatch(setEdiVehicleMode(false));
          }}>
            Go Back
          </button>
        </div>
    </div>
  );
};

export default VehicleForm;
