let SAMARTHYA = {
    WWW_PORT_CANDIDATE: process.env.OXYGEN_WWW_PORT || process.env.PORT || 8080,
    WWW_PORT_PLACEMENT: process.env.OXYGEN_WWW_PORT || process.env.PORT || 3000,
    WWW_PORT_PROFILE_ANALYSIS: process.env.OXYGEN_WWW_PORT || process.env.PORT || 3001,
};

let NEO4J = {
    USERNAME: 'neo4j',
    PASSWORD: 'password'
};

module.exports = {
    SAMARTHYA: SAMARTHYA,
    NEO4J: NEO4J
};
