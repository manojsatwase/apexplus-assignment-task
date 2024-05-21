import { Vehicle } from "../models/vehicleModel.js";
// Add a vehicle
export const addVehicle = async (req, res) => {
  const { vehicleName, speed, positionX, positionY, direction, scenario,color } = req.body;

  // if (!vehicleName || !speed || !positionX || !positionY || !direction || !scenario) {
  //   return res.status(400).json({ message: 'All fields are required' });
  // }

  try {
    const newVehicle = await Vehicle.create({
      vehicleName,
      speed,
      positionX,
      positionY,
      direction,
      scenario,
      color
    });

    await newVehicle.save();
    res.status(201).json({
      success: true,
      message: 'Vehicle added successfully!',
      vehicle: newVehicle,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
}


export const allVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.find({});

    res.status(200).json({
      success: true,
      allVehicle:vehicle
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

export const deleteVehicle = async (req, res) => {
  try {
    const {vehicleId} = req.params;
    const deletedVehicle = await Vehicle.findByIdAndDelete(vehicleId);
    if (!deletedVehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }
    res.status(200).json({ message: 'Vehicle deleted successfully' });
  } catch (err) {
    console.error('Error deleting Vehicle:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const editVehicle = async (req, res) => {
  const { vehicleId } = req.params;

  const { vehicleName, speed, positionX, positionY, direction, scenario, color } = req.body;

  try {
    const vehicle = await Vehicle.findById(vehicleId);

    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }

    vehicle.vehicleName = vehicleName;
    vehicle.speed = speed;
    vehicle.positionX = positionX;
    vehicle.positionY = positionY;
    vehicle.direction = direction;
    vehicle.scenario = scenario;
    vehicle.color = color;

    await vehicle.save();

    res.status(200).json({ success:true,message: 'Vehicle updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update vehicle' });
  }
};


export const singleVehicle = async (req, res) => {
  try {
    const { vehicleId } = req.params;
    const vehicle = await Vehicle.findById(vehicleId);

    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }

    res.status(200).json({
      success: true,
      vehicle,
    });
  } catch (err) {
    console.error('Error finding scenario:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};