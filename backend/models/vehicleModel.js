import mongoose from "mongoose";

const VehicleSchema = new mongoose.Schema({
  vehicleName: {
    type: String,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  positionX: {
    type: Number,
    required: true,
  },
  positionY: {
    type: Number,
    required: true,
  },
  direction: {
    type: String,
    required: true,
  },
  scenario: {
    type: String,
    required: true,
  },
  color:{
    type:String,
    required:true
  }
}, {
  timestamps: true,
});

export const Vehicle = mongoose.model('Vehicle', VehicleSchema);
