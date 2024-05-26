/**
 * @module routes/v1/v1Routes
 * @description This module is the main router for the v1 routes of the API.
 */

import express from 'express';

// Import all the routes for the v1 API
import userRoutes from './userRoutes.js';


// Create the router
const router = express.Router();

// Use the routes
router.use('/users', userRoutes);



// Export the router
export default router;