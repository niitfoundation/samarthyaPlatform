const neo4j = require('neo4j-driver').v1;
const logger = require('./../../../../applogger');

const singleton = (function() {
    function createInstance() {
        const neo4jConn = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', 'password')).session();
        return neo4jConn;
    }
    return {
        getInstance: function() {
            let instance;
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
}());

const connection = function() {
    const singleInstance = singleton.getInstance();
    return singleInstance;
};

module.exports = {
    connection: connection
};