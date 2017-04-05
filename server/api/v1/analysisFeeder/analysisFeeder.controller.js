const kafka = require('kafka-node');
const config = require('../../../../config/profileAnalysisConfig');
const logger = require('./../../../../applogger');
const async = require('async');

const publishToAnalyze = function(userName, dataToPublish, actionType,
    analysisTopic, callback) {
    logger.debug('AnalyzeObject:', dataToPublish);
    let topicName = config.SECTION_TO_TOPIC_MAP[analysisTopic];
    let dataPayload = {
        userName: userName,
        payload: dataToPublish,
        actionType: actionType
    };


    publishToKafkaTopic(topicName, dataPayload, function(err, publishResult) {
        logger.info('Done publishing, with result ', publishResult);
        callback(err, publishResult);
    });
}

const publishToKafkaTopic = function(topicName, dataPayload, callback) {
    let client = new kafka.Client(config.ZOOKPER_HOST);

    async.waterfall([function(callback) {
        upsertKafkaTopic(topicName, callback)
    }, function(prevStepResult, callback) {
        publishToKafka(topicName, dataPayload, callback);
    }], function(err, publishResults) {
        logger.debug('Finished publishToKafkaTopic with ', ' err: ', err, ' result: ', publishResults);
        callback(err, publishResults)
    });
}

const upsertKafkaTopic = function(topicName, callback) {
    let client = new kafka.Client(config.ZOOKPER_HOST);
    client.once('connect', function() {
        client.loadMetadataForTopics([topicName], (err, resp) => {
            logger.debug("Topic upsert result:", JSON.stringify(resp));
            callback(err, resp);
        });
    });
}

const publishToKafka = function(topicName, dataPayload, callback) {
    logger.debug('Publishing to topic ', topicName, ' with data: ', dataPayload);

    let client = new kafka.Client(config.ZOOKPER_HOST);
    let producer = new kafka.Producer(client);

    producer.on('ready', function() {
        let payloads = [{
            topic: topicName,
            messages: dataPayload
        }];

        producer.send(payloads, function(err, data) {
            if (err) {
                logger.error(
                    'Error in publishing message to messaging pipeline ', err
                );
                callback(err, null)
                return;
            }

            logger.debug('Published message to messaging pipeline topic ', topicName, ' with result: ', data);

            callback(null, data);
            return;
        });
    });
}

module.exports = {
    publishForProfileAnalysis: publishToAnalyze
}