const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const smptp = require('smtp-server');
const smtpTransport = require('nodemailer-smtp-transport');
const appConstant = require('./../common/appConstants');
const userModel = require('./../users/users.entity');
const logger = require('./../../../logger/logger');

const transporter = nodemailer.createTransport(smtpTransport({
    service: appConstant.emailDetails.serviceProvide,
    // host: "smtp.gmail.com",
    // port: 465,
    // secure: true,
    auth: {
        user: appConstant.emailDetails.user,
        pass: appConstant.emailDetails.password
    }
}));

// send mail for registration and reset password
let sendEmail = function(jsonobj) {
    try {
        logger.debug('sendEmail function is invoke');
        let tokenPaylod = { username: jsonobj.username, title: jsonobj.title };
        const token = jwt.sign(tokenPaylod, appConstant.emailDetails.emailTokenSecret, { expiresIn: 6000 });

        const link = 'http://' + jsonobj.host;
        // ----------verify------------------
        const mailOptions = {
            from: appConstant.emailDetails.user,
            to: jsonobj.username,
            subject: jsonobj.subject,
            html: '<h1>SAMARTHYA</h1><br><img src=\'https://cellpartzone.com/image/catalog/Career.jpg\' alt=\'Samarthya.com\'><br><h3 style=\'color : red\'>Confirm your mail and kick start your career by registring youself  with Samarthya<h3> <br><button type=\'button\' style=\'background-color : green;padding: 14px 25px;\'><a style=\'text-decoration : none;color : white\' href=' + link + '/register?confirm=' + token + '>Confirm here</a></button>'
        };
        let mail;
        if (jsonobj.subject == 'Password Reset') {
            mail = {
                from: appConstant.emailDetails.user,
                to: jsonobj.username,
                subject: jsonobj.subject,
                html: '<h1>SAMARTHYA</h1><br><img src=\'https://cellpartzone.com/image/catalog/Career.jpg\' alt=\'Samarthya.com\'><br><h3 style=\'color : red\'>Please click below to reset password with Samarthya<h3> <br><button type=\'button\' style=\'background-color : green;padding: 14px 25px;\'><a style=\'text-decoration : none;color : white\' href=' + link + '/passwordReset?confirm=' + token + '>Change Password</a></button>'
            };
        } else {
            mail = mailOptions;
        }

        return new Promise((resolve, reject) => {
            transporter.sendMail(mail, function(err, response) {
                if (err) {
                    logger.error('response not found');
                    reject(err);
                } else {
                    resolve(response);
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
