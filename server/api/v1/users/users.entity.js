const appConfig = require('./../common/appConstants');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const logger = require('./../../../../applogger');


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
}, { collection: 'users' });

//  mongoose middleware for password encryption, encrypt the pasword before storing
usersSchema.pre('save', function(next) {
    var user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    logger.debug('mongoose middleware called for password encryption');
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) {
        logger.debug('user already exists');
        return next();
    }
    // generate a salt
    bcrypt.genSalt(appConfig.SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            logger.debug('Password encryption started');

            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

//  mongoose middleware for password encryption, encrypt the pasword before storing
usersSchema.pre('update', function(next) {
    var user=this;
  var update = this._update;
  console.log(update);
    // generate a salt
    console.log(update.$set.password)
    if (update.$set && update.$set.password) {
   bcrypt.genSalt(appConfig.SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
        // hash the password using our new salt
        bcrypt.hash(update.$set.password, salt, function(err, hash) {
            logger.debug('Password encryption started');

            if (err) return next(err);
            // override the cleartext password with the hashed one
            update.$set.password = hash;
            
  
            console.log(update.$set.password)
            this.password=update.$set.password;
            next();
        });
  });
    }
});

   
//   if (update.$set && update.$set.name) {
//     this.update({}, { name: transform(update.$set.name) });
//   }

// method to compare the password (the incoming password will be encrypted and compared )
usersSchema.methods.comparePassword = function(userPassword, callback) {
    logger.debug('compare Password method called');
    bcrypt.compare(userPassword, this.password, function(err, isMatch) {
        if (err) return callback(err);
        console.log(isMatch);
        callback(null, isMatch);
    });
};


module.exports = mongoose.model('users', usersSchema);
