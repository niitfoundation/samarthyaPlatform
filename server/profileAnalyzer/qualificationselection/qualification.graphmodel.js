const neo4jConn = require('../../api/v1/neo4jcon/neo4jcon');
const graphConst = require('../../api/v1/common/graphConstants');
const session = neo4jConn.connection();

const addQualification = function (name, limit) {
    let promise = new Promise((resolve, reject) => {
        let query = '';
        query = query + 'MERGE (qualification:' + graphConst.NODE_QUALIFICATION + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + name + '"})';
        query = query + ' RETURN qualification';

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

const addRelation = function (name, limit) {
    let promise = new Promise((resolve, reject) => {
        let query = '';
        query = query + 'MATCH (qualification:' + graphConst.NODE_QUALIFICATION + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + qname + '"})';
        if (sname !== 'undefined' && sname.length > 0) {
            query = query + 'MATCH (skill:' + graphConst.NODE_SKILL + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + sname + '"})';
        }
        if (pname !== 'undefined' && pname.length > 0) {
            query = query + 'MATCH (person:' + graphConst.NODE_PERSON + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + pname + '"})';
        }
        if (instname !== 'undefined' && instname.length > 0) {
            query = query + 'MATCH (institite:' + graphConst.NODE_INSTITUTE + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + instname + '"})';
        }
        
        if (qname !== 'undefined' && qname.length > 0 && pname !== 'undefined' && pname.length > 0) {
            query = query + 'MERGE (qualification)<-[rel_qualified_as:' + graphConst.REL_QUALIFIED_AS + ']-(person)';
        }
        if (qname !== 'undefined' && qname.length > 0 && sname !== 'undefined' && sname.length > 0) {
            query = query + 'MERGE (qualification)-[rel_qualified_as:' + graphConst.REL_MAJOR_SUBJECT + ']->(skill)';
        }
        if (qname !== 'undefined' && qname.length > 0 && instname !== 'undefined' && instname.length > 0) {
            query = query + 'MERGE (qualification)<-[rel_qualified_as:' + graphConst.REL_QUALIFIED_FROM + ']-(institite)';
        }
        query = query + ' RETURN rel';

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
    addQualification: addQualification,
    addRelation: addRelation
};
