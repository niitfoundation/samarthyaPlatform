const path = require('path');

const apiBasePath = require(path.resolve(__dirname, '../', 'api', 'v1/index.js'));

const useRoutes = function(app) {
    app.use('/users', apiBasePath.userRoutes);
    app.use('/candidates', apiBasePath.candidateRoutes);
    app.use('/email', apiBasePath.emailUtilRoutes);
    app.use('/auth', apiBasePath.authenticationRoutes);
    app.use('/resources', apiBasePath.resourcesRoutes);
    app.use('/coordinates', apiBasePath.coordinateRoutes);
    app.use('/profile', apiBasePath.profileRoutes);
    app.use('/professions', apiBasePath.professionRoutes);
    app.use('/roles', apiBasePath.roleRoutes);
    app.use('/locations', apiBasePath.locationRoutes);
    app.use('/qualifications', apiBasePath.qualificationRoutes);
    app.use('/skills', apiBasePath.skillRoutes);
    app.use('/languages', apiBasePath.languageRoutes);
    app.use('/centres', apiBasePath.centreRoutes);
};

module.exports = {
    useRoutes: useRoutes
};