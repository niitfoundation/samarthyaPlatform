const neo4jConn = require('../neo4jcon/neo4jcon');
const graphConst = require('../common/graphConstants');

// Function to find languages
const findLanguages = function (name, limit) {
  let promise = new Promise((resolve, reject) => {
    if(name === '') {
      resolve('Please enter a Language');
    }

    const session = neo4jConn.connection();
    let query = '';
    limit = limit || '10';

    query = query + 'MATCH (la:' + graphConst.NODE_LANGUAGE + ')';

    if (name !== 'undefined' && name.length > 0) {
      query = query + 'WHERE la.' + graphConst.NODE_PROPERTY_NAME + '= "' + name + '"';
    }

    query = query + ' RETURN la LIMIT ' + limit;
    session
      .run(query)
      .then(function (result) {
        var data = [];
        result.records.forEach(function (record) {
          data.push(record._fields[0].properties);
        });
        if (data.length === 0) { resolve('Language not found'); }
        resolve(data);
      })
      .catch(function (err) {
        reject(err);
      });
  });
  return promise;
};

// Function to add a language
const addLanguage = function (name) {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();

    name.forEach(function (name) {
      let query = '';
      if (name !== 'undefined' && name.length > 0) {
        query = query + 'MERGE (la:' + graphConst.NODE_LANGUAGE + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + name + '"})';
        query = query + ' RETURN la';
      } else {
        reject('Language not found');
      }

      session
        .run(query)
        .catch(function (err) {
          reject(err);
        });
    });
    resolve('Language added successful');
  });
  return promise;
};

module.exports = {
  findLanguages: findLanguages,
  addLanguage: addLanguage
};
