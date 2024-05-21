import { useState, useEffect, useRef } from "react";
import SimulationGrid from "../components/SimulationGrid";
import SimulationControlButtons from "../components/SimulationControlButtons";
import { useFetchAllVehicleQuery } from "../api/vehicleApi";
import HomeSelectScenario from "../components/selectComponent/HomeSelectScenario";
import VehicleTable from '../components/TableComponent/VehicleTable';
import useSimulateMovement from "../hooks/useSimulateMovement";
import { useFetchAllScenariosQuery } from "../api/scenariosApi";

const Home = () => {
  const [scenarioOption, setScenarioOption] = useState('');
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);
  const [vehiclesState, setVehiclesState] = useState([]);
  const timerRef = useRef(null);
  const { data: vehicles, error, isLoading } = useFetchAllVehicleQuery();
  const { data: scenarios, } = useFetchAllScenariosQuery()
  
  useEffect(() => {
    if (vehicles) {
      setVehiclesState(vehicles.allVehicle);
    }
  }, [vehicles]);

  const containerWidth = 1000;
  const containerHeight = 600;

  useSimulateMovement(scenarioOption, vehiclesState, setVehiclesState, containerWidth, containerHeight, isSimulationRunning);
 

  const startSimulation = () => {
    setIsSimulationRunning(true);
     
    const scenario = scenarios?.allscenarios?.find(scenario => scenario.scenarioName === scenarioOption);
    if (!scenario) return;
    const endTime = Date.now() + scenario.scenarioTime * 1000; 

    timerRef.current = setInterval(() => {
      if (Date.now() >= endTime) {
        setIsSimulationRunning(false);
        clearInterval(timerRef.current);
      }
    }, 1000);
  };

  const endSimulation = () => {
    setIsSimulationRunning(false);
    clearInterval(timerRef.current);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='home'>
      <HomeSelectScenario onChange={setScenarioOption} />
      <VehicleTable vehicles={vehiclesState} />
      <SimulationControlButtons 
        isSimulationRunning={isSimulationRunning}
        onStart={startSimulation}
        onEnd={endSimulation}
      />
      <SimulationGrid vehicles={vehiclesState} />
    </div>
  );
};

export default Home;
