import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

import { useNewAddScenarioMutation } from '../api/scenariosApi';
import ErrorComponent from '../components/ErrorComponent';
import InputField from '../form/InputField';


const AddScenario = () => {
  const [scenarioName, setScenarioName] = useState('');
  const [scenarioTime, setScenarioTime] = useState('');
  const [newAddScenario, { isLoading, isSuccess, isError }] = useNewAddScenarioMutation();

  const navigate = useNavigate();
 
  const handleReset = () => {
    setScenarioName('');
    setScenarioTime('');
  };

  const handleAddScenario = async (e) => {
    e.preventDefault();
    // if (!scenarioName.trim() || isNaN(scenarioTime) || scenarioTime <= 0) {
    //   toast.error('Please enter valid scenario name and time (positive number)');
    //   return;
    // }

    try {
      const {error,data} = await newAddScenario({ scenarioName, scenarioTime });
      if(error?.data?.message){
        toast.error(error.data.message);
        return;
      }else{
        toast.success(data?.message);
        handleReset();
      }
     

    } catch (err) {
      console.error('Failed to add scenario:', err);
    }
  };


  return (
    <div className='add-scenarios'>
      <h4>Scenarios / add</h4>
      <div className='add-scenarios-form'>
        <h1>Add Scenarios</h1>
        <form>
        <InputField
          label='Scenarios Name'
          value={scenarioName}
          onChange={setScenarioName}
          errorMessage="Scenario name is required"
          type='text'
         />
          <InputField
            label='Scenarios Time (seconds)'
            value={scenarioTime}
            onChange={setScenarioTime}
            errorMessage="Scenario time is required"
            type='number'
         />
         
        </form>
        <div className='buttons'>
            <button className='add-btn' 
            type='button' 
            disabled={isLoading}
            onClick={handleAddScenario}
            >
              {isLoading ? 'Adding...' : 'Add'}
            </button>
            <button className='reset-btn' type='button' onClick={handleReset}>Reset</button>
            <button className='back-btn' type='button' onClick={() => navigate('/allscenario')}>Go Back</button>
          </div>
     
      </div>
    </div>
  );
};

export default AddScenario;
