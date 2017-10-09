const appConstant = require('../common/appConstants');
const mongoose = require('mongoose');

/*
 * This is a profile schema, for persisting profile details of each user registered in the system
 */

const profileSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    profession: { type: String, required: true },
    centerCode: { type: String },
    profilePic: { type: String },
    createdOn: { type: Date, required: true, default: Date.now },
    createdBy: { type: String, required: true },
    updatedOn: { type: Date, required: true, default: Date.now },
    updatedBy: { type: String, required: true },
    summary: {
        summaryText: { type: String }
    },
    personalInfo: {
        name: { type: String, min: 2, max: 30 },
        fname: { type: String, required: true, min: 2 },
        lname: { type: String },
        dob: { type: Date },
        gender: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        altemail: { type: String },
        contact: {
            I: { type: String, required: true, min: 10, max: 10 },
            II: { type: String }
        },
        address: {
            address1: { type: String },
            address2: { type: String },
            landmark: { type: String },
            district: { type: String },
            state: { type: String, required: true },
            pincode: { type: String, required: true, min: 6, max: 6 }
        },
        married: { type: Boolean },
        identity: [{
            idType: { type: String, required: true, enum: appConstant.profileDetails.IDENTITY_TYPES },
            value: { type: String }
        }],
        prefLang: { type: String },
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
        result: { type: String },
        institute: { type: String },
        affiliation: { type: String },
        location: { type: String }
    }],
    // jobpreferences
    jobPreferences: {
        looking: { type: Boolean, default: true },
        jobRoles: [{
            name: { type: String },
            engagement: { type: String },
            expectedSal: {
                min: { type: Number, default: 0 },
                max: { type: Number, default: 0 },
            },
            skills: [{ type: String }],
            availablefrom: { type: Date, default: Date.now },
            locations: [{ type: String }]
        }]
    },
    // experience
    experiences: [{
        workplace: { type: String },
        designation: { type: String },
        jobRole: { type: String },
        location: { type: String },
        duration: {
            start: { type: Date},
            end: { type: Date }
        },
        isCurrent: { type: Boolean }
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
            start: { type: Date },
            end: { type: Date, default: Date.now }
        },
        location: { type: String },
        skills: [{ type: String }],
        jobRole: { type: String }
    }],
    // showcase
    showcase: [{
        contenttype: { type: String },
        title: { type: String },
        url: { type: String },
        desc: { type: String }
    }],
    // placement history
    placementHistory: [{
        isCurrent: { type: Boolean },
        workplace: { type: String },
        designation: { type: String },
        jobRole: { type: String },
        location: { type: String },
        salary: { type: Number },
        duration: {
            start: { type: Date},
            end: { type: Date }
        },
        placementType: { type: String }, // self, assisted, other, unknown
        placementStatus: { type: String }, // inprogress, accepted, rejected, candidateRejected, other
        placementRemarks: { type: String }, 
        coordinatorName: { type: String },
        coordinatorContact: { type: String },
        employerName: { type: String },
        employerContact: { type: String },
        employerFeedback: { type: String }
    }]
}, { collection: 'profiles' });

module.exports = mongoose.model('profiles', profileSchema);