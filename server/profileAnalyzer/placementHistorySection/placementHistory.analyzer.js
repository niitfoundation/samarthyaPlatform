const logger = require('./../../../applogger');
const async = require('async');
const placementHistoryModel = require('./placementHistory.graphmodel');


const analyze = function(profileUser, placementHistoryColln, callback) {
    // If data is not valid, return back without processing
    if (!profileUser ||
        !placementHistoryColln ||
        !Array.isArray(placementHistoryColln) ||
        placementHistoryColln.length <= 0) {
        logger.error('No data found to analyze');
        return callback({ error: 'No data found to analyze' }, null);
    }

    logger.info('Proceeding to analyze placement history..!');
    async.map(placementHistoryColln, function(instance, asyncCallback) {
        analyzePlacementHistoryInstance(profileUser, instance, asyncCallback);
    }, callback);

    return true;
};

analyzePlacementHistoryInstance = function(personName, placementHistory, analyzeResultCallback) {
    logger.debug('[*] Starting to analyze PlacementHistory instance [', personName + ':' + placementHistory.workplace, ']');
    console.log("Placement History", placementHistory, "Person name:", personName);

    async.parallel([
            placementHistoryModel.relatePersonToOrganisation.bind(null, personName, placementHistory),
            placementHistoryModel.relatePersonToOrganisationForAssisstedPlacement.bind(null, personName, placementHistory),
            placementHistoryModel.relatePersonToOrganisationForSelfPlacement.bind(null, personName, placementHistory)
        ],function(err, result) {
        if (err) {
            logger.error('Error in analyzing placementHistory instance ', err);
            analyzeResultCallback(err, null);
        }
        logger.debug('[*] Done analysing placementHistory instance [', personName + ':' + placementHistory.workplace, ']');
        analyzeResultCallback(null, result);
    });
};

module.exports = {
    analyze:analyze,
    analyzePlacementHistoryInstance:analyzePlacementHistoryInstance
}
