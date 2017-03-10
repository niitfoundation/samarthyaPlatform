const menuRouter = require('express').Router();
const jsondata = require("../jsonData/jsonData.json");
// declare axios for making http requests
const axios = require('axios');
menuRouter.get('/navigationlinks', function(req, res) {
        let role = req.decoded.Role;
console.log(role);
        switch (role) {
            case "Admin":
                return res.json({ success: true, message: "Authenticated", object: req.decoded, jsondata: jsondata.navList["Admin"] });
            case "Coordinator":
                return res.json({ success: true, message: "Authenticated", object: req.decoded, jsondata: jsondata.navList["coordinator"] });
            case "Supervisor":
                return res.json({ success: true, message: "Authenticated", object: req.decoded, jsondata: jsondata.navList["supervisor"] });
            default:
                return res.json({ success: false, message: "Authenticated", object: req.decoded, jsondata: null });
        }
    })
    //Get Token 
    // Get all posts
    // router.get('/posts', (req, res) => {
    //     // Get posts from the mock api
    //     // This should ideally be replaced with a service that connects to MongoDB
    //     axios.get(`${API}/posts`)
    //         .then(posts => {
    //             res.status(200).json(posts.data);
    //         })
    //         .catch(error => {
    //             res.status(500).send(error)
    //         });
    // });

module.exports = menuRouter;