const graphConst = require('../../api/v1/common/graphConstants');
const neo4jConn = require('../../api/v1/neo4jcon/neo4jcon');
const logger = require('./../../../applogger');

const relatePersonToQualification = function (personName, qualification, callback) {
    let relAttributes = '';
    relAttributes = relAttributes + graphConst.PROP_RESULT + ': {result}';
    relAttributes = relAttributes + ',' + graphConst.PROP_START_YEAR + ': {startYear}';
    relAttributes = relAttributes + ',' + graphConst.PROP_END_YEAR + ': {endYear}';

    let query = '';
    query = query + ' MATCH (p:' + graphConst.NODE_PERSON + ' {' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
    query = query + ' MERGE (q:' + graphConst.NODE_QUALIFICATION + ' {' + graphConst.NODE_PROPERTY_NAME + ':{qualificationName}})';
    query = query + ' MERGE (p)-[pqr:' + graphConst.REL_QUALIFIED_AS + ' {' + relAttributes + '} ]->(q)';
    query = query + ' RETURN p,pqr,q';

    let params = {
        personName: personName.toLowerCase(),
        qualificationName: qualification.name.toLowerCase(),
        result: qualification.result.score.toString() + ' ' + qualification.result.unit.toString(),
        startYear: qualification.batch.startDate.toString(),
        endYear: qualification.batch.endDate.toString()
    };

    logger.debug('relatePersonToQualification::Query', query);

    const session = neo4jConn.connection();

    session
        .run(query, params)
        .then(result => {
            session.close();
            result.records.map(record => {
                callback(null, {
                    person: record.get('p'),
                    relation: record.get('pqr'),
                    qualification: record.get('q')
                });
            });
        })
        .catch(err => {
            session.close();
            logger.error('Error in relatePersonToQualification ', err);
            callback(err, null);
        });
    return true;
};

const relatePersonToInstitute = function (personName, qualification, callback) {
    let relAttributes = '';
    relAttributes = relAttributes + graphConst.PROP_DEGREE + ': {degree}';
    relAttributes = relAttributes + ',' + graphConst.PROP_START_DATE + ': {startDate}';
    relAttributes = relAttributes + ',' + graphConst.PROP_END_DATE + ': {endDate}';

    let query = '';
    query = query + ' MATCH (p:' + graphConst.NODE_PERSON + ' {' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
    query = query + ' MERGE (in:' + graphConst.NODE_INSTITUTE + ' {' + graphConst.NODE_PROPERTY_NAME + ':{instituteName}})';
    query = query + ' MERGE (p)-[pinr:' + graphConst.REL_QUALIFIED_FROM + ' {' + relAttributes + '} ]->(in)';
    query = query + ' RETURN p,pinr,in';

    let params = {
        personName: personName.toLowerCase(),
        instituteName: qualification.institute.toLowerCase(),
        degree: qualification.academictype.toLowerCase(),
        startDate: qualification.batch.startDate.toString(),
        endDate: qualification.batch.endDate.toString()
    };

    logger.debug('relatePersonToInstitute::Query', query);

    const session = neo4jConn.connection();

    session
        .run(query, params)
        .then(result => {
            session.close();
            result.records.map(record => {
                callback(null, {
                    person: record.get('p'),
                    relation: record.get('pinr'),
                    institite: record.get('in')
                });
            });
        })
        .catch(err => {
            session.close();
            logger.error('Error in relatePersonToInstitute ', err);
            callback(err, null);
        });
    return true;
};

const relatePersonToSkill = function (personName, qualification, callback) {
    let query = '';
    query = query + ' MATCH (p:' + graphConst.NODE_PERSON + ' {' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
    query = query + ' MERGE (s:' + graphConst.NODE_SKILL + ' {' + graphConst.NODE_PROPERTY_NAME + ':{skillName}})';
    query = query + ' MERGE (p)-[psr:' + graphConst.REL_QUALIFIED_IN + ']->(s)';
    query = query + ' RETURN p,psr,s';

    let params = {
        personName: personName.toLowerCase(),
        skillName: qualification.subject.toLowerCase(),
    };

    logger.debug('relatePersonToSkill::Query', query);

    const session = neo4jConn.connection();

    session
        .run(query, params)
        .then(result => {
            session.close();
            result.records.map(record => {
                callback(null, {
                    person: record.get('p'),
                    relation: record.get('psr'),
                    qualification: record.get('s')
                });
            });
        })
        .catch(err => {
            session.close();
            logger.error('Error in relatePersonToSkill ', err);
            callback(err, null);
        });
    return true;
};

