const neo4jConn = require('../neo4jcon/neo4jcon');
const graphConst = require('../common/graphConstants');

// Function to find professions
const findAllProfessions = function () {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();
    let query = '';
    query = query + 'MATCH (la:' + graphConst.NODE_PROFESSION + ')';
    query = query + ' RETURN la';
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

// Function to add a profession
const addProfession = function (profession) {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();

    let query = '';
    query = query + 'MERGE (p:' + graphConst.NODE_PROFESSION + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + profession.newName.toLowerCase() + '"})';
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

// Function to edit profession
const editProfession = function (professionData) {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();
    let query = '';
    query = query + 'MATCH (p:' + graphConst.NODE_PROFESSION + ' {' + graphConst.NODE_PROPERTY_NAME + ':"' + professionData.oldName.toLowerCase() + '"})';
    query = query + 'set p.' + graphConst.NODE_PROPERTY_NAME + '="' + professionData.newName.toLowerCase();
    query = query + '" RETURN p';
    session
      .run(query)
      .then(function (result) {
        var data = [];
        result.records.forEach(function (record) {
          data.push(record._fields[0].properties);
        });
        if (data.length === 0) { resolve('Profession not found'); }
        resolve({ data: data, success: true });
      })
      .catch(function (err) {
        reject(err);
      });
  });
  return promise;
};


// Function to delete languages
const deleteProfession = function (name) {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();
    let query = '';
    query = query + 'MATCH (p:' + graphConst.NODE_PROFESSION + ' {' + graphConst.NODE_PROPERTY_NAME + ':"' + name.toLowerCase() + '"})';
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
  findAllProfessions: findAllProfessions,
  addProfession: addProfession,
  editProfession:editProfession,
  deleteProfession:deleteProfession
};
