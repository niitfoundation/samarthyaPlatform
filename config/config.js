let SAMARTHYA = {
    WWW_PORT_CANDIDATE: process.env.OXYGEN_WWW_PORT || process.env.PORT || 8080,
    WWW_PORT_PLACEMENT: process.env.OXYGEN_WWW_PORT || process.env.PORT || 3000,
    WWW_PORT_PROFILE_ANALYSIS: process.env.OXYGEN_WWW_PORT || process.env.PORT || 3001,
};
module.exports = {
    SAMARTHYA: SAMARTHYA
}
;
