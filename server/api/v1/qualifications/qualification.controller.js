const neo4jConn = require('../neo4jcon/neo4jcon');
const graphConst = require('../common/graphConstants');

// Function to find qualifications
const findQualifications = function (name, limit) {
  let promise = new Promise((resolve, reject) => {
    if(name === '') {
      resolve('Please enter a Qualification');
    }

    const session = neo4jConn.connection();
    let query = '';
    limit = limit || '10';

    query = query + 'MATCH (q:' + graphConst.NODE_QUALIFICATION + ')';

    if (name !== 'undefined' && name.length > 0) {
      query = query + 'WHERE q.' + graphConst.NODE_PROPERTY_NAME + '= "' + name + '"';
    }

    query = query + ' RETURN q LIMIT ' + limit;
    session
      .run(query)
      .then(function (result) {
        var data = [];
        result.records.forEach(function (record) {
          data.push(record._fields[0].properties);
        });
        if (data.length === 0) { resolve('Qualification not found'); }
        resolve(data);
      })
      .catch(function (err) {
        reject(err);
      });
  });
  return promise;
};

// Function to add a qualification
const addQualification = function (name) {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();

    name.forEach(function (name) {
      let query = '';
      if (name !== 'undefined' && name.length > 0) {
        query = query + 'MERGE (q:' + graphConst.NODE_QUALIFICATION + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + name + '"})';
        query = query + ' RETURN q';
      } else {
        reject('Qualification not found');
      }
      session 
        .run(query)
        .catch(function (err) {
          reject(err);
        });
    });
    resolve('Qualification added successful');
  });
  return promise;
};

module.exports = {
  findQualifications: findQualifications,
  addQualification: addQualification
};
