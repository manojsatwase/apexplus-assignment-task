import { useEffect } from 'react';

const useSimulateMovement = (scenario, vehicles, setVehicles, containerWidth, containerHeight, isSimulationRunning) => {
  useEffect(() => {
    if (!isSimulationRunning) return;

    const interval = setInterval(() => {
      setVehicles(prevVehicles =>
        prevVehicles?.map(vehicle => {
          let newX = vehicle.positionX;
          let newY = vehicle.positionY;

          switch (vehicle.direction) {
            case 'Towards':
              newY -= vehicle.speed;
              break;
            case 'Backwards':
              newY += vehicle.speed;
              break;
            case 'Upwards':
              newX -= vehicle.speed;
              break;
            case 'Downwards':
              newX += vehicle.speed;
              break;
            default:
              break;
          }

          // Hide vehicle if out of bounds
          const hidden = newX < 0 || newY < 0 || newX > containerWidth || newY > containerHeight;

          return { ...vehicle, positionX: newX, positionY: newY, hidden };
        })
      );
    }, 500);

    return () => clearInterval(interval);
  }, [scenario, vehicles, setVehicles, containerWidth, containerHeight, isSimulationRunning]);
};

export default useSimulateMovement;
