const appConfig = require('../../../config/appConfig');
const mongoose = require('../../../config/databaseConfig');

/*
 * This is a profile schema, for persisting profile details of each user registered in the system
 */

const profileSchema = new schema({
    username: { type: String, required: true, unique: true },
    profession: { type: String, required: true },
    centerCode: { type: String, required: true },
    pic: { type: String },
    createdOn: { type: Date, required: true, default: Date.now },
    createdBy: { type: Date, required: true, default: Date.now },
    updatedOn: { type: Date, required: true, default: Date.now },
    updatedBy: { type: Date, required: true, default: Date.now },
    personalinfo: {
        displayname: { type: String, required: true, min: 4, max: 15 },
        fname: { type: String, required: true, min: 4 },
        lname: { type: String, required: true },
        dob: { type: Date, required: true },
        age: { type: Number, required: true, virtuals: true },
        gender: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        altemail: { type: String },
        contact: [{
            I: { type: String, required: true, min: 10, max: 10 },
            II: { type: String }
        }],
        address: [{
            landmark: { type: String, required: true },
            district: { type: String, required: true },
            state: { type: String, required: true },
            pinCode: { type: String, required: true, min: 6, max: 6 }
        }],
        married: { type: Boolean },
        identity: [{
            aadharNumber: { type: String, min: 12, max: 12 },
            registrationID: { type: String }
        }],
        preLang: { type: String },
        nativeLang: { type: String },
        lang: [{
            name: { type: String, required: true },
            r: { type: String, required: true },
            w: { type: String, required: true },
            s: { type: String, required: true },
        }],
    },
    qualification: [{
        name: { type: String },
        subject: { type: String },
        academictype: { type: String },
        batch: { type: String },
        result: { score: { type: String }, unit: { type: String } },
        institute: { type: String },
        affiliation: { type: String },
        location: { type: String }
    }],
    preferences: {
        looking: { type: Boolean, default: true },
        roles: [{
            name: { type: String },
            engagement: { type: String },
            expectedSal: [{
                min: { type: Number, required: true, default: 0 },
                max: { type: Number, required: true, default: 0 },
            }],
            skills: [{ type: String }],
            availablefrom: { type: Date, default: Date.now },
            locations: [{ type: String }]
        }]
    },
    experience: [{
        workplace: { type: String },
        designation: { type: String },
        role: { type: String },
        location: { type: String }
    }],
    skill: [{
        name: { type: String },
        experience: { type: Number, default: 0 },
        expertise: { type: String }
    }],
    project: [{
        name: { type: String },
        description: { type: String },
        duration: {
            start: { type: Date, default: Date.now },
            end: { type: Date, default: Date.now }
        },
        location: { type: String },
        skills: [{ type: String }],
        role: { type: String },

    }],
    showcase: [{
        contenttype: { type: String },
        title: { type: String },
        url: { type: String },
        desc: { type: String }
    }],

}, { collection: 'profile' });

module.exports = mongoose.model('profile', profileSchema);