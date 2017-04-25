let SAMARTHYA = {
    WWW_PORT_CANDIDATE: process.env.OXYGEN_WWW_PORT || process.env.PORT || 8080,
    WWW_PORT_PLACEMENT: process.env.OXYGEN_WWW_PORT || process.env.PORT || 3000,
    WWW_PORT_PROFILE_ANALYSIS: process.env.OXYGEN_WWW_PORT || process.env.PORT || 3001,
};

let NEO4J = {
    USERNAME: 'neo4j',
    PASSWORD: 'password'
};

   const KAFKA_HOST = (process.env.KAFKA_HOST_IP + ':9092') || '0.0.0.0:9092';
const ZOOKPER_HOST = ( 'localhost:2181') || '0.0.0.0:2181';


module.exports = {
    SAMARTHYA: SAMARTHYA,
    NEO4J: NEO4J,
    KAFKA_HOST: KAFKA_HOST,
    ZOOKPER_HOST: ZOOKPER_HOST
};