const menuRouter = require('express').Router();
const uiCtrl = require('./uiResource.controller');
const logger = require('./../../../logs/logger');

menuRouter.get('/languages', function(req, res) {
    try {
        uiCtrl.getLanguage().then((successResult) => {
            logger.info('Get languages successfully and return back');
            return res.status(201).send(successResult);
        }, (errResult) => {
            //Log the error for internal use
            logger.error('Internal error occurred');
            return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
        });
    } catch (err) {
        //Log the Error for internal use
        logger.fatal('Exception occurred'+err);
        return res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
    }
});

// router.get('/pincodeDetails', function(req, res) {
//     let param = req.query;
//     try {
//         if (!param) {
//             throw new Error("Invalid inputs passed...!");
//             return;
//         }
//         uiCtrl.getPincode(param).then((successResult) => {
//             return res.status(201).send(successResult);
//         }, (errResult) => {
//             //Log the error for internal use
//             return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
//         });
//     } catch (err) {
//         //Log the Error for internal use
//         return res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
//     }
// });

// let param = req.body.pincode;
// return res.json({
//     success: true,
//     pincodeData: pincodeJson["pincodeDetails"].filter(function(item) {
//         return item.pincode == param
//     })
// });



// menuRouter.get('/navigationlinks', function(req, res) {
//     let role = req.decoded.Role;

//     try {
//         if (!role) {
//             throw new Error("Invalid inputs passed...!");
//             return;
//         }
//         uiCtrl.getPincode(role).then((successResult) => {
//             return res.status(201).send(successResult);
//         }, (errResult) => {
//             //Log the error for internal use
//             return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
//         });
//     } catch (err) {
//         //Log the Error for internal use
//         return res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
//     }
//     let role = req.decoded.Role;
//     switch ("Admin") {
//         case "Admin":
//             return res.json({ success: true, message: "Authenticated", object: req.decoded, jsondata: jsondata.navListPlacement["Admin"] });
//         case "Coordinator":
//             return res.json({ success: true, message: "Authenticated", object: req.decoded, jsondata: jsondata.navListPlacement["coordinator"] });
//         case "Supervisor":
//             return res.json({ success: true, message: "Authenticated", object: req.decoded, jsondata: jsondata.navListPlacement["supervisor"] });
//         default:
//             return res.json({ success: false, message: "Role not found.No Authenticated", object: req.decoded, jsondata: null });
//     }
// })
module.exports = menuRouter;