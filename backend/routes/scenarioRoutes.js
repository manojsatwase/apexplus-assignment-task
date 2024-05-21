import express from 'express';
import { addNumberOfVehicles, addScenario, allScenario, deleteAllScenario, deleteScenario, editScenario, singleScenario } from '../controllers/scenariosController.js';

const router = express.Router();

router.route("/add").post(addScenario);
router.route('/all').get(allScenario);
router.route("/addNumberVehicles").put(addNumberOfVehicles);
router.route("/:scenarioId").put(editScenario).delete(deleteScenario).get(singleScenario);
router.route("/").delete(deleteAllScenario);

export default router;