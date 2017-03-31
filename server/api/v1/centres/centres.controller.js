const neo4jConn = require('../neo4jcon/neo4jcon');
const graphConst = require('../common/graphConstants');
const session = neo4jConn.connection();

const findCentres = function (name, limit) {
    let promise = new Promise((resolve, reject) => {
        let query = '';
        query = query + 'MATCH (c:' + graphConst.NODE_CENTRE + ')';

        if (name !== 'undefined' && name.length > 0) {
            query = query + 'WHERE c.' + graphConst.NODE_PROPERTY_NAME + '= "' + name + '"';
        }

        query = query + ' RETURN c LIMIT' + limit;
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

const addCentre = function (name) {
    let promise = new Promise((resolve, reject) => {
        let query = '';
        if (name !== 'undefined' && name.length > 0) {
            query = query + 'MERGE (c:' + graphConst.NODE_CENTRE + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + name + '"})';
            query = query + ' RETURN c';
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
    findCentres: findCentres,
    addCentre: addCentre
};
