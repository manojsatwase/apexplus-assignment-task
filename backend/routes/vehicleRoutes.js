import express from 'express';
import { addVehicle, allVehicle, deleteVehicle, editVehicle, singleVehicle } from '../controllers/vehicleController.js';

const router = express.Router();

router.route("/add").post(addVehicle);
router.route('/all').get(allVehicle);
router.route("/:vehicleId").get(singleVehicle).put(editVehicle).delete(deleteVehicle);

export default router;