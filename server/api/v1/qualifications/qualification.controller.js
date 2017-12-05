const neo4jConn = require('../neo4jcon/neo4jcon');
const graphConst = require('../common/graphConstants');
const ProfileModel = require('../profile/profile.entity');
const logger = require('./../../../../applogger');

// Function to find qualifications
const findAllQualifications = function () {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();
    let query = '';
    query = query + 'MATCH (la:' + graphConst.NODE_QUALIFICATION + ')';
    query = query + ' RETURN la';
    session
      .run(query)
      .then(function (result) {
        var data = [];
        result.records.forEach(function (record) {
          data.push(record._fields[0].properties);
        });
        if (data.length === 0) { resolve('qualification not found'); }
        resolve(data);
      })
      .catch(function (err) {
        reject(err);
      });
  });
  return promise;
};

// Function to find all academic types in qualifications
const findAcademicTypes = function () {
  return new Promise((resolve,reject) => {
    ProfileModel.distinct("qualifications.academictype",function(err,result){
            if (err) {
                logger.error('Error in Fetching academictypes' + err);
                reject(err);
            } else {
                logger.debug('Fetched Academictypes ' + result);
                resolve(result);
            }
    });
  });
}

// Function to find all subjects in qualifications
const findSubjects = function () {
  return new Promise((resolve,reject) => {
    ProfileModel.distinct("qualifications.subject",function(err,result){
            if (err) {
                logger.error('Error in Fetching subjects' + err);
                reject(err);
            } else {
                logger.debug('Fetched subjects ' + result);
                resolve(result);
            }
    });
  });
}

// Function to add a qualification
const addQualification = function (qualification) {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();

    let query = '';
    query = query + 'MERGE (p:' + graphConst.NODE_QUALIFICATION + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + qualification.newName.toLowerCase() + '"})';
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

// Function to edit qualification
const editQualification = function (qualificationData) {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();
    let query = '';
    query = query + 'MATCH (p:' + graphConst.NODE_QUALIFICATION + ' {' + graphConst.NODE_PROPERTY_NAME + ':"' + qualificationData.oldName.toLowerCase() + '"})';
    query = query + 'set p.' + graphConst.NODE_PROPERTY_NAME + '="' + qualificationData.newName.toLowerCase();
    query = query + '" RETURN p';
    session
      .run(query)
      .then(function (result) {
        var data = [];
        result.records.forEach(function (record) {
          data.push(record._fields[0].properties);
        });
        if (data.length === 0) { resolve('qualification not found'); }
        resolve({ data: data, success: true });
      })
      .catch(function (err) {
        reject(err);
      });
  });
  return promise;
};


// Function to delete qualifications
const deleteQualification = function (name) {
  let promise = new Promise((resolve, reject) => {
    const session = neo4jConn.connection();
    let query = '';
    query = query + 'MATCH (p:' + graphConst.NODE_QUALIFICATION + ' {' + graphConst.NODE_PROPERTY_NAME + ':"' + name.toLowerCase() + '"})';
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
  findAllQualifications: findAllQualifications,
  findAcademicTypes: findAcademicTypes,
  findSubjects: findSubjects,
  addQualification: addQualification,
  editQualification:editQualification,
  deleteQualification:deleteQualification
};
