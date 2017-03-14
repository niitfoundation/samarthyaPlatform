const menuRouter = require('express').Router();
const jsondata = require("../jsonData/jsonData.json");
// declare axios for making http requests
const axios = require('axios');
menuRouter.get('/navigationlinks', function (req, res) {
    let role = req.decoded.Role;
    switch ("Admin") {
        case "Admin":
            return res.json({ success: true, message: "Authenticated", object: req.decoded, jsondata: jsondata.navListPlacement["Admin"] });
        case "Coordinator":
            return res.json({ success: true, message: "Authenticated", object: req.decoded, jsondata: jsondata.navListPlacement["coordinator"] });
        case "Supervisor":
            return res.json({ success: true, message: "Authenticated", object: req.decoded, jsondata: jsondata.navListPlacement["supervisor"] });
        default:
            return res.json({ success: false, message: "Role not found.No Authenticated", object: req.decoded, jsondata: null });
    }
})
module.exports = menuRouter;