const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");
const smptp = require('smtp-server');
const smtpTransport = require('nodemailer-smtp-transport');
const emailDetails = require('./../../../config/appConfig').emailDetails;
const emailModel = require('./../users/users.entity');


let userEmailDetails = [];
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
// validate if user already exists or not
let checkEmail = function(objEmail) {
    let userDetails = {
        "username": objEmail.username,
    };
    return new Promise((resolve, reject) => {
        emailModel.find(userDetails, function(err, data) {
            if (err) {
                reject(err);
            } else {
                if (data.length == 0) {
                    resolve({
                        data: data,
                        message: "user already exist"
                    })
                } else {
                    resolve(data);
                }
            }

        });
    });
}


let sendEmail = function(jsonobj) {
    try {
        let tokenPaylod = { username: jsonobj.to, title: jsonobj.title };
        const token = jwt.sign(tokenPaylod, emailDetails.emailtokenSecret, { expiresIn: 6000 });
        const link = "http://" + jsonobj.host;
        //----------verify------------------
        const mailOptions = {
            from: emailDetails.user,
            to: jsonobj.to,
            subject: jsonobj.subject,
            html: "<h1>SAMARTHYA</h1><br><img src='https://cellpartzone.com/image/catalog/Career.jpg' alt='Samarthya.com'><br><h3 style='color : red'>Confirm your mail and kick start your career by registring youself  with Samarthya<h3> <br><button type='button' style='background-color : green;padding: 14px 25px;'><a style='text-decoration : none;color : white' href=" + link + "/email/verify?token=" + token + ">Confirm here</a></button>"
        }
        let mail;
        if (jsonobj.subject == 'Password Reset') {
            mail = jsonobj;
            mail.html = "<h1>SAMARTHYA</h1><br><img src='https://cellpartzone.com/image/catalog/Career.jpg' alt='Samarthya.com'><br><h3 style='color : red'>Please click below to reset password with Samarthya<h3> <br><button type='button' style='background-color : green;padding: 14px 25px;'><a style='text-decoration : none;color : white' href=" + link + "/email/reset?token=" + token + ">Change Password</a></button>"
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
let verify = function(objVerify) {
    try {
        let userToken = objVerify.token;
        console.log(userToken);
        return new Promise((resolve, reject) => {
            jwt.verify(userToken, emailDetails.emailtokenSecret, function(err, decoded) {
                if (err) {
                    reject(err);
                } else {
                    resolve({
                        msg: "Email Verified",
                        token: userToken
                    })
                }
            });
        })


    } catch (err) {
        console.log(err);
        return err;
    }

}

// let resetEmail = function(objReset) {
//     let userToken = objReset.token;
//     let user = objReset.username;
//     let validUser = userEmailDetails.filter(function(valid) {
//         return valid.userEmail == user && valid.token == userToken;
//     });
//     if (validUser.length != 0) {
//         jwt.verify(userToken, emailDetails.emailTokenSecret, function(err, decoded) {
//             if (err) {
//                 return false;
//             } else {
//                 return true;
//             }
//         });
//     } else {
//         res.redirect("http://" + req.get('host') + "/login?message=Click the recent mail");
//         // return res.json({ success: false, message: 'Click the recent email' });
//     }
// }
module.exports = {
    sendEmail: sendEmail,
    checkEmail: checkEmail,
    verify: verify
}