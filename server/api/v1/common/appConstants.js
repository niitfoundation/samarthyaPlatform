const emailDetails = {
    serviceProvide: 'Gmail',
    user: 'samarthyawave16@gmail.com',
    password: 'Samarthya@wave16',
    emailTokenSecret: 'Email Token'
};
const userDetails = {

    USER_STATUS: ['Active', 'InActive', 'Suspended'],
    USER_ROLE: ['Admin', 'Supervisor', 'Coordinator'],
};
const secret = 'somethinghere';
const expireTime = 60 * 30;
const SALT_WORK_FACTOR = 10;
const profileDetails = {
    IDENTITY_TYPES: ['Aadhaar', 'RegNumber', 'EmpNum']
};

module.exports = {
    emailDetails: emailDetails,
    userDetails: userDetails,
    secret: secret,
    expireTime: expireTime,
    profileDetails: profileDetails,
    SALT_WORK_FACTOR: SALT_WORK_FACTOR
};