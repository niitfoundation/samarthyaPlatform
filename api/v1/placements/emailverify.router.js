const emailRouter = require('express').Router();
const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");
const path = require('path');
const util = require('util');
const cors = require('cors');
const candidates = require('./../jsonData/candidateDetails.json')
const smptp = require('smtp-server');
const smtpTransport = require('nodemailer-smtp-transport');
let userEmailDetails = [];
const transporter = nodemailer.createTransport(smtpTransport({
    service: "Gmail",
    //host: "smtp.gmail.com",
    // port: 465,
    //secure: true,
    auth: {
        user: "samarthyawave16@gmail.com",
        pass: "Samarthya@wave16"
    }
}));
emailRouter.use(cors());
emailRouter.get('/candidates', function(req, res) {

    let param = req.query;
    console.log(param.email);
    return res.json({
        success: true,
        data: candidates["candidates"].filter(function(item) {
            return item.email == param.email;
        })
    });
})

emailRouter.post('/sendmail', function(req, res) {
    const jsonobj = JSON.parse(req.body.json);
    const redirectLink = jsonobj.redirect;
    const userMail = jsonobj.to;
    const mailBody = jsonobj.mailBody;
    //------------verify-----------
    // expire in 30 minredirectLink
    const token = jwt.sign(jsonobj, 'I AM EMAIL TOKEN', { expiresIn: 60 });
    const host = req.get('host');
    const link = "http://" + req.get('host');
    //----------verify------------------

    const mailOptions = {
        from: "samarthyawave16@gmail.com",
        to: jsonobj.to,
        subject: jsonobj.subject,
        html: "<h1>SAMARTHYA</h1><br><img src='https://cellpartzone.com/image/catalog/Career.jpg' alt='W3Schools.com'><br><h3 style='color : red'>Confirm your mail and kick start your career by registring youself  with Samarthya<h3> <br><button type='button' style='background-color : green;padding: 14px 25px;'><a style='text-decoration : none;color : white' href=" + link + "/emailverify/verify?username=" + jsonobj.to + "&token=" + token + "&title=" + jsonobj.title + ">Confirm here</a></button>"
    }
    transporter.sendMail(mailOptions, function(error, response) {
        if (error) {
            console.log("sending erroer part ", error);
            res.end("error");
        } else {
            let userDetails = { "userEmail": jsonobj.to, "token": token };
            let userExist = userEmailDetails.filter(function(item) {
                return item.userEmail == jsonobj.to;
            })
            if (userExist.length == 0) {
                userEmailDetails.push(userDetails);
                console.log(userEmailDetails);
            } else {
                let index = userEmailDetails.indexOf(jsonobj.to);
                userEmailDetails.splice(index, 1);
                userEmailDetails.push(userDetails);
                console.log(userEmailDetails);
            }

            res.end("sent");

        }
    });
});

emailRouter.get('/verify', function(req, res) {
    let userToken = req.query.token;
    console.log(userToken);

    let user = req.query.email;
    let validUser = userEmailDetails.filter(function(valid) {
        return valid.email == user && valid.token == userToken;
    });
    if (validUser.length != 0) {
        jwt.verify(userToken, 'I AM EMAIL TOKEN', function(err, decoded) {
            if (err) {
                res.redirect("http://localhost:3002/login?message=Email Expired");
                // return res.json({ success: false, message: 'Email Expired' });
            } else {
                // if everything is good, save to request for use in other routes
                res.redirect("http://localhost:3002/register/" + req.query.title);
            }
        });
    } else {
        res.redirect("http://localhost:3002/login?message=Click the recent mail");
        // return res.json({ success: false, message: 'Click the recent email' });
    }
});
module.exports = emailRouter;