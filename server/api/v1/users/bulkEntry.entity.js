const appConfig = require('./../common/appConstants');
const mongoose = require('mongoose');

const IMPORT_STATUS = ['pending', 'inprogress', 'imported', 'error'];

const schema = new mongoose.Schema({
    remarks: { type: String, required: true },  
    importFile: { type: String, required: true },
    //Assuming this will be a JSON format, hence it will be array of documents, each document will be a profile 
    importData: { type: Array, required: true },
    status: { type: String, default: 'pending', enum: IMPORT_STATUS, required: true },
    importResult: {
        total: {type: Number, default: 0},
        success: {type: Number, default: 0},
        failed: {type: Number, default: 0},
        errors: [{type: String}],
    },
    //Finally when all profiles were done processing
    importedOn: { type: Date, default: Date.now },
    requestedBy: { type: String },
    requestedOn: { type: Date, default: Date.now },
    updatedBy: { type: String },
    updatedOn: { type: Date, deault: Date.now }
}, {collection: 'profileimports'});

//Create the unique index as a composite key
//importFile
//requestedBy
//requestedOn
schema.index({importFile:1,requestedBy:1,requestedOn:1}, {unique: true});

module.exports = mongoose.model('profileimports', schema);
