const highland = require('highland');
const serviceBase = require('./service.base');
const config = require('./../config/config');
const logger = require('./../applogger');

const executeService = function(subscribeTopic, consumerGroup, processor) {
    let myProcessors = [];
    myProcessors.push(highland.map(function(msgObj) {
        let promise = processor.process(msgObj);
        return promise;
    }));

    myProcessors.push(highland.flatMap(promise => highland(
        promise.then(
            function(result) {
                return result;
            },
            function(err) {
                return err;
            })
    )));
    myProcessors.push(highland.map(function(msgObj) {
        logger.debug('Returned data from processorMethod ', msgObj);
    }));

    try {
        let kafkaHost = config.ZOOKPER_HOST;
        let processPipeLine = highland.pipeline.apply(null, myProcessors);

        serviceBase.run(subscribeTopic, consumerGroup, kafkaHost, processPipeLine);

        logger.debug('Service ', processor.name, ' is now running..!');
    } catch (err) {
        logger.debug('Error in executing Intent Analysis service ', err);
    }
}

module.exports = {
    execute: executeService
}