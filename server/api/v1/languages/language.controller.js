const neo4jConn = require('../neo4jcon/neo4jcon');
const graphConst = require('../common/graphConstants');

// Function to add a language
const addLanguage = function (lang) {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();

    let query = '';
    query = query + 'MERGE (la:' + graphConst.NODE_LANGUAGE + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + lang.name.toLowerCase() + '",' +
      graphConst.NODE_PROPERTY_LANG_CODE + ':"' + lang.code.toLowerCase() + '",' + graphConst.NODE_PROPERTY_LANG_NATIVENAME + ':"' + lang.nativeName.toLowerCase() + '"})';
    query = query + ' RETURN la';

    session
      .run(query)
      .catch(function (err) {
        reject(err);
      });
    resolve({ success: true });
  });
  return promise;
};

// Function to find languages
const findAllLanguages = function () {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();
    let query = '';
    query = query + 'MATCH (la:' + graphConst.NODE_LANGUAGE + ')';
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

// Function to edit languages
const editLanguage = function (languageData) {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();
    let query = '';
    query = query + 'MATCH (la:' + graphConst.NODE_LANGUAGE + ' {' + graphConst.NODE_PROPERTY_LANG_CODE + ':"' + languageData.code.toLowerCase() + '"})';
    query = query + 'set la.' + graphConst.NODE_PROPERTY_NAME + '="' + languageData.name.toLowerCase() + '", la.' + graphConst.NODE_PROPERTY_LANG_NATIVENAME + '="' +
      languageData.nativeName.toLowerCase()
    query = query + '" RETURN la';
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

// Function to delete languages
const deleteLanguage = function (langCode, langName) {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();
    let query = '';
    query = query + 'MATCH (la:' + graphConst.NODE_LANGUAGE + ' {' + graphConst.NODE_PROPERTY_LANG_CODE + ':"' + langCode.toLowerCase() + '",' + graphConst.NODE_PROPERTY_NAME + ':"' + langName.toLowerCase() + '"})';
    query = query + 'delete(la)';
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
  findAllLanguages: findAllLanguages,
  addLanguage: addLanguage,
  editLanguage: editLanguage,
  deleteLanguage: deleteLanguage
};
