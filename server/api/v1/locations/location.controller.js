const neo4jConn = require('../neo4jcon/neo4jcon');
const graphConst = require('../common/graphConstants');

// Function to find locations
const findAllLocations = function () {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();
    let query = '';
    query = query + 'MATCH (la:' + graphConst.NODE_LOCATION + ')';
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

// Function to add a location
const addLocation = function (location) {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();

    let query = '';
    query = query + 'MERGE (p:' + graphConst.NODE_LOCATION + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + location.newName.toLowerCase() + '"})';
    query = query + ' RETURN p';

    session
      .run(query)
      .catch(function (err) {
        reject(err);
      });
    resolve({ success: true });
  });
  return promise;
};

// Function to edit location
const editLocation = function (locationData) {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();
    let query = '';
    query = query + 'MATCH (p:' + graphConst.NODE_LOCATION + ' {' + graphConst.NODE_PROPERTY_NAME + ':"' + locationData.oldName.toLowerCase() + '"})';
    query = query + 'set p.' + graphConst.NODE_PROPERTY_NAME + '="' + locationData.newName.toLowerCase();
    query = query + '" RETURN p';
    session
      .run(query)
      .then(function (result) {
        var data = [];
        result.records.forEach(function (record) {
          data.push(record._fields[0].properties);
        });
        if (data.length === 0) { resolve({data:data,success:false}); }
        resolve({ data: data, success: true });
      })
      .catch(function (err) {
        reject(err);
      });
  });
  return promise;
};

// Function to delete locations
const deleteLocation = function (name) {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();
    let query = '';
    query = query + 'MATCH (p:' + graphConst.NODE_LOCATION + ' {' + graphConst.NODE_PROPERTY_NAME + ':"' + name.toLowerCase() + '"})';
    query = query + 'delete(p)';
    session
      .run(query)
      .then(function (result) {
        resolve({ data: null, success: true });
      })
      .catch(function (err) {
        reject(err);
      });
  });
  return promise;
};

module.exports = {
  findAllLocations: findAllLocations,
  addLocation: addLocation,
  editLocation:editLocation,
  deleteLocation:deleteLocation
};
