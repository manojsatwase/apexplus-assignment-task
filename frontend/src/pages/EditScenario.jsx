import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import toast from "react-hot-toast";
import { useDispatch } from 'react-redux';

import { useEditScenarioMutation, useSingleScenarioQuery } from '../api/scenariosApi';
import { setEditScenarioMode } from '../redux/slices/editModeSlice';
import InputField from '../form/InputField';

const EditScenario = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data , isLoading, error } = useSingleScenarioQuery(id);
  const [editScenario, { isLoading: isEditing }] = useEditScenarioMutation();
  const [updateScenarioName, setUpdateScenarioName] = useState('');
  const [updateScenarioTime, setUpdateScenarioTime] = useState('');
  const [updatedNumberOfVehicles, setUpdateNumberOfVehicles] = useState(1);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  
  const scenario = data?.scenario;

  useEffect(() => {
    if (scenario) {
      setUpdateScenarioName(scenario.scenarioName || '');
      setUpdateScenarioTime(scenario.scenarioTime || '');
      setUpdateNumberOfVehicles(scenario.numberOfVehicles || 1);
      setIsDataLoaded(true);
    }
  }, [scenario]);

  const handleReset = () => {
      setUpdateScenarioName('');
      setUpdateScenarioTime('');
      setUpdateNumberOfVehicles(0);
  };

  const handleEditScenario = async (e) => {
    e.preventDefault();
    try {
      const { error, data } = await editScenario({
        scenarioId: id,
        scenarioData: {
          scenarioName: updateScenarioName,
          scenarioTime: updateScenarioTime,
          numberOfVehicles: updatedNumberOfVehicles,
        },
      });
      if (error?.data?.message) {
        toast.error(error.data.message);
      } else {
        toast.success(data?.message);
        navigate('/allscenario');
        dispatch(setEditScenarioMode(false));
      }
    } catch (err) {
      console.error('Failed to edit scenario:', err);
    }
  };

  const scenarioInputFields = [
    { label: 'Scenarios Name', value: updateScenarioName, onChange: setUpdateScenarioName, errorMessage: 'Scenario name is required' },
    { label: 'Scenarios Time (seconds)', value: updateScenarioTime, onChange: setUpdateScenarioTime, errorMessage: 'Scenario time is required' },
    { label: 'Number of Vehicles', value: updatedNumberOfVehicles, onChange: setUpdateNumberOfVehicles, errorMessage: 'Number of vehicles is required' },
  ];

  if (error) return <div>Error loading scenario.</div>;

  return (
    <div className='add-scenarios'>
      <h4>Scenarios / add</h4>
      <div className='add-scenarios-form'>
        <h1>Edit Scenario</h1>
        <form>
            {scenarioInputFields?.map((field, index) => (
              <InputField
                key={index}
                label={field.label}
                value={field.value}
                onChange={field.onChange}
                errorMessage={field.errorMessage}
              />
            ))}
        </form>
          <div className='buttons'>
            <button className='add-btn' 
            type='button' 
            disabled={isLoading}
            onClick={handleEditScenario}
            >
              {isLoading ? 'Adding...' : 'Update'}
            </button>
            <button className='reset-btn' type='button' onClick={handleReset}>Reset</button>
            <Link to="/allscenario">
              <button className='back-btn' type='button' onClick={()=>{
                navigate(-1);
                dispatch(setEditScenarioMode(false));
              }}>Go Back</button>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default EditScenario;
