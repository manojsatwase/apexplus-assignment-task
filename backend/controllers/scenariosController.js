import {Scenario} from '../models/scenarioModel.js';

export const addScenario = async (req, res) => {

  const { scenarioName, scenarioTime,numberOfVehicles=1} = req.body;
 
    // Check if name or time is empty
    if (!scenarioName || !scenarioTime) {
        return res.status(400).json({ message: 'Name and time are required' });
      }

  try {
    // Check if scenario with the same name already exists
    const existingScenario = await Scenario.findOne({ scenarioName });
   
    if (existingScenario) {
      return res.status(400).json({ message: 'Scenario with this name already exists' });
    }

    // Create a new scenario and save it
    const newScenario = await Scenario.create({ scenarioName, scenarioTime,numberOfVehicles });
    await newScenario.save();

    res.status(200).json({
        success:true,
        message:'Scenario added successfully!'
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
        success:false,
        message:'Server error'
    });
  }
}

export const allScenario = async (req, res) => {
  try {
    const scenarios = await Scenario.find({});

    res.status(200).json({
      success: true,
      allscenarios:scenarios
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};


export const addNumberOfVehicles = async (req, res) => {
  try {
    const {_id, numberOfVehicles } = req.body; 
    const updatedScenario = await Scenario.findByIdAndUpdate(_id, { numberOfVehicles }, { new: true });
    res.status(200).json(updatedScenario);
  } catch (err) {
    console.error('Error updating number of vehicles:', err);
    res.status(500).json({ 
      success:true,
      message: 'Internal server error'
     }); 
  }
};

export const editScenario = async (req, res) => {
  try {
    const { scenarioName, scenarioTime, numberOfVehicles } = req.body;
    const { scenarioId } = req.params;

    const updatedScenario = await Scenario.findByIdAndUpdate(
      scenarioId,
      { scenarioName, scenarioTime, numberOfVehicles },
      { new: true }
    );

    if (!updatedScenario) {
      return res.status(404).json({ message: 'Scenario not found' });
    }

    res.status(200).json({
      success:true,
      message:"Updated Scenario Successfully"
    });
  } catch (error) {
    console.error('Error editing scenario:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const singleScenario = async (req, res) => {
  try {
    const { scenarioId } = req.params;
    const scenario = await Scenario.findById(scenarioId);

    if (!scenario) {
      return res.status(404).json({ message: 'Scenario not found' });
    }

    res.status(200).json({
      success: true,
      scenario,
    });
  } catch (err) {
    console.error('Error finding scenario:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteScenario = async (req, res) => {
  try {
    const {scenarioId} = req.params;
    const deletedScenario = await Scenario.findByIdAndDelete(scenarioId);
    if (!deletedScenario) {
      return res.status(404).json({ message: 'Scenario not found' });
    }
    res.status(200).json({ message: 'Scenario deleted successfully' });
  } catch (err) {
    console.error('Error deleting scenario:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteAllScenario = async (req, res) => {
  try {
    // Delete all scenarios from the database
    await Scenario.deleteMany({});

    res.status(200).json({
      success: true,
      message: 'All scenarios deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting all scenarios:', error);
    res.status(500).json({
      message: 'An error occurred while deleting all scenarios',
      error: error.message,
    });
  }
};