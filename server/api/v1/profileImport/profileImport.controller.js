const BulkModel = require('./profileImport.entity');
const logger = require('./../../../../applogger');


const addProfileImport = function (bulkData, fileName, remarks, username) {
    var data = {
        importData: bulkData,
        remarks: remarks,
        importFile: fileName,
        requestedOn: Date.now(),
        requestedBy: username

    };
    let bulk = new BulkModel(data);

    // insert the data into db using promise
    return new Promise((resolve, reject) => {
        bulk.save(function (err, data) {
            if (err) {
                logger.error('userData not added sucessfully' + err);
                reject(err);
            } else {

                resolve({
                    msg: 'in mongo added Successfully',
                    data: data,
                    success: true
                });
            }
        });
    });
}

const getImportHistory = function () {

    return new Promise((resolve, reject) => {
        BulkModel.find({}, {
            "importFile": 1,
            "remarks": 1,
            "importResult": 1,
            "requestedOn": 1
        }, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

const getFailureImportHistory = function (documentId) {
    return new Promise((resolve, reject) => {
        BulkModel.find({
            "_id": documentId
        }, {
            _id: 0,
            importData: {
                $elemMatch: {
                    importStatus: "failed"
                }
            }
        }, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};



module.exports = {
    getImportHistory: getImportHistory,
    getFailureImportHistory: getFailureImportHistory,
    addProfileImport: addProfileImport

};