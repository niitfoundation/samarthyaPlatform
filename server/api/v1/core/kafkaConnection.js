const kafka = require('kafka-node');
const logger = require('./../../../../applogger');
const kafkaConfig = require('./../../../../config/config');

function ConnectionProvider() {
    let kafkaConnection = undefined;
    let client = undefined;

    this.getConnection = () => {

        if (!this.kafkaConnection) {
            logger.info("Creating new kafka connection ------------------------------------- ");
            this.client = new kafka.Client(kafkaConfig.ZOOKPER_HOST);
            this.kafkaConnection = new kafka.Producer(this.client);
        }
        return this.kafkaConnection;
    };
    this.getClient = () => {
        if (!this.client) {
            logger.info("Creating new kafka Client ------------------------------------- ");
            this.client = new kafka.Client(kafkaConfig.ZOOKPER_HOST);
        }
        return this.client;

    }
    process.on('SIGINT', function() {
        logger.info("Going to terminate kafka connection...!");
        process.exit(0);
    });
}

module.exports = exports = new ConnectionProvider;