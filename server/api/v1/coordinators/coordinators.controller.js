const logger = require('./../../../../applogger');
const UserCtrl = require('./../users/users.controller');
const BulkHistoryModel=require('./../users/bulkEntryHistory.entity');
const BulkModel=require('./../users/bulkEntry.entity');

const registerNewCoordinate = function(coordinateObj) {
    // UserCtrl.registerNewUser(coordinateObj);
};



const getImportHistory = function() {
   
    return new Promise((resolve, reject) => {
        BulkHistoryModel.find(function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
    });
};

const getFailureImportHistory=function(documentId) {
   
    return new Promise((resolve, reject) => {
        BulkModel.find({"_id":documentId},function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
    });
};



module.exports = {

    registerNewCoordinate: registerNewCoordinate,
    getImportHistory:getImportHistory,
    getFailureImportHistory:getFailureImportHistory
};
