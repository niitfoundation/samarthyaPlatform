const kafka = require('kafka-node');
const config = require('../../../../config/profileAnalysisConfig');
const logger = require('./../../../../applogger');
const async = require('async');
const kakfaConfig = require('./../../../../config/config');
const kafkaClient = require('./../core/kafkaConnection');


const publishToAnalyze = function(userName, dataToPublish, actionType,
    analysisTopic, callback) {
    logger.debug('AnalyzeObject:', dataToPublish);
    let topicName = analysisTopic;
    let dataPayload = {
        userName: userName,
        payload: dataToPublish,
        actionType: actionType
    };
    let payloads = [{
        topic: topicName,
        messages: JSON.stringify(dataPayload)
    }];
    publishToKafkaTopic(topicName, payloads, function(err, publishResult) {
        logger.info('Done publishing, with result ', publishResult);
        callback(err, publishResult);
    });
};

const publishToKafkaTopic = function(topicName, payloads, callback) {
    async.waterfall([function(callback) {
        upsertKafkaTopic(topicName, callback);
    }, function(prevStepResult, callback) {
        publishToKafka(topicName, payloads, callback);
    }], function(err, publishResults) {
        if (err) {
            logger.debug('Finished publishToKafkaTopic with ', ' err: ', err);
        }
        logger.debug('Finished publishToKafkaTopic with result: ', publishResults);
        callback(err, publishResults);
    });
};

// creating multiple topics and sending to kafka producer
const multiplePublishToAnalyze = function(userName, dataToPublish, actionType, analysisTopics, callback) {
    logger.debug('AnalyzeObject for Multiple kafka Topics:', dataToPublish);
    let topics = analysisTopics;
    let payloads = topics.map(function(topicName) {
        return {
            topic: topicName,
            messages: JSON.stringify({ userName: userName, payload: dataToPublish[topicName], actionType: actionType }),
        };
    });
    publishToKafkaMultipleTopic(topics, payloads, function(err, publishResult) {
        logger.info('Done publishing, with result ', publishResult);
        callback(err, publishResult);
    });
};

// publish multiple topic to kafka
const publishToKafkaMultipleTopic = function(topics, payloads, callback) {
    async.waterfall([function(callback) {
        multipleUpsertKafkaTopic(topics, callback);
    }, function(prevStepResult, callback) {
        publishToKafka(topics, payloads, callback);
    }], function(err, publishResults) {
        if (err) {
            logger.debug('Finished publishToKafkaTopic with ', ' err: ', err);
        }
        logger.debug('Finished publishToKafkaTopic with result: ', publishResults);
        callback(err, publishResults);
    });

    // publishToKafka(topics, payloads, callback);
};

// checking multiple kafka clients instances
const multipleUpsertKafkaTopic = function(topics, callback) {
    logger.debug('Topics are :', topics);
    async.map(topics, function(topicName, upsertCallback) {
        upsertKafkaTopic(topicName, upsertCallback);
    }, callback);
};
const upsertKafkaTopic = function(topicName, callback) {
    let client = new kafka.Client(kakfaConfig.ZOOKPER_HOST);
    client.once('connect', function() {
        client.loadMetadataForTopics([topicName], (err, resp) => {
            logger.debug('Topic upsert result:', JSON.stringify(resp));
            client.close();
            callback(err, resp);
        });
    });

};
// publish one or multiple topic to kafka
const publishToKafka = function(topicName, dataPayload, callback) {
    logger.debug('Publishing to topic ', topicName, ' with data: ', dataPayload);
    let client = new kafka.Client(kakfaConfig.ZOOKPER_HOST);
    let producer = new kafka.Producer(client);


    producer.on('ready', function() {
        let payloads = dataPayload;
        producer.send(payloads, function(err, data) {
            if (err) {
                logger.error(
                    'Error in publishing message to messaging pipeline ', err
                );
                callback(err, null);
                return;
            }

            logger.debug('Published message to messaging pipeline topic ', topicName, ' with result: ', data);
            producer.close();
            client.close();
            callback(null, data);

            return;
        });
    });

    producer.on('error', function(err) {
        logger.error(
            'Error in publishing message to messaging pipeline ', err
        );
        producer.close();
    });

};


module.exports = {
    publishForProfileAnalysis: publishToAnalyze,
    publishForMultipleProfileAnalysis: multiplePublishToAnalyze
};