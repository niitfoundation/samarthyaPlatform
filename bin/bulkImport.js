const app = require('express')();
const http = require('http');
const BulkModel = require('./../server/api/v1/users/bulkEntry.entity');
const BulkHistoryModel = require('./../server/api/v1/users/bulkEntryHistory.entity');
const UserModel = require('./../server/api/v1/users/users.entity');
const ProfileModel = require('./../server/api/v1/profile/profile.entity');

const bodyParser = require('body-parser');
const _ = require("highland");
const fs = require('fs');
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())
app.post('/save', function (req, res) {
    let saveData;
    require("../server/services/webapp.service").setupMongooseConnections();
    try {
        BulkModel.find({
            "_id": req.query.datas
        }, function (err, datas) {
            if (err) {
                console.log(err);
            } else {
                var bulkHistoryId = {
                    "documentId": req.query.datas,
                    "totalProfiles": datas[0].data.length
                }
                bulkHistory = new BulkHistoryModel(bulkHistoryId);
                bulkHistory.save(function (err, data) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log("saving")
                    }
                })
                var result = _(datas[0].data) // Creates a stream from an array of filenames
                    .map(function (fileContent) {
                        return fileContent
                    });
                result.each(function (d) {
                    saveData = {
                        username: d.username,
                        password: d.username,
                        role: d.role,
                        status: "ACTIVE",
                        createdOn: Date.now(),
                        updatedOn: Date.now()
                    };

                    userData = new UserModel(saveData);
                    userData.save(function (err, data) {
                        details = {
                            documentId: req.query.datas
                        }
                        if (err) {
                            console.log('userData not added sucessfully' + err);
                            BulkHistoryModel.update(details, {

                                $inc: {
                                    "status.noOfFailure": 1
                                }

                            },
                                function (err, data) {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        console.log("Failure Status added success")

                                    }
                                });

                        } else {
                            profileData = new ProfileModel(d);
                            profileData.save(function (err, docs) {
                                if (err) {
                                    console.log("error in profile add" + err);
                                    UserModel.remove({ "username": d.username }, function (err, removeDocs) {
                                        if (err) {
                                            console.log("Error in remove the user data while fail" + err)
                                        }
                                        else {
                                            console.log("remove userData success while fail");
                                        }
                                    })
                                }
                                else {
                                    console.log("profile added");
                                    BulkHistoryModel.update({
                                        "documentId": req.query.datas
                                    }, {
                                            $inc: {
                                                "status.noOfSuccess": 1
                                            }
                                        },
                                        function (err, data) {
                                            if (err) {
                                                console.log(err);
                                            } else {
                                                BulkModel.update({}, { $pull: { data: { "username": d.username } } },
                                                    function(err, updataData) {
                                                        if(err) {
                                                            console.log("error in bylkmodel update" + err);
                                                        }
                                            else {
                                                            console.log("success status added");
                                                        }
                                                    })

                                            }
                                        });
                                }
                            })

                        }
                    });
                })
            }
        })
    } catch (err) {
        return res.send(err);
    }
    return res.end;
})

app.listen(3001, function () {
    console.log("Working on port 3001");
});