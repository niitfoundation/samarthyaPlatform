// this is for creating the graph model in ne04j

const graphConst = require('../../api/v1/common/graphConstants');
const neo4jConn = require('../../api/v1/neo4jcon/neo4jcon');
const logger = require('./../../../applogger');
const async = require('async');

const relatePersonToHimself = function (personName, looking, callback) {
    let relAttributes = '';
    relAttributes = relAttributes + graphConst.PROP_JOB_LOOKING + ': {looking}';

    let query = '';
    query = query + ' MATCH (p:' + graphConst.NODE_PERSON + ' {' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
    query = query + ' MERGE (p1:' + graphConst.NODE_PERSON + ' {' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
    query = query + ' CREATE UNIQUE (p)-[ppr:' + graphConst.REL_JOB_LOOKING + ' {' + relAttributes + '} ]->(p1)';
    query = query + ' RETURN p,ppr,p1';

    let params = {
        personName: personName.toLowerCase(),
        looking: looking,
    };

    logger.debug('relatePersonToHimself::Query', query);

    const session = neo4jConn.connection();

    session
        .run(query, params)
        .then(result => {
            session.close();
            let results = result.records.map(record => {
                return {
                    Person: record.get('p'),
                    Relation: record.get('ppr')
                };
            });
            callback(null, results);
        })
        .catch(err => {
            session.close();
            logger.error('Error in relatePersonToHimself ', err);
            callback(err, null);
        });
    return true;
};

// relating person to jobrole and merge/create the nodes and relations
const relatePersonTojobRole = function (personName, jobRole, callback) {
    let query = '';
    query = query + ' MATCH (p:' + graphConst.NODE_PERSON + ' {' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
    query = query + ' MERGE (j:' + graphConst.NODE_JOBROLE + ' {' + graphConst.NODE_PROPERTY_NAME + ':{jobRole}})';
    query = query + ' CREATE UNIQUE (p)-[pjr:' + graphConst.REL_JOB_ROLE + ' ]->(j)';
    query = query + ' RETURN p,pjr,j';

    let params = {
        personName: personName.toLowerCase(),
        jobRole: jobRole.toLowerCase(),
    };

    logger.debug('relatePersonTojobRole::Query', query);

    const session = neo4jConn.connection();

    session
        .run(query, params)
        .then(result => {
            session.close();
            let results = result.records.map(record => {
                return {
                    Person: record.get('p'),
                    Relation: record.get('pjr'),
                    JobRole: record.get('j')
                };
            });
            callback(null, results);
        })
        .catch(err => {
            session.close();
            logger.error('Error in relatePersonTojobRole ', err);
            callback(err, null);
        });
    return true;
};

// relating person to Skill and merge/create the nodes and relations
const relatePersonToSkill = function (personName, skills, callback) {
    let query = '';
    query = query + ' MATCH (p:' + graphConst.NODE_PERSON + ' {' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
    query = query + ' FOREACH(sk in {skillColl} | MERGE(s:' + graphConst.NODE_SKILL + ' {' + graphConst.NODE_PROPERTY_NAME + ':sk})';
    query = query + ' CREATE UNIQUE (p)-[psr:' + graphConst.REL_SKILL + ' ]->(s))';
    query = query + ' RETURN p';

    const session = neo4jConn.connection();
        
        let lowerCaseData=skills.map(function(skill)
        {
            return skill.toLowerCase();
        })

        let params = {
            personName: personName.toLowerCase(),
            skillColl: lowerCaseData,
        };
        
        logger.debug('relatePersonToSkill::Query', query);

        session
            .run(query, params)
            .then(result => {
                session.close();
                let results = result.records.map(record => {
                    return {
                        Person: record.get('p')
                    };
                });
                callback(null, results);
            })
            .catch(err => {
                session.close();
                logger.error('Error in relatePersonToSkill ', err);
                callback(err, null);
            });

    return true;
};

// relating person to location and merge/create the nodes and relations
const relatePersonToPreferredLocation = function (personName, locations, callback) {
    let query = '';
    query = query + ' MATCH (p:' + graphConst.NODE_PERSON + ' {' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
    query = query + ' FOREACH(loc in {locationColl} | MERGE(l:' + graphConst.NODE_LOCATION + ' {' + graphConst.NODE_PROPERTY_NAME + ':loc})';
    query = query + ' CREATE UNIQUE (p)-[plr:' + graphConst.REL_PREFFERED_LOCATION + ' ]->(l))';
    query = query + ' RETURN p';

    const session = neo4jConn.connection();
    let lowerCaseData=locations.map(function(location){
        return location.toLowerCase();
    });
    let params = {
        personName: personName.toLowerCase(),
        locationColl: lowerCaseData,
    };

    logger.debug('relatePersonToPreferredLocation::Query', query);

    session
        .run(query, params)
        .then(result => {
            session.close();
            let results = result.records.map(record => {
                return {
                    Person: record.get('p')
                };
            });
            callback(null, results);
        })
        .catch(err => {
            session.close();
            logger.error('Error in relatePersonToPreferredLocation ', err);
            callback(err, null);
        });

    return true;
};

module.exports = {
    relatePersonToHimself: relatePersonToHimself,
    relatePersonTojobRole: relatePersonTojobRole,
    relatePersonToSkill: relatePersonToSkill,
    relatePersonToPreferredLocation: relatePersonToPreferredLocation

};
