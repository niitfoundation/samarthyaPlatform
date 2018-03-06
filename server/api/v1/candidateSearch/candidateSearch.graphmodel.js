const logger = require('./../../../../applogger');
const neo4jConn = require('./../neo4jcon/neo4jcon');
const graphConst = require('../common/graphConstants');
const async = require('async');

const searchCandidates = function(searchString, pageNo, pagelimit, callback) {

    try {
        let query = '';
        // query = query + 'WITH {searchString} AS paramString';
        // query = query + ' MATCH (n)'; //Match any node
        // query = query + ' WHERE ANY(param IN split(paramString, ",") ';
        // query = query + '       WHERE ANY(prop in keys(n) ';
        // query = query + '           WHERE ANY(val IN n[prop] ';
        // query = query + '               WHERE val =~ ("(?i).*"+ param + "(?i).*"))))';
        // query = query + ' WITH n';
        // query = query + ' MATCH (n)-[*]-(p:Person)';
        // query = query + ' MATCH (p)-[:' + graphConst.REL_PROFESSION_IS + '] - (pfn:' + graphConst.NODE_PROFESSION + ')';
        // query = query + ' RETURN DISTINCT p, pfn';

        // query = query + ' UNION ';

        query = query + ' WITH {searchString} AS paramString';
        query = query + ' MATCH (p:Person)'; //Match only person
        query = query + ' WHERE ANY(param IN split(paramString, " ") ';
        query = query + '       WHERE ANY(prop in keys(p) ';
        query = query + '           WHERE ANY(val IN p[prop] ';
        query = query + '               WHERE val =~ ("(?i).*"+ param + "(?i).*"))))';
        query = query + ' MATCH (p)-[:' + graphConst.REL_PROFESSION_IS + '] - (pfn:' + graphConst.NODE_PROFESSION + ')';
        query = query + ' RETURN DISTINCT p, pfn';

        // MATCH (n)
        let params = {
            searchString: searchString
        };

        let session = neo4jConn.connection();

        session
            .run(query, params)
            .then(result => {
                logger.debug("Records for candidate search query: ", JSON.stringify(result));

                let personRecords = result.records.map(record => {
                    let person = record.get('p').properties;
                    person['profession'] = record.get('pfn').properties.name;
                    return person;
                });

                session.close();

                callback(null, personRecords);
            })
            .catch(error => {
                session.close();
                logger.debug("Error in Candidate Search", error);
                callback(error, null);
            });
    } catch (error) {
        return error;
    }

    return true;

};
module.exports = {
    searchCandidates: searchCandidates
};