//TEMP
import dotenv from 'dotenv';
import express from 'express';
import allRoutes from './routes/allRoutes.js';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Database Configuration

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', allRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});