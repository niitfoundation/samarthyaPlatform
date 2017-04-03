const graphConst = require('../../api/v1/common/graphConstants');
const neo4jConn = require('../../api/v1/neo4jcon/neo4jcon');
const logger = require('./../../../applogger');

const relatePersonToOrganisation = function(personName, workExpInstance, callback) {
    // Establish relation between (:Person)-[:WORKED_WITH {role: '', duration: '', isCurrent: ''}]-(:Organization)

    let relAttributes = '';
    relAttributes = relAttributes + ' ' + graphConst.PROP_ROLE + ': {role}';
    relAttributes = relAttributes + ', ' + graphConst.PROP_DURATION + ': {duration}';
    relAttributes = relAttributes + ', ' + graphConst.PROP_ISCURRENT + ': {isCurrent}';

    let query = '';
    query = query + ' MATCH (p:' + graphConst.NODE_PERSON + ' {' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
    query = query + ' MERGE (o:' + graphConst.NODE_ORGANISATION + ' {' + graphConst.NODE_PROPERTY_NAME + ':{organizationName}})';
    query = query + ' MERGE (p)-[por:' + graphConst.REL_WORKED_WITH + ' {' + relAttributes + '} ]->(o)';
    query = query + ' RETURN p,por,o';

    let params = {
        personName: personName.toLowerCase(),
        organizationName: workExpInstance.workplace.toLowerCase(),
        role: workExpInstance.jobRole.toLowerCase(),
        duration: workExpInstance.duration.toString(),
        isCurrent: (workExpInstance.isCurrent || false)
    };

    logger.debug('relatePersonToOrganisation::Query', query);

    const session = neo4jConn.connection();

    session
        .run(query, params)
        .then(result => {
            session.close();
            result.records.map(record => {
                callback(null, {
                    person: record.get('p'),
                    relation: record.get('por'),
                    organisation: record.get('o')
                });
            });
        })
        .catch(err => {
            session.close();
            logger.error('Error in relatePersonToOrganisation ', err);
            callback(err, null);
        });
    return true;
};
const releatePersonToJobRole = function(personName, jobRoleInstance, callback) {
    // Establish relation between (:Person)-[:WORKED_AS {duration: '',organization: ''}]-(:jobRole)

    let relAttributes = '';
    relAttributes = relAttributes + ' ' + graphConst.PROP_DURATION + ': {duration}';
    relAttributes = relAttributes + ', ' + graphConst.PROP_ORGANISATION + ': {organization}';

    let query = '';
    query = query + ' MATCH (p:' + graphConst.NODE_PERSON + ' {' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
    query = query + ' MERGE (jr:' + graphConst.NODE_JOBROLE + ' {' + graphConst.NODE_PROPERTY_NAME + ':{jobRole}})';
    query = query + ' MERGE (p)-[pjr:' + graphConst.REL_WORKED_AS + ' {' + relAttributes + '} ]->(jr)';
    query = query + ' RETURN p,pjr,jr';

    let params = {
        personName: personName.toLowerCase(),
        jobRole: jobRoleInstance.jobRole.toLowerCase(),
        duration: jobRoleInstance.duration,
        organization: jobRoleInstance.workplace
    };

    logger.debug('relatePersonToJobRole::Query', query);

    const session = neo4jConn.connection();

    return session
        .run(query, params)
        .then(result => {
            session.close();
            result.records.map(record => {
                callback(null, {
                    person: record.get('p'),
                    relation: record.get('pjr'),
                    jobrole: record.get('jr')
                });
            });
        })
        .catch(err => {
            session.close();
            logger.error('Error in relatePersonToJobRole ', err);
            callback(err, null);
        });
};

const releatePersonToWorkingLocation = function(personName, workinglocInstance, callback) {
    // Establish relation between (:Person)-[:WORKED_IN {organization: '',}isCurrent:'']-(:location)

    let relAttributes = '';
    relAttributes = relAttributes + ' isCurrent: {isCurrent}';
    relAttributes = relAttributes + ', org: {organization}';

    let query = '';
    query = query + ' MATCH (p:' + graphConst.NODE_PERSON + ' {' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
    query = query + ' MERGE (loc:' + graphConst.NODE_LOCATION + ' {' + graphConst.NODE_PROPERTY_NAME + ':{locationName}})';
    query = query + ' MERGE (p)-[ploc:' + graphConst.REL_WORKED_IN + ' {' + relAttributes + '} ]->(loc)';
    query = query + ' RETURN p,ploc,loc';

    let params = {
        personName: personName.toLowerCase(),
        locationName: workinglocInstance.location.toLowerCase(),
        organization: workinglocInstance.workplace.toLowerCase(),
        isCurrent: (workinglocInstance.isCurrent || false)
    };

    logger.debug('releatePersonToWorkingLocation::Query', query);

    const session = neo4jConn.connection();

    return session
        .run(query, params)
        .then(result => {
            session.close();
            result.records.map(record => {
                callback(null, {
                    person: record.get('p'),
                    relation: record.get('ploc'),
                    location: record.get('loc')
                });
            });
        })
        .catch(err => {
            session.close();
            logger.error('Error in releatePersonToWorkingLocation ', err);
            callback(err, null);
        });
};

module.exports = {
    relatePersonToOrganisation: relatePersonToOrganisation,
    releatePersonToJobRole: releatePersonToJobRole,
    releatePersonToWorkingLocation: releatePersonToWorkingLocation
};