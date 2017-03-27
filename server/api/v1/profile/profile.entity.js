const appConstant = require('../common/appConstants');
const mongoose = require('mongoose');

/*
 * This is a profile schema, for persisting profile details of each user registered in the system
 */

const profileSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    profession: { type: String, required: true },
    centerCode: { type: String},
    pic: { type: String, default: '', },
    createdOn: { type: Date, required: true, default: Date.now },
    createdBy: { type: String, required: true },
    updatedOn: { type: Date, required: true, default: Date.now },

    updatedBy: { type: String },
    personalInfo: {
        displayname: { type: String, min: 4, max: 15 },
        fname: { type: String, required: true, min: 4 },
        lname: { type: String, required: true },
        dob: { type: Date },
        age: { type: Number, virtuals: true },
        gender: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        altemail: { type: String, default: '' },
        role: { type: String, default: '' },
        contact: [{
            I: { type: String, required: true, min: 10, max: 10 },
            II: { type: String, default: '', }
        }],
        address: [{
            landmark: { type: String, required: true },
            district: { type: String, required: true },
            state: { type: String, required: true },
            pinCode: { type: String, required: true, min: 6, max: 6 }
        }],
        married: { type: Boolean },
        identity: [{
            aadharNumber: { type: String, default: '', min: 12, max: 12 },
            registrationID: { type: String, default: '', }
        }],
        preLang: { type: String, default: '', },
        nativeLang: { type: String, default: '', },
        lang: [{
            name: { type: String },
            r: { type: String },
            w: { type: String },
            s: { type: String },
        }],
    },
    // educational qualification
    qualification: [{
        name: { type: String, default: '', },
        subject: { type: String, default: '', },
        academictype: { type: String, default: '', },
        batch: { type: String, default: '', },
        result: { score: { type: String, default: '', }, unit: { type: String, default: '', } },
        institute: { type: String, default: '', },
        affiliation: { type: String, default: '', },
        location: { type: String, default: '', }
    }],
    // jobpreferences
    preferences: {
        looking: { type: Boolean, default: true },
        roles: [{
            name: { type: String, default: '', },
            engagement: { type: String, default: '', },
            expectedSal: [{
                min: { type: Number, default: 0 },
                max: { type: Number, default: 0 },
            }],
            skills: [{ type: String, default: '', }],
            availablefrom: { type: Date, default: Date.now },
            locations: [{ type: String, default: '', }]
        }]
    },
    // experience
    experience: [{
        workplace: { type: String, default: '', },
        designation: { type: String, default: '', },
        role: { type: String, default: '', },
        location: { type: String, default: '', }
    }],
    // skill
    skill: [{
        name: { type: String, default: '', },
        experience: { type: Number, default: 0 },
        expertise: { type: String, default: '', }
    }],
    // project
    project: [{
        name: { type: String, default: '', },
        description: { type: String, default: '', },
        duration: {
            start: { type: Date, default: Date.now },
            end: { type: Date, default: Date.now }
        },
        location: { type: String, default: '', },
        skills: [{ type: String, default: '', }],
        role: { type: String, default: '', },

    }],
    // showcase
    showcase: [{
        contenttype: { type: String, default: '', },
        title: { type: String, default: '', },
        url: { type: String, default: '', },
        desc: { type: String, default: '', }
    }],
    summary: { type: String, default: '', }
}, { collection: 'profile' });

module.exports = mongoose.model('profile', profileSchema);