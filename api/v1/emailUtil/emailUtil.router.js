const emailRouter = require('express').Router();
const cors = require('cors');
const emailCtrl = require('./emailUtil.controller');


emailRouter.use(cors());
// emailRouter.get('/valid', function(req, res) {
//     try {
//         let param = req.query;
//         emailCtrl.checkEmail(param).then((data) => {
//                 return res.status(201).send(data);
//             }),
//             err => {
//                 return res.status(500).send({
//                     error: 'Internal error occurred, please try later..!'
//                 })
//             }
//     } catch (error) {

//         return res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
//     }

// });

emailRouter.post('/send', function(req, res) {
    try {
        let jsonobj = req.body;
        jsonobj.host = req.get('host');
        emailCtrl.sendEmail(jsonobj).then((data) => {
                return res.status(201).send({ message: "sent successfully" })
            },
            (err) => {
                return res.status(500).send({
                    error: 'Internal error occurred, please try later..!'
                });
            });
    } catch (error) {
        console.log(error);
        return res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
    }

});

// emailRouter.get('/verify', function(req, res) {
//     try {
//         let objVerify = req.query;
//         emailCtrl.verify(objVerify).then((data) => {
//                 res.redirect("http://" + req.get('host') + "/register?token=" + data.token);
//             }),
//             err => {
//                 res.redirect("http://" + req.get('host') + "/login?message=" + data.msg);
//             }
//     } catch (error) {
//         return res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
//     }
// });

// emailRouter.get('/reset', function(req, res) {
//     let objReset = req.query;
//     try {
//         emailCtrl.verify(objReset).then((successResult) => {
//                 res.redirect("http://" + req.get('host') + "/passwordReset=" + successResult.token);
//             }),
//             err => {
//                 res.redirect("http://" + req.get('host') + "/login?message=" + successResult.msg);
//             }
//     } catch (error) {
//         return res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
//     }


// });

module.exports = emailRouter;
// emailRouter.post('/welcome', function (req, res) {
//     const jsonobj = JSON.parse(req.body.json);
//     console.log(jsonobj);
//     redirectLink = jsonobj.redirect;
//     mailBody = jsonobj.mailBody;
//     const mailOptions = {
//         from: "samarthyawave16@gmail.com",
//         to: jsonobj.to,
//         subject: jsonobj.subject,
//         html: `<h1 style='color : indigo'>SAMARTHYA</h1><br>
//         <h3 style='color : green'>Welcome to Samarthya!<h3>
//         <br>
//          <img src='http://www.petalspreschool.com/images/pre-school-career.jpg' alt='image not available' height="300" width="800">
//         <br>Thanks so much for joining us . You’re on your way to super-career and beyond!<br>
//        `
//     }
//     transporter.sendMail(mailOptions, function (error, response) {
//         if (error) {
//             console.log("sending erroer part ", error);
//             res.end("error");
//         } else {
//             console.log("Sending Mail...")
//             //  res.send(link); //send this link to email service to get response
//             res.end("sent");
//         }
//     });
// });