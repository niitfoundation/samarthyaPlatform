const graphConst = require('../../api/v1/common/graphConstants');
const neo4jConn = require('../../api/v1/neo4jcon/neo4jcon');
const logger = require('./../../../applogger');

const relatePersonToSkills = function (personName, skills, callback) {
    let relAttributes = '';
    relAttributes = relAttributes + graphConst.PROP_EXPERIENCE + ': {months}';
    relAttributes = relAttributes + ',' + graphConst.PROP_EXPERTISE + ': {expertise}';

    let query = '';
    query = query + ' MATCH (p:' + graphConst.NODE_PERSON + ' {' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
    query = query + ' MERGE (s:' + graphConst.NODE_SKILL + ' {' + graphConst.NODE_PROPERTY_NAME + ':{skillName}})';
    query = query + ' MERGE (p)-[psr:' + graphConst.REL_KNOWS + ' {' + relAttributes + '} ]->(s)';
    query = query + ' RETURN p,psr,s';

    let params = {
        personName: personName.toLowerCase(),
        skillName: skills.name.toLowerCase(),
        months: skills.experience.toString(),
        expertise: skills.expertise.toString()
    };

    logger.debug('relatePersonToSkills::Query', query);

    const session = neo4jConn.connection();

    session
        .run(query, params)
        .then(result => {
            session.close();
            result.records.map(record => {
                callback(null, {
                    person: record.get('p'),
                    relation: record.get('psr'),
                    skills: record.get('s')
                });
            });
        })
        .catch(err => {
            session.close();
            logger.error('Error in relatePersonToSkills ', err);
            callback(err, null);
        });
    return true;
};

module.exports = {
    relatePersonToSkills: relatePersonToSkills,
};
