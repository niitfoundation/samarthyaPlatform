const appConfig = require('./../common/appConstants');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

/*
 * This is a users schema, for persisting credentials of each user registered in the system
 */

const usersSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, virtual: true },
    role: { type: String, enum: appConfig.USER_ROLES },
    status: { type: String, enum: appConfig.USER_STATUS },
    lastLoginOn: { type: Date, default: Date.now },
    createdOn: { type: Date, default: Date.now },
    updatedOn: { type: Date, default: Date.now },
    hash: { type: String },
    salt: { type: String }
}, { collection: 'users' });

//  mongoose middleware for password encryption, encrypt the pasword before storing
usersSchema.pre('save', function(next) {
    var user = this;
    console.log("middleWare Called");
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    console.log("user Modified or new");
    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            console.log('hassing password');
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            console.log(user.password);
            next();
        });
    });
});

// method to compare the password (the incoming password will be encrypted and compared )
usersSchema.methods.comparePassword = function(userPassword, callback) {
    bcrypt.compare(userPassword, this.password, function(err, isMatch) {
        if (err) return callback(err);
        console.log(this);
        callback(null, isMatch);
    });
};


module.exports = mongoose.model('users', usersSchema);