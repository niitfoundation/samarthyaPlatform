const neo4jConn = require('../neo4jcon/neo4jcon');
const graphConst = require('../common/graphConstants');

// Function to find skills
const findSkills = function (skillName, limit) {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();
    let query = '';
    limit = limit || '10';

    query = query + 'MATCH (s:' + graphConst.NODE_SKILL + ')';

    if (name !== 'undefined' && name.length > 0) {
      query = query + 'WHERE s.' + graphConst.NODE_PROPERTY_NAME + '= "' + name.toLowerCase() + '"';
    }

    query = query + ' RETURN s LIMIT ' + limit;
    session
      .run(query)
      .then(function (result) {
        var data = [];
        result.records.forEach(function (record) {
          data.push(record._fields[0].properties);
        });
        if (data.length === 0) { resolve('Skill not found'); }
        resolve(data);
      })
      .catch(function (err) {
        reject(err);
      });
  });
  return promise;
};

// Function to add a skill
const addSkill = function (name) {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();

    name.forEach(function (name) {
      let query = '';
      if (name !== 'undefined' && name.length > 0 && name !== '') {
        query = query + 'MERGE (s:' + graphConst.NODE_SKILL + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + name.toLowerCase() + '"})';
        query = query + ' RETURN s';
      } else {
        reject('Skill not found');
      }

      session
        .run(query)
        .catch(function (err) {
          reject(err);
        });
    });
    resolve('Skill added successful');
  });
  return promise;
};

module.exports = {
  findSkills: findSkills,
  addSkill: addSkill
};
