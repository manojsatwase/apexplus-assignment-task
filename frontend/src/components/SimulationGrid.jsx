const SimulationGrid = ({ vehicles }) => {
  const rows = 6;
  const columns = 14;
  const gridCells = [];
  
  for (let i = 1; i <= rows * columns; i++) {
    gridCells.push(<div className="grid-cell" key={i}></div>);
  }

  return (
    <div className="simulation-container">
      {gridCells}
      {vehicles?.map((vehicle, index) => (
        !vehicle.hidden && (
          <div 
            key={index}
            className='vehicle-box vehicle'
            style={{ left: vehicle.positionX, top: vehicle.positionY ,background:vehicle?.color}}
          >
            {index + 1}
          </div>
        )
      ))}
    </div>
  );
};

export default SimulationGrid;
