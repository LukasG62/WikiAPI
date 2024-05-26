/**
 * @module routes/v1/userRoutes
 * @description This module is the router for the user resources.
 */

import express from 'express';

// Import the user controller
import UserController from '../../controllers/UserController.js';

// Import the authentication middleware
import { authenticateUser } from '../../middlewares/authentication.js';

// Create the router
const router = express.Router();

// Define the routes
router.post('/login', UserController.login);

router.post('/register', UserController.register);

router.get('/@me', authenticateUser, UserController.getMe);

router.get('/:id', UserController.getUser);

router.get('/', UserController.getAllUsers);


// Export the router
export default router;



