const authenticationRoutes = require('./authentication/index');
const emailUtilRoutes = require('./emailUtil/index');
const userRoutes = require('./users/index');
const resourcesRoutes = require('./resources/index');
const coordinateRoutes = require('./coordinators/index');
const candidateRoutes = require('./candidates/index');
const profileRoutes = require('./profile/index');
const professionRoutes = require('./professions/index');
const roleRoutes = require('./roles/index');
const locationRoutes = require('./locations/index');
const qualificationRoutes = require('./qualifications/index');
const skillRoutes = require('./skills/index');
const languageRoutes = require('./languages/index');
const centerRoutes = require('./centers/index');

module.exports = {
    authenticationRoutes: authenticationRoutes,
    emailUtilRoutes: emailUtilRoutes,
    userRoutes: userRoutes,
    resourcesRoutes: resourcesRoutes,
    coordinateRoutes: coordinateRoutes,
    candidateRoutes: candidateRoutes,
    profileRoutes: profileRoutes,
    professionRoutes: professionRoutes,
    roleRoutes: roleRoutes,
    locationRoutes: locationRoutes,
    qualificationRoutes: qualificationRoutes,
    skillRoutes: skillRoutes,
    languageRoutes: languageRoutes,
    centerRoutes: centerRoutes
};
