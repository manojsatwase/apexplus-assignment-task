import React from 'react';
import { Link } from 'react-router-dom';
import { FaPencilAlt } from 'react-icons/fa';
import { useDeleteVehicleMutation } from '../../api/vehicleApi';
import CreateHandleDelete from '../CreateHandleDelete';
import DeleteButton from '../DeleteButton';
import { setEdiVehicleMode } from '../../redux/slices/editModeSlice';
import { useDispatch } from 'react-redux';


const VehicleRow = ({ data: vehicle }) => {
  const { _id, vehicleName, positionX, positionY, speed, direction } = vehicle;

  const [deleteVehicle] = useDeleteVehicleMutation();
  const handleDeleteVehicle = CreateHandleDelete(deleteVehicle, _id);

  const dispatch = useDispatch();

  return (
    <tr>
      <td>{_id}</td>
      <td>{vehicleName}</td>
      <td>{positionX}</td>
      <td>{positionY}</td>
      <td>{speed}</td>
      <td>{direction}</td>
      <td className="edit-icon">
        <Link to={`/editvehicle/${_id}`} onClick={() => dispatch(setEdiVehicleMode(true))}>
          <FaPencilAlt />
        </Link>
      </td>
      <DeleteButton isIcon handleDelete={handleDeleteVehicle} />
    </tr>
  );
};

export default VehicleRow;
