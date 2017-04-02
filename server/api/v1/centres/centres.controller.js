const neo4jConn = require('../neo4jcon/neo4jcon');
const graphConst = require('../common/graphConstants');

// Function to find the centres
const findCentres = function (name, limit) {
  let promise = new Promise((resolve, reject) => {
    if(name === '') {
      resolve('Please enter a Centre');
    }

    const session = neo4jConn.connection();
    let query = '';
    limit = limit || '10';

    query = query + 'MATCH (c:' + graphConst.NODE_CENTRE + ')';

    if (name !== 'undefined' && name.length > 0) {
      query = query + 'WHERE c.' + graphConst.NODE_PROPERTY_NAME + '= "' + name + '"';
    }

    query = query + ' RETURN c LIMIT ' + limit;
    session
      .run(query)
      .then(function (result) {
        var data = [];
        result.records.forEach(function (record) {
          data.push(record._fields[0].properties);
        });
        if (data.length === 0) { resolve('Centre not found'); }
        resolve(data);
      })
      .catch(function (err) {
        reject(err);
      });
  });
  return promise;
};

// Function to add a centre
const addCentre = function (name) {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();

    name.forEach(function (name) {
      let query = '';
      if (name !== 'undefined' && name.length > 0) {
        query = query + 'MERGE (c:' + graphConst.NODE_CENTRE + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + name + '"})';
        query = query + ' RETURN c';
      } else {
        reject('Centre not found');
      }

      session
        .run(query)
        .catch(function (err) {
          reject(err);
        });
    });
    resolve('centre added successful');
  });
  return promise;
};

module.exports = {
  findCentres: findCentres,
  addCentre: addCentre
};
