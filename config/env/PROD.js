// config data for mongo database
const mongo = {
    host: process.env.MONGO_HOST || '127.0.0.1',
    port: process.env.MONGO_PORT || 27017,
    masterDB: process.env.MONGO_DB || 'SamarthyaDB'
};
mongo.mongoURL = 'mongodb://' + mongo.host + ':' + mongo.port + '/' + mongo.masterDB;

const config = {
    MONGO: mongo,
};
// export the config object
module.exports = config;