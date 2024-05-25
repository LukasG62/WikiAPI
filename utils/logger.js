/**
 * @file logger.js
 * @module Logger
 * @description Just a better console.log for debugging.
 * @requires module:chalk
 */
import chalk from 'chalk';

const levels = {
    info: chalk.blue,
    success: chalk.green,
    warning: chalk.yellow,
    error: chalk.red,
};

class Logger {

    /**
     * @method log
     * @param {string} message
     * @param {LogLevel} level
     * @description Log a message to the console.
     */
    log(level, message) {
        // if the message is not a string, convert it to a string
        const color = levels[level] || white;
        console.log(color(`[${level.toUpperCase()}] ${message}`));
    }

    /**
     * @method info
     * @param {*} message
     * @description Log an info message to the console.
     */
    info(message) {
        this.log('info', message);
    }

    /**
     * @method success
     * @param {*} message
     * @description Log a success message to the console. 
     */
    success(message) {
        this.log('success', message);
    }
    
    /**
     * @method warning
     * @param {*} message
     * @description Log a warning message to the console. 
     */
    warning(message) {
        this.log('warning', message);
    }

    /**
     * @method error
     * @param {*} message
     * @description Log an error message to the console.
     */
    error(message) {
        this.log('error', message);
    }
}

export default new Logger();