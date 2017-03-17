const log4js = require('log4js');

const config = require('./../config/loggerConfig');

log4js.configure(config);

const logger = log4js.getLogger();
// const debug = log4js.getLogger('debug');
// const error = log4js.getLogger('error');

logger.setLevel('DEBUG');

module.exports = logger;
