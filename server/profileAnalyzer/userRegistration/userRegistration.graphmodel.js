const graphConst = require('../../api/v1/common/graphConstants');
const neo4jConn = require('../../api/v1/neo4jcon/neo4jcon');
const logger = require('./../../../applogger');

// this is to create person node
const createPerson = function (personName, profileData, callback) {
  let personAttributes = '';
  personAttributes = personAttributes + ' ' + graphConst.NODE_PROPERTY_NAME + ': {personName}';
  personAttributes = personAttributes + ' ' + graphConst.PROP_GENDER + ': {gender}';
  personAttributes = personAttributes + ' ' + graphConst.PROP_AADHAAR + ': {aadhaar}';
  personAttributes = personAttributes + ' ' + graphConst.PROP_DOB + ': {dob}';
  personAttributes = personAttributes + ' ' + graphConst.PROP_EMAIL + ': {email}';
  personAttributes = personAttributes + ' ' + graphConst.PROP_NAME + ': {displayName}';

  let query = '';
  query = query + 'MERGE(p:' + graphConst.NODE_PERSON + '{' + personAttributes + '})';
  query = query + 'RETURN p';

  let params = {
    personName: personName.toLowerCase(),
    gender: profileData.personalInfo.gender.toLowerCase(),
    email: profileData.personalInfo.email.toLowerCase(),
    aadhaar: profileData.personalInfo.aadhaar.toLowerCase(),
    displayName: profileData.personalInfo.name.toLowerCase(),
    dob: profileData.personalInfo.dob()
  };

  logger.debug('createPerson QUERY :::', query);

  const session = neo4jConn.connection();

  session
    .run(query, params)
    .then(result => {
      session.close();
      result.records.map(record => {
        callback(null, {
          person: record.get('p'),
        });
      });
    })
    .catch(err => {
      session.close();
      logger.error('Error in createPerson ', err);
      callback(err, null);
    });
  return true;
};

// this is to relatePersonToProfession
const relatePersonToProfession = function (personName, profession, callback) {

  let query = '';
  query = query + 'MATCH(p:' + graphConst.NODE_PERSON + '{' + graphConst.NODE_PROPERTY_NAME + '{personName}})';
  query = query + 'MERGE(pro:' + graphConst.NODE_PROFESSION + '{' + graphConst.NODE_PROPERTY_NAME + ':{profession}})';
  query = query + 'MERGE(p)-[ppror:' + graphConst.REL_PROFESSION_IS + ']->(pro)';
  query = query + 'RETURN p,ppro,pro';

  let params = {
    personName: personName.toLowerCase(),
    profession: profession.toLowerCase(),
  };

  logger.debug('relatePersonToProfession QUERY :::', query);

  const session = neo4jConn.connection();

  session
    .run(query, params)
    .then(result => {
      session.close();
      result.records.map(record => {
        callback(null, {
          person: record.get('p'),
          relation: record.get('ppror'),
          location: record.get('pro')
        });
      });
    })
    .catch(err => {
      session.close();
      logger.error('Error in relatePersonToProfession ', err);
      callback(err, null);
    });
  return true;
};


module.exports = {
  createPerson: createPerson,
  relatePersonToProfession: relatePersonToProfession,
};
