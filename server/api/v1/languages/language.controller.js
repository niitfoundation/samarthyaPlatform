const neo4jConn = require('../neo4jcon/neo4jcon');
const graphConst = require('../common/graphConstants');
const session = neo4jConn.connection();

const findLanguages = function (name, limit) {
    let promise = new Promise((resolve, reject) => {
        let query = '';
        query = query + 'MATCH (la:' + graphConst.NODE_LANGUAGE + ')';

        if (name !== 'undefined' && name.length > 0) {
            query = query + 'WHERE la.' + graphConst.NODE_PROPERTY_NAME + '= "' + name + '"';
        }

        query = query + ' RETURN la';
        session
            .run(query)
            .then(function (result) {
                var data = [];
                result.records.forEach(function (record) {
                    data.push(record._fields[0].properties);
                });
                resolve(data);
            })
            .catch(function (err) {
                reject(err);
            });
    });
    return promise;
};

const addLanguage = function (name) {
    let promise = new Promise((resolve, reject) => {
        let query = '';
        if (name !== 'undefined' && name.length > 0) {
            query = query + 'MERGE (la:' + graphConst.NODE_LANGUAGE + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + name + '"})';
            query = query + ' RETURN la';
        }
        session
            .run(query)
            .then(function (result) {
                var data = [];
                result.records.forEach(function (record) {
                    data.push(record._fields[0].properties);
                });
                resolve(data);
            })
            .catch(function (err) {
                reject(err);
            });
    });
    return promise;
};

module.exports = {
    findLanguages: findLanguages,
    addLanguage: addLanguage
};
