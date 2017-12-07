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

    app = service.setupMiddlewares(app);

    let staticPath = path.resolve(__dirname, '..', '..', 'webclient', appName, 'dist');

    let candidateImgPath = path.resolve(__dirname, '..', '..', 'webclient', 'candidate' , 'webclient/assets/img');

    let placementImgPath = path.resolve(__dirname, '..', '..', 'webclient', 'placement' , 'src/assets/img');

    process.stdout.write('\n       Mounting static path    ' + staticPath + '\n');
    process.stdout.write('\n       Mounting static path of images  ' + candidateImgPath + '\n');
    process.stdout.write('\n       Mounting static path of images  ' + placementImgPath + '\n');

    app.use(express.static(staticPath));
    app.use(express.static(candidateImgPath));
    app.use(express.static(placementImgPath));

    app = service.setupRestRoutes(app);

    service.setupMongooseConnections();

    return app;
};
