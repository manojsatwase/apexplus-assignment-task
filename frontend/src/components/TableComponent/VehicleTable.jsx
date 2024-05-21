import React from 'react';
import GenericTable from './GenericTable';
import VehicleRow from './VehicleRow';

const vehicleColumns = [
  { header: 'Vehicle Id' },
  { header: 'Vehicle Name' },
  { header: 'Position X' },
  { header: 'Position Y' },
  { header: 'Speed' },
  { header: 'Direction' },
  { header: 'Edit' },
  { header: 'Delete' },
];

const VehicleTable = ({ vehicles }) => {
  return <GenericTable columns={vehicleColumns} data={vehicles} RowComponent={VehicleRow} />;
};

export default VehicleTable;
