// get an instance of mongoose and mongoose.Schema
var mongoose = require('./../databaseConfig');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('UserDetailCandidate', new Schema({
    fname: String,
    lname: String,
    gender: String,
    email: String,
    regId: String,
    // dob:'',
    aadhar: String,
    mob: String,
    // conPassword: String,
    profession: String,
    pincode: String,
    location: String,
    placementCenter: String
}));