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

const predefinedStopwords = ['knows', 'know', 'person', 'persons', 'skill', 'skills', 'candidate', 'canidates', 'location', 'role'];

const emailTemplate = {

    header: `<div style='padding: 20px 0;text-align: center;background-color:#f2d9e6;color:#80bfff;margin:auto'><h1>SAMARTHYA</h1></div><br>`,
    passwordReset: `<span style='font-size:14px;color:#92b9b9;'>Hi,you can reset your password by clicking the below button.
    Don't share your password to anyone. Happy hiring..!</span><br><br>`,
    thankingRegistration: `<span style='font-size:14px;color:#92b9b9;'>Thanks for signing up for Samarthya! 
    We're excited to have you as a Samarthya member</span><br><br>`,
    actionButton: `<button type='button' style='background-color : #6666ff;padding: 10px 20px;text-align:center;margin-left:35%;color:white;'>
    <a style=\'text-decoration : none;color : white\' href="`,
    verifyEmail: `<div style='padding:0 20%'><h2 style='color : black'>Verify your email address</h2>`,
    verifyButtonValue: '">Verify and Register</a>',
    verifyRouting: '/#/register?confirm=',
    resetRouting: '/#/passwordReset?confirm=',
    restButtonValue: '">Reset Password</a>',
    passwordEmail: `<div style='padding:0 20%'><h3 style='color : black'>Reset Password</h3>`,
    thanksFromSamarthya: `</button><div style='margin-top:5%;font-size:16px'> Thanks,<br> The Samarthya Team <hr style="margin-top:5%;"></div>`,
    copyLink: ` <span style='font-size:14px;color:#92b9b9;'>If you’re having trouble clicking the button, copy and paste the URL below into 
    your web browser.</span><br><a style="font-size:12px" href="`,
    closeTag: `</a></div>`

};

module.exports = {
    emailDetails: emailDetails,
    userDetails: userDetails,
    secret: secret,
    expireTime: expireTime,
    profileDetails: profileDetails,
    SALT_WORK_FACTOR: SALT_WORK_FACTOR,
    predefinedSW: predefinedStopwords,
    emailTemplate: emailTemplate
};