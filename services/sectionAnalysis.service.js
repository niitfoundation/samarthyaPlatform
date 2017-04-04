const highland = require('highland');
const serviceBase = require('./service.base')
const config = require('../config/config');

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
        console.log('Returned data from processorMethod ', msgObj);
    }));

    try {
        let kafkaHost = config.KAFKA_HOST;
        let processPipeLine = highland.pipeline.apply(null, myProcessors);
        serviceBase.run(subscribeTopic, consumerGroup, kafkaHost, processPipeLine);

        console.log('Service ', processor.name, ' is now running..!');
    } catch (err) {
        console.log('Error in executing Intent Analysis service ', err);
    }
}

module.exports = {
    execute: executeService
}