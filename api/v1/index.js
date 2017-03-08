const candidateRoutes = require('./candidates/candidates.router');
const authenticationRoutes = require('./placements/api.router');
const emailVerifyRoutes = require('./placements/emailverify.router');
module.exports = {
    candidateRoutes: candidateRoutes,
    authenticationRoutes: authenticationRoutes,
    emailVerifyRoutes: emailVerifyRoutes
}