const relateQualificationToSkill = function (qualification, callback) {
    let query = '';
    query = query + ' MATCH (q:' + graphConst.NODE_QUALIFICATION + ' {' + graphConst.NODE_PROPERTY_NAME + ':{qualificationName}})';
    query = query + ' MERGE (s:' + graphConst.NODE_SKILL + ' {' + graphConst.NODE_PROPERTY_NAME + ':{skillName}})';
    query = query + ' MERGE (q)-[qsr:' + graphConst.REL_MAJOR_SUBJECT_AS + ']->(s)';
    query = query + ' RETURN q,qsr,s';

    let params = {
        qualificationName: qualification.name.toLowerCase(),
        skillName: qualification.subject.toLowerCase(),
    };

    logger.debug('relateQualificationToSkill::Query', query);

    const session = neo4jConn.connection();

    session
        .run(query, params)
        .then(result => {
            session.close();
            result.records.map(record => {
                callback(null, {
                    qualification: record.get('q'),
                    relation: record.get('qsr'),
                    skill: record.get('s')
                });
            });
        })
        .catch(err => {
            session.close();
            logger.error('Error in relateQualificationToSkill ', err);
            callback(err, null);
        });
    return true;
};

const relateInstituteToQualification = function (qualification, callback) {
    let query = '';
    query = query + ' MATCH (in:' + graphConst.NODE_INSTITUTE + ' {' + graphConst.NODE_PROPERTY_NAME + ':{instituteName}})';
    query = query + ' MERGE (q:' + graphConst.NODE_QUALIFICATION + ' {' + graphConst.NODE_PROPERTY_NAME + ':{qualificationName}})';
    query = query + ' MERGE (in)-[inqr:' + graphConst.REL_OFFERS + ']->(q)';
    query = query + ' RETURN in,inqr,q';

    let params = {
        instituteName: qualification.institute.toLowerCase(),
        qualificationName: qualification.name.toLowerCase(),
    };

    logger.debug('relateInstituteToQualification::Query', query);

    const session = neo4jConn.connection();

    session
        .run(query, params)
        .then(result => {
            session.close();
            result.records.map(record => {
                callback(null, {
                    institite: record.get('in'),
                    relation: record.get('inqr'),
                    qualification: record.get('q')
                });
            });
        })
        .catch(err => {
            session.close();
            logger.error('Error in relateInstituteToQualification ', err);
            callback(err, null);
        });
    return true;
};

const relateInstituteToLocation = function (qualification, callback) {
    let query = '';
    query = query + ' MATCH (in:' + graphConst.NODE_INSTITUTE + ' {' + graphConst.NODE_PROPERTY_NAME + ':{instituteName}})';
    query = query + ' MERGE (l:' + graphConst.NODE_LOCATION + ' {' + graphConst.NODE_PROPERTY_NAME + ':{locationName}})';
    query = query + ' MERGE (in)-[inlr:' + graphConst.REL_DONE_FROM + ']->(l)';
    query = query + ' RETURN in,inlr,l';

    let params = {
        instituteName: qualification.institute.toLowerCase(),
        locationName: qualification.location.toLowerCase(),
    };

    logger.debug('relateInstituteToLocation::Query', query);

    const session = neo4jConn.connection();

    session
        .run(query, params)
        .then(result => {
            session.close();
            result.records.map(record => {
                callback(null, {
                    institite: record.get('in'),
                    relation: record.get('inlr'),
                    qualification: record.get('l')
                });
            });
        })
        .catch(err => {
            session.close();
            logger.error('Error in relateInstituteToLocation ', err);
            callback(err, null);
        });
    return true;
};

module.exports = {
    relatePersonToQualification: relatePersonToQualification,
    relatePersonToInstitute: relatePersonToInstitute,
    relatePersonToSkill: relatePersonToSkill,
    relateQualificationToSkill: relateQualificationToSkill,
    relateInstituteToQualification: relateInstituteToQualification,
    relateInstituteToLocation: relateInstituteToLocation
};
