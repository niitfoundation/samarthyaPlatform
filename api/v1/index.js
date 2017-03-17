const authenticationRoutes = require('./placements/api.router');
const emailVerifyRoutes = require('./placements/emailverify.router');
const candidateEmailRoutes = require('./candidates/emailverify.router');
const candidateAuthenticationRoutes = require('./candidates/api.router.js');
const socialAuth=require('./routes.js');
const passport=require('./passport');
module.exports = {
    authenticationRoutes: authenticationRoutes,
    emailVerifyRoutes: emailVerifyRoutes,
    candidateEmailRoutes: candidateEmailRoutes,
    candidateAuthenticationRoutes: candidateAuthenticationRoutes,
    socialAuth:socialAuth,
    passport:passport

}