const appConstant = require('./../common/appConstants');
const mongoose = require('mongoose');

/*
 * This is a user interface schema, for getting ui components for each user registered in the system
 */
const uiSchema = new mongoose.Schema({
    navList: {type: Object},
    profileSectionViewConfig: {type: Object}

}, { collection: 'resources' });


module.exports = mongoose.model('resources', uiSchema);
