const appConfig = require('./../common/appConstants');
const mongoose = require('mongoose');

/*
 * This is a users schema, for persisting credentials of each user registered in the system
 */

const bulkSchema = new mongoose.Schema({
   documentId:{type:String,required:true },
   totalProfiles:{type:Number},
   status:{
        noOfSuccess:{type:Number,default:0},
        noOfFailure:{type:Number,default:0},
   },
    createdOn: { type: Date, default: Date.now() },
    finishedOn:{type:Date,deault:Date.now()}
}, { collection: 'bulkentryhistory' });

// @TODO
// Add a virtual column for password encryption, encrypt the pasword before storing
// add a method to compare the password (the incoming password will be encrypted and compared )

module.exports = mongoose.model('bulkentryhistory', bulkSchema);
