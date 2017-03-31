const logger = require('./../../../../applogger');
const UserCtrl = require('./../users/users.controller');
const BulkModel=require('./../users/bulkEntry.entity');

const registerNewCoordinate = function(coordinateObj) {
    // UserCtrl.registerNewUser(coordinateObj);
};



const getImportHistory = function() {
   
    return new Promise((resolve, reject) => {
        BulkModel.find({},{"importFile":1,"remarks":1,"importResult":1,"requestedOn":1},function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    console.log(data)
                    resolve(data);
                }
            });
    });
};

const getFailureImportHistory=function(documentId) {
   console.log(documentId)
    return new Promise((resolve, reject) => {
        BulkModel.find({"_id":documentId},{_id: 0,importData: {$elemMatch: {importStatus: "failed"}}},function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    console.log(data)
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
