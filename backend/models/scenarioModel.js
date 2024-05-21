import mongoose from 'mongoose';

const scenarioSchema = new mongoose.Schema({
  scenarioName: {
    type: String,
    required: [true, "Please fill in the Scenario Name"]
  },
  scenarioTime: {
    type: Number,
    required: [true, "Please fill in the Scenario Time (seconds)"]
  },
  numberOfVehicles: {
    type: Number,
    default: 1
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Scenario = mongoose.model('Scenario', scenarioSchema);
