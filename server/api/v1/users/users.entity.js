const appConfig = require('./../common/appConstants');
const mongoose = require('mongoose');

/*
 * This is a users schema, for persisting credentials of each user registered in the system
 */

const usersSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, virtual: true },
    role: { type: String, enum: appConfig.USER_ROLES },
    status: { type: String, enum: appConfig.USER_STATUS },
    lastLoginOn: { type: Date, default: Date.now },
    createdOn: { type: Date, default: Date.now },
    updatedOn: { type: Date, default: Date.now },
    hash: { type: String },
    salt: { type: String }
}, { collection: 'users' });

//  method for password encryption, encrypt the pasword before storing
userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

// add a method to compare the password (the incoming password will be encrypted and compared )

module.exports = mongoose.model('users', usersSchema);