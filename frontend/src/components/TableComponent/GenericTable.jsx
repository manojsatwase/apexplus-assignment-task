import React from 'react';

const GenericTable = ({ columns, data, RowComponent }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns?.map((column, index) => (
            <th key={index}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <RowComponent key={item._id} data={item} />
        ))}
      </tbody>
    </table>
  );
};

export default GenericTable;
