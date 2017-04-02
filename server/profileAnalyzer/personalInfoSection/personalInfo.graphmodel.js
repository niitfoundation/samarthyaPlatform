const graphConst = require('../../api/v1/common/graphConstants');
const neo4jConn = require('../../api/v1/neo4jcon/neo4jcon');
const logger = require('./../../../applogger');

// this is to relate a person with its living location
const relatePersonToLocation = function (person, location, callback) {
    let query = '';
    let user = 'user:' + graphConst.NODE_PERSON + '{'
        + graphConst.NODE_PROPERTY_NAME + ':"' + person.toLowerCase() + '"}';

    let loc = 'loc:' + graphConst.NODE_LOCATION + '{'
        + graphConst.NODE_PROPERTY_NAME + ':"' + location.toLowerCase() + '"}';

    query = query + 'merge(' + user + ')-[:' + graphConst.REL_LIVES_IN + ']->('
        + loc + ')';

    logger.debug(query);

    const session = neo4jConn.connection();

    return session.run(query).then(result => {
        session.close();
        callback('first query');
    })
        .catch(error => {
            session.close();
            logger.error(error);
        });
};

// this is to relate a person with a language
const relatePersonToLanguage = function (person, language, callback) {
    let query = '';
    let user = 'user:' + graphConst.NODE_PERSON + '{'
        + graphConst.NODE_PROPERTY_NAME + ':"' + person.toLowerCase() + '"}';

    let lang = 'lang:' + graphConst.NODE_LANGUAGE + '{'
        + graphConst.NODE_PROPERTY_NAME + ':"' + location.toLowerCase() + '"}';

    // TODO
    // query = query + 'merge(' + user + ')-[:' + graphConst.REL_LIVES_IN + ']->('
    //     + location + ')';

    logger.debug(query);

    const session = neo4jConn.connection();

    return session.run(query).then(result => {
        session.close();
        callback('second query');
    })
        .catch(error => {
            session.close();
            logger.error(error);
        });
};

module.exports = {
    relatePersonToLocation: relatePersonToLocation,
    relatePersonToLanguage: relatePersonToLanguage
};
