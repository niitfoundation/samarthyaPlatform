const authenticationRoutes = require('./authentication/auth.router');
const emailVerifyRoutes = require('./emailVerify/emailVerify.router');
const userRoutes = require('./users/index');
const uiRoutes = require('./uiResource/uiResource.router');
const coordinateRoutes = require('./coordinators/coordinators.router');
const candidateRoutes = require('./candidates/candidates.router');

module.exports = {
    authenticationRoutes: authenticationRoutes,
    emailVerifyRoutes: emailVerifyRoutes,
    userRoutes: userRoutes,
    uiRoutes: uiRoutes,
    coordinateRoutes: coordinateRoutes,
    candidateRoutes: candidateRoutes
}