const kafka = require('kafka-node');
const config = require('../../../../config/profileAnalysisConfig');
const logger = require('./../../../../applogger');



const publishToAnalyze = function(userName, dataToPublish, actionType,
    analysisTopic) {
    let topicName = config.SECTION_TO_TOPIC_MAP[analysisTopic];
    let dataPayload = {
        userName: userName,
        payload: dataToPublish,
        actionType: actionType
    };

    publishToKafka(topicName, dataPayload, function(err, publishResult) {
        logger.info('Done publishing, with result ', publishResult);
    });
}

const publishToKafka = function(topicName, dataPayload, callback) {
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


            logger.debug('Published message to messaging pipeline ', data);

            callback(null, data);
            return;
        });
    });
}

module.exports = {
    publishForProfileAnalysis: publishToAnalyze
}