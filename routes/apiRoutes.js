/**
 * @module routes/apiRoutes
 * @requires express
 * @description This module is the main router for the API.
 */
import express from 'express';
import v1Routes from './v1/v1Routes.js';

// Create the router
const router = express.Router();

// Use the routes
router.use('/v1', v1Routes);

// Export the router
export default router;
