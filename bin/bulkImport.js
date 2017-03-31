const app = require('express')();
const http = require('http');
const BulkModel = require('./../server/api/v1/users/bulkEntry.entity');
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
                BulkModel.update({"_id":req.query.datas},{
                    $set:{
                        "importResult.total": datas[0].importData.length
                    }
                },function (err, data) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log("updted total profiles")
                    }
                })
                let result = _(datas[0].importData) // Creates a stream from an array of filenames
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
                            "_id": req.query.datas
                        }
                        if (err) {
                            console.log('userData not added sucessfully' + err);
                            BulkModel.update(details, {

                                $inc: {
                                    "importResult.failed": 1
                                }

                            },
                                function (err, data) {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                       BulkModel.update({ "_id": req.query.datas,"importData.personalinfo.contact.I":d.personalinfo.contact.I }, {
                                            $set: {
                                                "importData.$.importStatus": "failed",
                                                "importResult.errors":err
                                            }
                                        }, function (err, data) {
                                            if (err) {
                                                console.log("Error in adding import Failed status")
                                            }
                                            else {
                                                console.log("failure Status added success")

                                            }
                                        })

                                    }
                                });

                        } else {
                            profileData = new ProfileModel(d);
                            profileData.save(function (err, docs) {
                                if (err) {
                                    BulkModel.update({ "_id": req.query.datas, "importData.personalinfo.contact.I":d.personalinfo.contact.I}, {
                                            $set: {
                                                "importData.$.importStatus": "failed",
                                                "importResult.errors":err
                                            }
                                        }, function (err, data) {
                                            if (err) {
                                                console.log("Error in adding import Failed status")
                                            }
                                            else {
                                                console.log("failure Status added success")

                                            }
                                        })
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
                                    BulkModel.update({
                                        "_id": req.query.datas
                                    }, {
                                            $inc: {
                                                "importResult.success": 1
                                            }
                                        },
                                        function (err, data) {
                                            if (err) {
                                                console.log(err);
                                            } else {
                                                BulkModel.update({ "_id": req.query.datas, "importData.username": d.username }, {
                                            $set: {
                                                "importedOn":Date.now(),
                                                "status":"imported",
                                                "importData.$.importStatus": "Success"
                                            }
                                        }, function (err, data) {
                                            if (err) {
                                                console.log("Error in adding import Success status")
                                            }
                                            else {
                                                console.log("Success Status added success")

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