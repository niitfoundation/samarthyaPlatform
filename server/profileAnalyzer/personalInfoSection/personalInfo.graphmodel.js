const graphConst = require('../../api/v1/common/graphConstants');
const neo4jConn = require('../../api/v1/neo4jcon/neo4jcon');
const logger = require('./../../../applogger');

// this is to relate a person with its living location
const relatePersonToLocation = function (personName, personalInfo, callback) {

    let query = '';
    query = query + 'MATCH(p:' + graphConst.NODE_PERSON + '{' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
    query = query + 'MERGE(l:' + graphConst.NODE_LOCATION + '{' + graphConst.NODE_PROPERTY_NAME + ':{locationName}})';
    query = query + 'MERGE(p)-[plr:' + graphConst.REL_LIVES_IN + ']->(l)';
    query = query + 'RETURN p,plr,l';

    let params = {
        personName: personName.toLowerCase(),
        locationName: personalInfo.address.district.toLowerCase()
    };

    logger.debug('relatePersonToLocation QUERY :::', query);

    const session = neo4jConn.connection();

    session
        .run(query, params)
        .then(result => {
            session.close();
            result.records.map(record => {
                callback(null, {
                    person: record.get('p'),
                    relation: record.get('plr'),
                    organisation: record.get('l')
                });
            });
        })
        .catch(err => {
            session.close();
            logger.error('Error in relatePersonToLocation ', err);
            callback(err, null);
        });
    return true;
};

const relatePersonToLanguage = function (personName, personalInfo, callback) {

}


module.exports = {
    relatePersonToLocation: relatePersonToLocation,
    relatePersonToLanguage: relatePersonToLanguage
};
