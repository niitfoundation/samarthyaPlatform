const authenticationRoutes = require('./authentication/index');
const userRoutes = require('./users/index');
const resourcesRoutes = require('./resources/index');
const coordinateRoutes = require('./coordinators/index');
const candidateRoutes = require('./candidates/index');
const profileRoutes = require('./profile/index');
const professionRoutes = require('./professions/index');
const roleRoutes = require('./jobRoles/index');
const locationRoutes = require('./locations/index');
const qualificationRoutes = require('./qualifications/index');
const skillRoutes = require('./skills/index');
const languageRoutes = require('./languages/index');
const centreRoutes = require('./centres/index');
const neo4jConn = require('./neo4jcon/neo4jcon');
const graphConstants = require('./common/graphConstants');
const mongoData = require('./mongoData/index');
const candidateSearchRoutes = require('./candidateSearch/index');

module.exports = {
    authenticationRoutes: authenticationRoutes,
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
    centreRoutes: centreRoutes,
    neo4jConn: neo4jConn,
    graphConstants: graphConstants,
    mongoData: mongoData,
    candidateSearchRoutes: candidateSearchRoutes
};
