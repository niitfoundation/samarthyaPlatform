const neo4jConn = require('../neo4jcon/neo4jcon');
const graphConst = require('../common/graphConstants');
const session = neo4jConn.connection();

const findSkills = function (name, limit) {
    let promise = new Promise((resolve, reject) => {
        let query = '';
        query = query + 'MATCH (s:' + graphConst.NODE_SKILL + ')';

        if (name !== 'undefined' && name.length > 0) {
            query = query + 'WHERE s.' + graphConst.NODE_PROPERTY_NAME + '= "' + name + '"';
        }

        query = query + ' RETURN s';
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

const addSkill = function (name) {
    let promise = new Promise((resolve, reject) => {
        let query = '';
        if (name !== 'undefined' && name.length > 0) {
            query = query + 'MERGE (q:' + graphConst.NODE_SKILL + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + name + '"})';
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
    findSkills: findSkills,
    addSkill: addSkill
};
