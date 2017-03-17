const appConfig = require('../../../config/appConfig');
const mongoose = require('../../../config/databaseConfig');

/*
 * This is a profile schema, for persisting profile details of each user registered in the system
 */

const profileSchema = new schema({
    username: { type: String, required: true, unique: true, min: 5 },
    profession: { type: String },
    centerCode: { type: String },
    pic: { type: String },
    createdOn: { type: Date, default: Date.now },
    createdBy: { type: Date, default: Date.now },
    updatedOn: { type: Date, default: Date.now },
    updatedBy: { type: Date, default: Date.now },
    personalinfo: {
        name: { type: String, required: true },
        fname: { type: String, required: true },
        lname: { type: String, required: true },
        dob: { type: Date, required: true },
        age: { type: Number, required: true }, // virtual column
        gender: { type: String, required: true },
        email: { type: String, required: true, unique },
        altemail: { type: String },
        contact: [{
            I: { type: String, required: true, min: 10 },
            II: { type: String }
        }],
        address: [{
            line1: { type: String, required: true },
            line2: { type: String },
            landmark: { type: String, required: true },
            district: { type: String, required: true },
            state: { type: String, required: true },
            pinCode: { type: String, required: true, max: 6 }
        }],
        married: { type: String },
        identity: [{
            aadharNumber: { type: String, max: 12 },
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

    // educational qualification
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
    // jobpreferences
    preferences: {
        looking: { type: Boolean },
        roles: [{
            name: { type: String },
            engagement: { type: String },
            expectedSal: [{
                min: { type: Number, required: true },
                max: { type: Number, required: true },
            }],
            skills: [{ type: String }],
            availablefrom: { type: Date },
            locations: [{ type: String }]
        }]
    },
    // experience
    experience: [{
        workplace: { type: String },
        designation: { type: String },
        role: { type: String },
        location: { type: String }
    }],
    // skill
    skill: [{
        name: { type: String },
        experience: { type: Number },
        expertise: { type: String }
    }],
    // project
    project: [{
        name: { type: String },
        description: { type: String },
        duration: {
            start: { type: Date },
            end: { type: Date }
        },
        location: { type: String },
        skills: [{ type: String }],
        role: { type: String },


    }],

    // showcase
    showcase: [{
        contenttype: { type: String },
        title: { type: String },
        url: { type: String },
        desc: { type: String }
    }],

}, { collection: 'profile' });

module.exports = mongoose.model('profile', profileSchema);
