const graphConst = require('../../api/v1/common/graphConstants');
const neo4jConn = require('../../api/v1/neo4jcon/neo4jcon');
const logger = require('./../../../applogger');

const relatePersonToQualification = function (person, qualificationName, index, attributes, callback) {
    let query = '';

    let user = 'user:' + graphConst.NODE_PERSON + '{'
        + graphConst.NODE_PROPERTY_NAME + ':"' + person.toLowerCase() + '"}';
    query = query + 'MERGE(' + user + ' ) With user MATCH (' + user + ')';

    let qualification = 'qualification:' + graphConst.NODE_QUALIFICATION + '{'
        + graphConst.NODE_PROPERTY_NAME + ':"' + qualificationName.toLowerCase() + '"}';

    query = query + 'MERGE(user)-[:' + graphConst.REL_QUALIFIED_AS
        + ' { result:"' + attributes.result.toLowerCase()
        + '", startYear: "' + attributes.startYear
        + '", endYear: "' + attributes.endYear
        + ' }]->(' + qualification + ')';
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
const relatePersonToInstitute = function (person, instituteName, index, attributes, callback) {
    let query = '';
    let user = 'user1:' + graphConst.NODE_PERSON + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + person.toLowerCase() + '"}';
    query = query + 'MERGE(' + user + ' ) With user1 MATCH (' + user + ')';
    let institute = 'institite:' + graphConst.NODE_INSTITUTE + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + instituteName.toLowerCase() + '"} ';
    query = query + 'MERGE(user1) - [: ' + graphConst.REL_QUALIFIED_FROM
            + ' { degree: "' + attributes.degree + '", startDate: "' + attributes.startDate
            + '", endDate: "' + attributes.endDate
            + '" }] - > (' + institute + ')';
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

const relatePersonToSkill = function (person, skillName, index, attributes, callback) {
    let query = '';
    let user = 'user2:' + graphConst.NODE_PERSON + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + person.toLowerCase() + '"}';
    query = query + 'MERGE(' + user + ' ) With user2 MATCH (' + user + ')';
    let skill = 'skill:' + graphConst.NODE_SKILL + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + skillName.toLowerCase() + '"}';
    query = query + 'MERGE(user2)-[:' + graphConst.REL_QUALIFIED_IN + '}]->(' + skill + ')';

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

const relateQualificationToSkill = function (qualificationName, skillName, index, attributes, callback) {
    let query = '';
    let qualification = 'qualification:' + graphConst.NODE_QUALIFICATION + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + qualificationName.toLowerCase() + '"}';
    query = query + 'MERGE(' + qualification + ' ) With qualification MATCH (' + qualification + ')';
    let skill = 'skill:' + graphConst.NODE_SKILL + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + skillName.toLowerCase() + '"}';
    query = query + 'MERGE(qualification)-[:' + graphConst.REL_MAJOR_SUBJECT_AS + '}]->(' + skill + ')';

    logger.debug(query);
    // neo4j session
    const session = neo4jConn.connection();

    // run query in neo4j
    return session
        .run(query)
        .then(result => {
            session.close();
            callback('fourth');
        })
        .catch(error => {
            session.close();
            logger.error(error);
        });
};

const relateInstituteToQualification = function (instituteName, qualificationName, index, attributes, callback) {
    let query = '';
    let institite = 'institite:' + graphConst.NODE_INSTITUTE + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + instituteName.toLowerCase() + '"}';
    query = query + 'MERGE(' + institite + ' ) With qualification MATCH (' + institite + ')';

    let qualification = 'qualification:' + graphConst.NODE_QUALIFICATION + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + qualificationName.toLowerCase() + '"}';
    query = query + 'MERGE(institite)-[:' + graphConst.REL_OFFERS + '}]->(' + qualification + ')';

    logger.debug(query);
    // neo4j session
    const session = neo4jConn.connection();

    // run query in neo4j
    return session
        .run(query)
        .then(result => {
            session.close();
            callback('fifth');
        })
        .catch(error => {
            session.close();
            logger.error(error);
        });
};
module.exports = {
    relatePersonToQualification: relatePersonToQualification,
    relatePersonToInstitute: relatePersonToInstitute,
    relatePersonToSkill: relatePersonToSkill,
    relateQualificationToSkill: relateQualificationToSkill,
    relateInstituteToQualification: relateInstituteToQualification
};
