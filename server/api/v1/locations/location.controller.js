const neo4jConn = require('../neo4jcon/neo4jcon');
const graphConst = require('../common/graphConstants');

const findLocations = function (name, limit) {
  let promise = new Promise((resolve, reject) => {
    if(name === '') {
      resolve('Please enter a Location');
    }

    const session = neo4jConn.connection();
    let query = '';
    limit = limit || '10';

    query = query + 'MATCH (lo:' + graphConst.NODE_LOCATION + ')';

    if (name !== 'undefined' && name.length > 0) {
      query = query + 'WHERE lo.' + graphConst.NODE_PROPERTY_NAME + '= "' + name + '"';
    }

    query = query + ' RETURN lo LIMIT ' + limit;
    session
      .run(query)
      .then(function (result) {
        var data = [];
        result.records.forEach(function (record) {
          data.push(record._fields[0].properties);
        });
        if (data.length === 0) { resolve('Location not found'); }
        resolve(data);
      })
      .catch(function (err) {
        reject(err);
      });
  });
  return promise;
};

const addLocation = function (name) {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();

    name.forEach(function (name) {
      let query = '';
      if (name !== 'undefined' && name.length > 0) {
        query = query + 'MERGE (lo:' + graphConst.NODE_LOCATION + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + name + '"})';
        query = query + ' RETURN lo';
      } else {
        reject('Location not found');
      }

      session
        .run(query)
        .catch(function (err) {
          reject(err);
        });
    });
    resolve('Location added successful');
  });
  return promise;
};

module.exports = {
  findLocations: findLocations,
  addLocation: addLocation
};
