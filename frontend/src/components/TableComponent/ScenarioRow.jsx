import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaPencilAlt } from 'react-icons/fa';

import DeleteButton from '../DeleteButton';
import CreateHandleDelete from '../CreateHandleDelete';
import { setEditScenarioMode } from '../../redux/slices/editModeSlice';

import { useDispatch } from 'react-redux';
import { INCRESE_BY_ONE } from '../../utils/Common';
import { useDeleteScenarioMutation, useUpdateNumberOfVehiclesMutation } from '../../api/scenariosApi';

const ScenarioRow = ({ data: scenario }) => {
  const { scenarioName, scenarioTime, numberOfVehicles, _id } = scenario;
  const [updateNumberOfVehicles] = useUpdateNumberOfVehiclesMutation();
  const [deleteScenario] = useDeleteScenarioMutation();
  const dispatch = useDispatch();

  const handleDeleteScenario = CreateHandleDelete(deleteScenario, _id);

  return (
    <tr>
      <td>{_id}</td>
      <td>{scenarioName}</td>
      <td>{scenarioTime}</td>
      <td>{numberOfVehicles}</td>
      <td className="plus-icon" onClick={() => updateNumberOfVehicles({ _id, numberOfVehicles: numberOfVehicles + INCRESE_BY_ONE })}>
        <FaPlus />
      </td>
      <td className="edit-icon">
        <Link to={`/editscenario/${_id}`} onClick={() => dispatch(setEditScenarioMode(true))}>
          <FaPencilAlt />
        </Link>
      </td>
      <DeleteButton isIcon handleDelete={handleDeleteScenario} />
    </tr>
  );
};

export default ScenarioRow;
