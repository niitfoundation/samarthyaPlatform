const neo4j = require('neo4j-driver').v1;
const logger = require('./../../../../applogger');
const neo4jconfig = require('./../../../../config/config');

/* single instance class for neo4j connection */

function singleton() {
    let instance = undefined;
    this.connection = function() {
        if (!this.instance) {
            this.instance = neo4j.driver('bolt://localhost', neo4j.auth.basic(neo4jconfig.NEO4J.USERNAME, neo4jconfig.NEO4J.PASSWORD)).session();
        }
        return this.instance;
    };
}

module.exports = exports = new singleton;