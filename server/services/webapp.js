const path = require('path');

const service = require('./webapp.service');
const express = require('express');

function welcome(appName) {
    process.stdout.write('\n=======================================================\n');
    process.stdout.write('\n=             Samarthya WWW ' + appName + '                 =\n');
    process.stdout.write('\n=======================================================\n');
}


// App Constructor function is exported
module.exports = function(appName) {

    welcome(appName);

    let app = service.createApp();

    app.use(express.static(path.resolve(__dirname, '../../', 'webclient', appName + "/dist")));

 

    app = service.setupMiddlewares(app);

    app = service.setupRestRoutes(app);

    service.setupMongooseConnections();

    return app;
};