import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

import { connectDB } from './config/db.js';
import scenarioRoutes from './routes/scenarioRoutes.js';
import vehicleRoutes from './routes/vehicleRoutes.js';

const app = express();


// Workaround for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure dotenv to use the correct path
dotenv.config({ path: path.join(__dirname, 'config', '.env') });

connectDB()

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Successfully Running API"
    });
});

// Use routes
app.use('/api/v1/scenarios', scenarioRoutes);
app.use('/api/v1/vehicles', vehicleRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ msg: 'Internal Server Error' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
