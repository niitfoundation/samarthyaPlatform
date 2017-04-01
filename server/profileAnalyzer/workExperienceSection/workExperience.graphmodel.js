const graphConst = require('../../api/v1/common/graphConstants');
const neo4jConn = require('../../api/v1/neo4jcon/neo4jcon');
const logger = require('./../../../applogger');

const relatePersonToOrganisation = function(person, organizationName, index, attributes, callback) {
    let query = '';
    let user = 'user:' + graphConst.NODE_PERSON + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + person.toLowerCase() + '"}';
    query = query + 'MERGE(' + user + ' ) With user MATCH (' + user + ')';
    let workPlace = 'workplace:' + graphConst.NODE_WORKPLACE + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + organizationName.toLowerCase() + '"}';
    query = query + 'MERGE(user)-[:' + graphConst.REL_WORKED_WITH + ' { role:"' + attributes.roles.toLowerCase() + '", duration: "' + attributes.duration + '", iscurrent: ' + attributes.iscurrent + ' }]->(' + workPlace + ')';
    logger.debug(query);
    // neo4j session
    const session = neo4jConn.connection();
    // run query in neo4j
    return session
        .run(query)
        .then(result => {
            session.close();
            callback('first');
        })
        .catch(error => {
            session.close();
            logger.error(error);
        });
};
const releatePersonToJobRole = function(person, jobRoleName, index, attributes, callback) {
    let query = '';
    let user = 'user1:' + graphConst.NODE_PERSON + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + person.toLowerCase() + '"}';
    query = query + 'MERGE(' + user + ' ) With user1 MATCH (' + user + ')';
    let role = 'role:' + graphConst.NODE_ROLE + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + jobRoleName.toLowerCase() + '"} ';
    query = query + 'MERGE(user1) - [: ' + graphConst.REL_WORKED_AS + ' { duration: ' + attributes.duration + ', org: "' + attributes.organization + '" }] - > (' + role + ')';
    logger.debug(query);
    // neo4j session
    const session = neo4jConn.connection();

    // run query in neo4j
    return session
        .run(query)
        .then(result => {
            session.close();
            callback('second');
        })
        .catch(error => {
            session.close();
            logger.error(error);
        });
};

const releatePersonToWorkingLocation = function(person, locationName, index, attributes, callback) {
    let query = '';
    let user = 'user2:' + graphConst.NODE_PERSON + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + person.toLowerCase() + '"}';
    query = query + 'MERGE(' + user + ' ) With user2 MATCH (' + user + ')';
    let location = 'location:' + graphConst.NODE_LOCATION + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + locationName.toLowerCase() + '"}';
    query = query + 'MERGE(user2)-[:' + graphConst.REL_WORKED_IN + '{org:"' + attributes.organization.toLowerCase() + '",iscurrent: ' + attributes.iscurrent + '}]->(' + location + ')';

    logger.debug(query);
    // neo4j session
    const session = neo4jConn.connection();

    // run query in neo4j
    return session
        .run(query)
        .then(result => {
            session.close();
            callback('third');
        })
        .catch(error => {
            session.close();
            logger.error(error);
        });
};
module.exports = {
    relatePersonToOrganisation: relatePersonToOrganisation,
    releatePersonToJobRole: releatePersonToJobRole,
    releatePersonToWorkingLocation: releatePersonToWorkingLocation


};