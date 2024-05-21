import SelectComponent from './SelectComponent';

const ScenarioSelect = ({scenario,onChange}) => {
  const options = ['Scenario Name', 'Scenario Time'];
  return (
    <SelectComponent
       selectOption={scenario} 
       label="Scenarios List"
       onChange={onChange} options={options}
     />
  )
}

export default ScenarioSelect;
