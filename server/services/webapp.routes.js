const path = require('path');

const apiBasePath = require(path.resolve(__dirname, '../', 'api', 'v1/index.js'));

const useRoutes = function (app) {

    app.use('/users', apiBasePath.userRoutes);
    app.use('/candidates', apiBasePath.candidateRoutes);
    app.use('/auth', apiBasePath.authenticationRoutes);
    app.use('/email', apiBasePath.emailUtilRoutes);
    app.use('/resources', apiBasePath.resourcesRoutes);
    app.use('/coordinates', apiBasePath.coordinateRoutes);
    app.use('/profile', apiBasePath.profileRoutes);
}

module.exports = {
    useRoutes: useRoutes
}
