const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const smtpTransport = require('nodemailer-smtp-transport');
const appConstant = require('./../common/appConstants');
const userModel = require('./../users/users.entity');
const logger = require('./../../../../applogger');

const transporter = nodemailer.createTransport(smtpTransport({
    service: appConstant.emailDetails.serviceProvide,
    auth: {
        user: appConstant.emailDetails.user,
        pass: appConstant.emailDetails.password
    }
}));

// send mail for registration and reset password
let sendEmail = function (jsonobj) {
    try {
        let emailTemplate = appConstant.emailTemplate;
        logger.debug('sendEmail function is invoke');
        let tokenPaylod = { username: jsonobj.username, title: jsonobj.title };
        const token = jwt.sign(tokenPaylod, appConstant.emailDetails.emailTokenSecret, { expiresIn: appConstant.expireTime });
        const link = 'http://' + jsonobj.host;
        // ----------verify------------------
        const mailOptions = {
            from: appConstant.emailDetails.user,
            to: jsonobj.username,
            subject: jsonobj.subject,
            html: emailTemplate.header + emailTemplate.verifyEmail + emailTemplate.thankingRegistration + emailTemplate.actionButton + link +
            emailTemplate.verifyRouting + token + emailTemplate.verifyButtonValue + emailTemplate.thanksFromSamarthya + emailTemplate.copyLink +
            link + emailTemplate.verifyRouting + token + '">' + link + emailTemplate.verifyRouting + token + emailTemplate.closeTag
        };
        let mail;
        if (jsonobj.subject == 'Password Reset') {
            mail = {
                from: appConstant.emailDetails.user,
                to: jsonobj.username,
                subject: jsonobj.subject,
                html: emailTemplate.header + emailTemplate.verifyEmail + emailTemplate.passwordReset + emailTemplate.actionButton + link +
                emailTemplate.resetRouting + token + emailTemplate.restButtonValue + emailTemplate.thanksFromSamarthya +
                emailTemplate.copyLink + link + emailTemplate.resetRouting + token + `">` + link + emailTemplate.resetRouting + token + emailTemplate.closeTag
            };
        } else {
            mail = mailOptions;
        }

        return new Promise((resolve, reject) => {
            transporter.sendMail(mail, function (err, response) {
                if (err) {
                    logger.error('response not found');
                    reject(err);
                } else {
                    resolve({ success: true, response: response, msg: 'Mail sent Successfully' });
                }
            });
        });
    } catch (error) {
        logger.fatal('Exception occured' + err);
        return error;
    }
};
module.exports = {
    sendEmail: sendEmail
};
