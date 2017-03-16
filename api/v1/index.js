const authenticationRoutes = require('./authentication/index');
const emailUtilRoutes = require('./emailUtil/index');
const userRoutes = require('./users/index');
const resourcesRoutes = require('./resources/index');
const coordinateRoutes = require('./coordinators/index');
const candidateRoutes = require('./candidates/index');

module.exports = {
    authenticationRoutes: authenticationRoutes,
    emailUtilRoutes: emailUtilRoutes,
    userRoutes: userRoutes,
    resourcesRoutes: resourcesRoutes,
    coordinateRoutes: coordinateRoutes,
    candidateRoutes: candidateRoutes
}