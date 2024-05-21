import React from 'react';
import GenericTable from './GenericTable';
import ScenarioRow from './ScenarioRow';

const scenarioColumns = [
  { header: 'Scenario Id' },
  { header: 'Scenario Name' },
  { header: 'Scenario Time' },
  { header: 'Number of Vehicles' },
  { header: 'Add Vehicle' },
  { header: 'Edit' },
  { header: 'Delete' },
];

const ScenarioTable = ({ scenarios }) => {
  return <GenericTable columns={scenarioColumns} data={scenarios} RowComponent={ScenarioRow} />;
};

export default ScenarioTable;
