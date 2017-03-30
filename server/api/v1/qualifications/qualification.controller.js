const neo4jConn = require('../neo4jcon/neo4jcon');
const graphConst = require('../common/graphConstants');
const session = neo4jConn.connection();

const findQualifications = function (name, limit) {
    let promise = new Promise((resolve, reject) => {
        let query = '';
        query = query + 'MATCH (q:' + graphConst.NODE_QUALIFICATION + ')';

        if (name !== 'undefined' && name.length > 0) {
            query = query + 'WHERE q.' + graphConst.NODE_PROPERTY_NAME + '= "' + name + '"';
        }

        query = query + ' RETURN q';

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

const addQualification = function (name) {
    let promise = new Promise((resolve, reject) => {
        let query = '';
        if (name !== 'undefined' && name.length > 0) {
            query = query + 'MERGE (q:' + graphConst.NODE_QUALIFICATION + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + name + '"})';
            query = query + ' RETURN q';
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
    findQualifications: findQualifications,
    addQualification: addQualification
};