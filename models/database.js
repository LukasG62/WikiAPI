import { Sequelize } from 'sequelize';
import config from '../config/config.js';
import logger from '../utils/logger.js';
import initModels from './init-models.js';

const mysql = config.mysql;

let models = {};

const db = new Sequelize(mysql.database, mysql.user, mysql.password, {
    host: mysql.host,
    dialect: 'mysql',
    define: {
        charset: mysql.charset,
    },
    logging: (msg) => logger.info(`[SEQUELIZE]: ${msg}`),
});


// Test the connection
db.authenticate()
    .then(() => {
        logger.success('Connection has been established successfully.');
        models = initModels(db);
        logger.success('Models have been initialized successfully.');
    })
    .catch((error) => {
        logger.error(`${error}`);
    });


// Export the database connection and models
export { db, models };