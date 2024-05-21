import React from 'react';
import { Link } from 'react-router-dom';

import { useDeleteAllScenarioMutation, useFetchAllScenariosQuery } from '../api/scenariosApi';
import ScenarioTable from '../components/TableComponent/ScenarioTable';
import CreateHandleDelete from '../components/CreateHandleDelete';
import DeleteButton from '../components/DeleteButton';

const AllScenario = () => {
  const { data: scenarios, error, isLoading } = useFetchAllScenariosQuery()
  const [deleteAllScenario] = useDeleteAllScenarioMutation();
   
  const handleAllDeleteScenario = CreateHandleDelete(deleteAllScenario);

   if(isLoading) return <div>...Loading</div>

  return (
    <div className='all-scenarios'>
      <div className='all-btn-seaction'>
        <h2>All Scenarios</h2>
        <div className='buttons'>
          <Link to="/addscenario">
          <button className='new-btn'>New Scenarios</button>
          </Link>
          <Link to="/addvehicle">
          <button className='add-btn'>Add Vehicle</button>
          </Link>
          <DeleteButton handleDelete={handleAllDeleteScenario}>Delete All</DeleteButton>
        </div>
      </div>
      <ScenarioTable scenarios={scenarios?.allscenarios} />
    </div>
  );
};

export default AllScenario;

