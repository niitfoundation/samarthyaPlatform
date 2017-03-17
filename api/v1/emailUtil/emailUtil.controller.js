const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");
const smptp = require('smtp-server');
const smtpTransport = require('nodemailer-smtp-transport');
const emailDetails = require('./../../../config/appConfig').emailDetails;
const userModel = require('./../users/users.entity');

const transporter = nodemailer.createTransport(smtpTransport({
    service: emailDetails.serviceProvide,
    //host: "smtp.gmail.com",
    // port: 465,
    //secure: true,
    auth: {
        user: emailDetails.user,
        pass: emailDetails.password
    }
}));

//send mail for registration and reset password
let sendEmail = function(jsonobj) {
    console.log(jsonobj);
    try {
        let tokenPaylod = { username: jsonobj.username, title: jsonobj.title };
        const token = jwt.sign(tokenPaylod, emailDetails.emailTokenSecret, { expiresIn: 6000 });

        const link = "http://" + jsonobj.host;
        //----------verify------------------
        const mailOptions = {
            from: emailDetails.user,
            to: jsonobj.username,
            subject: jsonobj.subject,
            html: "<h1>SAMARTHYA</h1><br><img src='https://cellpartzone.com/image/catalog/Career.jpg' alt='Samarthya.com'><br><h3 style='color : red'>Confirm your mail and kick start your career by registring youself  with Samarthya<h3> <br><button type='button' style='background-color : green;padding: 14px 25px;'><a style='text-decoration : none;color : white' href=" + link + "/register?confirm=" + token + ">Confirm here</a></button>"
        }
        let mail;
        if (jsonobj.subject == 'Password Reset') {
            mail = {
                from: emailDetails.user,
                to: jsonobj.username,
                subject: jsonobj.subject,
                html: "<h1>SAMARTHYA</h1><br><img src='https://cellpartzone.com/image/catalog/Career.jpg' alt='Samarthya.com'><br><h3 style='color : red'>Please click below to reset password with Samarthya<h3> <br><button type='button' style='background-color : green;padding: 14px 25px;'><a style='text-decoration : none;color : white' href=" + link + "/passwordReset?confirm=" + token + ">Change Password</a></button>"
            }

        } else {
            mail = mailOptions;
        }

        return new Promise((resolve, reject) => {
            transporter.sendMail(mail, function(err, response) {
                if (err) {
                    reject(err);
                } else {
                    resolve(response);
                }
            });
        })
    } catch (error) {
        return error;
    }
}
module.exports = {
    sendEmail: sendEmail
}