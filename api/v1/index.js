const authenticationRoutes = require('./placements/api.router');
const emailVerifyRoutes = require('./placements/emailverify.router');
const candidateEmailRoutes = require('./candidates/emailverify.router');
const candidateAuthenticationRoutes = require('./candidates/api.router.js');

module.exports = {
    authenticationRoutes: authenticationRoutes,
    emailVerifyRoutes: emailVerifyRoutes,
    candidateEmailRoutes: candidateEmailRoutes,
    candidateAuthenticationRoutes: candidateAuthenticationRoutes
}