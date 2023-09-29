//TEMP
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import allRoutes from './routes/allRoutes.js';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Database Configuration
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
};

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', allRoutes);

// Start the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
});

/* require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose')
const all_routes = require('./routes/index')
const cors = require('cors')

//DB
MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/image_files";
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
let db = mongoose.connection;
db.on("open", () => {
    console.log("Connected to MongoDB using Mongoose");
});


app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: true }))


app.use('/api', all_routes)


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
}) */