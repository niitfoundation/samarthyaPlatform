const neo4jConn = require('../neo4jcon/neo4jcon');
const graphConst = require('../common/graphConstants');

const findProfessions = function (name, limit) {
  let promise = new Promise((resolve, reject) => {
    if(name === '') {
      resolve('Please enter a Profession');
    }

    const session = neo4jConn.connection();
    let query = '';
    limit = limit || '10';

    query = query + 'MATCH (p:' + graphConst.NODE_PROFESSION + ')';

    if (name !== 'undefined' && name.length > 0) {
      query = query + 'WHERE p.' + graphConst.NODE_PROPERTY_NAME + '= "' + name + '"';
    }

    query = query + ' RETURN p LIMIT ' + limit;
    session
      .run(query)
      .then(function (result) {
        var data = [];
        result.records.forEach(function (record) {
          data.push(record._fields[0].properties);
        });
        if (data.length === 0) { resolve('Profession not found'); }
        resolve(data);
      })
      .catch(function (err) {
        reject(err);
      });
  });
  return promise;
};

const addProfession = function (name) {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();

    name.forEach(function (name) {
      let query = '';
      if (name !== 'undefined' && name.length > 0) {
        query = query + 'MERGE (p:' + graphConst.NODE_PROFESSION + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + name + '"})';
        query = query + ' RETURN p';
      } else {
        reject('Profession not found');
      }

      session
        .run(query)
        .catch(function (err) {
          reject(err);
        });
    });
    resolve('Profession added successful');
  });
  return promise;
};

module.exports = {
  findProfessions: findProfessions,
  addProfession: addProfession
};
