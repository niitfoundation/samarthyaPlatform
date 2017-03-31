const neo4jConn = require('../../api/v1/neo4jcon/neo4jcon');
const graphConst = require('../../api/v1/common/graphConstants');
const session = neo4jConn.connection();

const addSkill = function (name, limit) {
    let promise = new Promise((resolve, reject) => {
        let query = '';
        query = query + 'MERGE (s:' + graphConst.NODE_SKILL + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + name + '"})';
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

module.exports = {
    addSkill: addSkill
};
