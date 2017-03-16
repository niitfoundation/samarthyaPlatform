const appConfig = require('../../../config/appConfig');
const mongoose = require('../../../config/databaseConfig');

/*
 * This is a profile schema, for persisting profile details of each user registered in the system
 */
const profileSchema = new mongoose.Schema({

}, { collection: 'profile' });


module.exports = mongoose.model('profile', profileSchema);