import { Sequelize } from 'sequelize';
import config from '../config/config.js';
import logger from './logger.js';

const mysql = config.mysql;

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
    })
    .catch((error) => {
        logger.error(`${error}`);
    });

export default db;