import SelectComponent from './SelectComponent';

const DirectionSelect = ({direction, onChange }) => {
  const options = ['Towards', 'Backwards', 'Upwards', 'Downwards']

  return (
    <SelectComponent
      selectOption={direction}
      label="Direction"
      options={options}
      onChange={onChange}
      />
  )
};

export default DirectionSelect;
