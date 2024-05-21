const SimulationControlButtons = ({ isSimulationRunning, onStart, onEnd }) => {
    return (
      <div className='buttons'>
        <button className='start-btn' onClick={onStart} disabled={isSimulationRunning}>
          Start Simulation
        </button>
        <button className='stop-btn' onClick={onEnd} disabled={!isSimulationRunning}>
          End Simulation
        </button>
      </div>
    );
  };
  
  export default SimulationControlButtons;
  