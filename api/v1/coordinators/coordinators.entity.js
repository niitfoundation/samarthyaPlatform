const appConfig = require('../../../config/appConfig');
const mongoose = require('../../../config/databaseConfig');

/*
 * This is a users schema, for persisting credentials of each user registered in the system
 */
const usersSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: appConfig.USER_ROLES },
    status: { type: String, enum: appConfig.USER_STATUS },
    lastLoginOn: { type: Date, default: Date.now },
    createdOn: { type: Date, default: Date.now },
    updatedOn: { type: Date, default: Date.now }
}, { collection: 'users' });

//@TODO 
// Add a virtual column for password encryption, encrypt the pasword before storing 
// add a method to compare the password (the incoming password will be encrypted and compared )

module.exports = mongoose.model('users', usersSchema);