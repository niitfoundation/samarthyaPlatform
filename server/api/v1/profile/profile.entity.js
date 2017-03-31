const appConstant = require('../common/appConstants');
const mongoose = require('mongoose');

/*
 * This is a profile schema, for persisting profile details of each user registered in the system
 */

const profileSchema = mongoose.Schema({
    role:{type:String},
    username: { type: String, required: true, unique: true },
    profession: { type: String, required: true },
    centerCode: { type: String },
    pic: { type: String },
    createdOn: { type: Date, required: true, default: Date.now },
    createdBy: { type: String, required: true },
    updatedOn: { type: Date, required: true, default: Date.now },
    updatedBy: { type: String, required: true },
    personalinfo: {
        displayname: { type: String, min: 4, max: 15 },
        fname: { type: String, required: true, min: 4 },
        lname: { type: String, required: true },
        dob: { type: Date },
        gender: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        altemail: { type: String },
        contact: {
            I: { type: String, required: true, min: 10, max: 10 },
            II: { type: String }
        },
        address: [{
            address1: { type: String },
            address2: { type: String },
            landmark: { type: String },
            district: { type: String },
            state: { type: String, required: true },
            pincode: { type: String, required: true, min: 6, max: 6 }
        }],
        married: { type: Boolean },
        identity: [{
            type: { type: String, required: true, enum: appConstant.profileDetails.IDENTITY_TYPES },
            value: { type: String }
        }],
        preLang: { type: String },
        nativeLang: { type: String },
        lang: [{
            name: { type: String },
            r: { type: String },
            w: { type: String },
            s: { type: String },
        }],
    },
    // educational qualification
    qualifications: [{
        name: { type: String },
        subject: { type: String },
        academictype: { type: String },
        batch: { type: String },
        result: { score: { type: String }, unit: { type: String } },
        institute: { type: String },
        affiliation: { type: String },
        location: { type: String }
    }],
    // jobpreferences
    jobPreferences: {
        looking: { type: Boolean, default: true },
        roles: [{
            name: { type: String },
            engagement: { type: String },
            expectedSal: [{
                min: { type: Number, default: 0 },
                max: { type: Number, default: 0 },
            }],
            skills: [{ type: String }],
            availablefrom: { type: Date, default: Date.now },
            locations: [{ type: String }]
        }]
    },
    // experience
    experiences: [{
        workplace: { type: String },
        designation: { type: String },
        role: { type: String },
        location: { type: String },
        duration: {
            start: { type: Date, default: Date.now },
            end: { type: Date, default: Date.now }
        },
        iscurrent: { type: Boolean }
    }],
    // skill
    skills: [{
        name: { type: String },
        experience: { type: Number, default: 0 },
        expertise: { type: String }
    }],
    // project
    projects: [{
        name: { type: String },
        description: { type: String },
        duration: {
            start: { type: Date, default: Date.now },
            end: { type: Date, default: Date.now }
        },
        location: { type: String },
        skills: [{ type: String }],
        role: { type: String }
    }],
    // showcase
    showcase: [{
        contenttype: { type: String },
        title: { type: String },
        url: { type: String },
        desc: { type: String }
    }],
    summary: { type: String }
}, { collection: 'profile' });

module.exports = mongoose.model('profile', profileSchema);


