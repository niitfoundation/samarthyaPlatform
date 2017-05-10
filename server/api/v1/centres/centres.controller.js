const neo4jConn = require('../neo4jcon/neo4jcon');
const graphConst = require('../common/graphConstants');

// Function to find centres
const findAllCentres = function () {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();
    let query = '';
    query = query + 'MATCH (la:' + graphConst.NODE_CENTRE + ')';
    query = query + ' RETURN la';
    session
      .run(query)
      .then(function (result) {
        var data = [];
        result.records.forEach(function (record) {
          data.push(record._fields[0].properties);
        });
        if (data.length === 0) { resolve('centre not found'); }
        resolve(data);
      })
      .catch(function (err) {
        reject(err);
      });
  });
  return promise;
};

// Function to add a centre
const addCentre = function (centre) {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();

    let query = '';
    query = query + 'MERGE (p:' + graphConst.NODE_CENTRE + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + centre.newName.toLowerCase() + '"})';
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

// Function to edit centre
const editCentre = function (centreData) {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();
    let query = '';
    query = query + 'MATCH (p:' + graphConst.NODE_CENTRE + ' {' + graphConst.NODE_PROPERTY_NAME + ':"' + centreData.oldName.toLowerCase() + '"})';
    query = query + 'set p.' + graphConst.NODE_PROPERTY_NAME + '="' + centreData.newName.toLowerCase();
    query = query + '" RETURN p';
    session
      .run(query)
      .then(function (result) {
        var data = [];
        result.records.forEach(function (record) {
          data.push(record._fields[0].properties);
        });
        if (data.length === 0) { resolve('centre not found'); }
        resolve({ data: data, success: true });
      })
      .catch(function (err) {
        reject(err);
      });
  });
  return promise;
};


// Function to delete languages
const deleteCentre = function (name) {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();
    let query = '';
    query = query + 'MATCH (p:' + graphConst.NODE_CENTRE + ' {' + graphConst.NODE_PROPERTY_NAME + ':"' + name.toLowerCase() + '"})';
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
  findAllCentres: findAllCentres,
  addCentre: addCentre,
  editCentre:editCentre,
  deleteCentre:deleteCentre
};
