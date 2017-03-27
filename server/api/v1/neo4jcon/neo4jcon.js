const neo4j = require('neo4j-driver').v1;
const logger = require('./../../../../applogger');

const singleton = (function () {
    var instance;

    function createInstance() {
        const neo4jConn = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', 'prakul')).session();
        return neo4jConn;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
}());

const connection = function() {
    var instance = singleton.getInstance();
    return instance;
    // console.log('Same instance? ' + (instance1 === instance2));
};

module.exports = {
    connection: connection
};
