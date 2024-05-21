import { useFetchAllScenariosQuery } from '../../api/scenariosApi';
import { getUniqueScenarioNames } from '../../utils/getUniqueScenarioNames';
import SelectComponent from './SelectComponent';

const HomeSelectScenario = ({onChange}) => {
    const { data: scenarios } = useFetchAllScenariosQuery();
    const options = getUniqueScenarioNames(scenarios?.allscenarios)

    return <SelectComponent label="Scenario" onChange={onChange} options={options} />;
}

export default HomeSelectScenario;
