import express from 'express';
import config from './config/config.js';
import logger from './utils/logger.js';

// Create the Express app
const app = express();

// Middlewares

// Routes

// Listen
app.listen(config.express.port, () => {
    logger.info(`Server started on http://localhost:${config.express.port}`);
});