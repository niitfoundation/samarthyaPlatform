const graphConst = require('../../api/v1/common/graphConstants');
const neo4jConn = require('../../api/v1/neo4jcon/neo4jcon');
const logger = require('./../../../applogger');

const relatePersonToOrganisation = function(personName, placementHistoryInstance, callback) {
    // Establish relation between (:Person)-[:WORKED_WITH {role: '', duration: '', isCurrent: ''}]-(:Organization)

    let relAttributes = '';
    relAttributes = relAttributes + ' ' + graphConst.PROP_ROLE + ': {role}';
    relAttributes = relAttributes + ', ' + graphConst.PROP_DURATION_IN_MONTHS + ': {durationinmonths}';
    relAttributes = relAttributes + ', ' + graphConst.PROP_DURATION_IN_YEARS + ': {durationinyears}';
    relAttributes = relAttributes + ', ' + graphConst.PROP_LOCATION + ': {location}';
    relAttributes = relAttributes + ', ' + graphConst.PROP_PLACEMENT_TYPE + ': {placementType}';
    relAttributes = relAttributes + ', ' + graphConst.PROP_PLACEMENT_STATUS + ': {placementStatus}';
    relAttributes = relAttributes + ', ' + graphConst.PROP_EMPLOYER_NAME + ': {employerName}';
    relAttributes = relAttributes + ', ' + graphConst.PROP_ISCURRENT + ': {isCurrent}';

    let query = '';
    query = query + ' MATCH (p:' + graphConst.NODE_PERSON + ' {' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
    query = query + ' MERGE (o:' + graphConst.NODE_ORGANISATION + ' {' + graphConst.NODE_PROPERTY_NAME + ':{organizationName}})';
    query = query + ' MERGE (p)-[por:' + graphConst.REL_APPLIED_AT + ' {' + relAttributes + '} ]->(o)';
    query = query + ' RETURN p,por,o';

    let exactDuration = Math.abs(new Date(placementHistoryInstance.duration.start) - new Date(placementHistoryInstance.duration.end));
    let params = {
        personName: personName.toLowerCase(),
        organizationName: placementHistoryInstance.workplace.toLowerCase(),
        role: placementHistoryInstance.jobRole.toLowerCase(),
        location: placementHistoryInstance.location.toLowerCase(),
        placementType: placementHistoryInstance.placementType.toLowerCase(),
        placementStatus: placementHistoryInstance.placementStatus.toLowerCase(),
        employerName: placementHistoryInstance.employerName.toLowerCase(),
        durationinmonths: (exactDuration / (1000 * 3600 * 24 * 30)).toString(),
        durationinyears: (exactDuration / (1000 * 3600 * 24 * 30 * 12)).toString(),
        isCurrent: placementHistoryInstance.isCurrent || false
    };

    logger.debug('relatePersonToOrganisation::Query', query);

    const session = neo4jConn.connection();
    session
        .run(query, params)
        .then(result => {
            session.close();
            let results = result.records.map(record => {
                return {
                    person: record.get('p'),
                    relation: record.get('por'),
                    organisation: record.get('o')
                };
            });
            callback(null, results);
        })
        .catch(err => {
            session.close();
            logger.error('Error in relatePersonToOrganisation ', err);
            callback(err, null);
        });
    return true;
};

const relatePersonToOrganisationForAssisstedPlacement = function(personName, placementHistoryInstance, callback) {
    // Establish relation between (:Person)-[:WORKED_WITH {role: '', duration: '', isCurrent: ''}]-(:Organization)

    logger.info('Inside relatePersonToOrganisationForAssisstedPlacement');
    if(placementHistoryInstance.placementType == 'NIIT COORDINATOR' 
        || placementHistoryInstance.placementType == 'niit coordinator'){
        logger.info('Inside relatePersonToOrganisationForAssisstedPlacement for check');

        let relAttributes = '';
        relAttributes = relAttributes + ' ' + graphConst.PROP_ASSISSTED_BY + ': {coordinatorName}';

        let query = '';
        query = query + ' MATCH (p:' + graphConst.NODE_PERSON + ' {' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
        query = query + ' MERGE (o:' + graphConst.NODE_ORGANISATION + ' {' + graphConst.NODE_PROPERTY_NAME + ':{organizationName}})';
        query = query + ' MERGE (p)-[por:' + graphConst.REL_ASSISSTED_PLACEMENT_AT + ' {' + relAttributes + '} ]->(o)';
        query = query + ' RETURN p,por,o';

        let params = {
        personName: personName.toLowerCase(),
        organizationName: placementHistoryInstance.workplace.toLowerCase(),
        coordinatorName: placementHistoryInstance.coordinatorName.toLowerCase()
        };

        logger.debug('relatePersonToOrganisationForAssisstedPlacement::Query', query);

        const session = neo4jConn.connection();
        session
        .run(query, params)
        .then(result => {
            session.close();
            let results = result.records.map(record => {
                return {
                    person: record.get('p'),
                    relation: record.get('por'),
                    organisation: record.get('o')
                };
            });
            callback(null, results);
        })
        .catch(err => {
            session.close();
            logger.error('Error in relatePersonToOrganisationForAssisstedPlacement ', err);
            callback(err, null);
        });
    return true;    
    }

};

const relatePersonToOrganisationForSelfPlacement = function(personName, placementHistoryInstance, callback) {
    // Establish relation between (:Person)-[:WORKED_WITH {role: '', duration: '', isCurrent: ''}]-(:Organization)
    logger.info('Inside relatePersonToOrganisationForAssisstedPlacement',placementHistoryInstance.placementType);
    if(placementHistoryInstance.placementType == 'SELF' || placementHistoryInstance.placementType == 'self'){
        logger.info('Inside relatePersonToOrganisationForAssisstedPlacement for check');

        let relAttributes = '';
        relAttributes = relAttributes + ' ' + graphConst.PROP_PLACEMENT_STATUS + ': {placementStatus}';

        let query = '';
        query = query + ' MATCH (p:' + graphConst.NODE_PERSON + ' {' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
        query = query + ' MERGE (o:' + graphConst.NODE_ORGANISATION + ' {' + graphConst.NODE_PROPERTY_NAME + ':{organizationName}})';
        query = query + ' MERGE (p)-[por:' + graphConst.REL_SELF_PLACED_AT + ' {' + relAttributes + '} ]->(o)';
        query = query + ' RETURN p,por,o';

        let params = {
        personName: personName.toLowerCase(),
        organizationName: placementHistoryInstance.workplace.toLowerCase(),
        placementStatus: placementHistoryInstance.placementStatus.toLowerCase()
        }

        logger.debug('relatePersonToOrganisationForSelfPlacement::Query', query);

        const session = neo4jConn.connection();
        session
        .run(query, params)
        .then(result => {
            session.close();
            let results = result.records.map(record => {
                return {
                    person: record.get('p'),
                    relation: record.get('por'),
                    organisation: record.get('o')
                };
            });
            callback(null, results);
        })
        .catch(err => {
            session.close();
            logger.error('Error in relatePersonToOrganisationForSelfPlacement ', err);
            callback(err, null);
        });
    return true;
    }
    
};

module.exports = {
    relatePersonToOrganisation: relatePersonToOrganisation,
    relatePersonToOrganisationForAssisstedPlacement: relatePersonToOrganisationForAssisstedPlacement,
    relatePersonToOrganisationForSelfPlacement: relatePersonToOrganisationForSelfPlacement

};