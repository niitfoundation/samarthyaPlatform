// this is for creating the graph model in ne04j  

const graphConst = require('../../api/v1/common/graphConstants');
const neo4jConn = require('../../api/v1/neo4jcon/neo4jcon');
const logger = require('./../../../applogger');
const async = require('async');

const relatePersonToHimself = function (personName, looking, callback) {

  let relAttributes = '';
  relAttributes = relAttributes + graphConst.PROP_JOB_LOOKING + ': {looking}';

  let query = '';
  query = query + ' MATCH (p:' + graphConst.NODE_PERSON + ' {' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
  query = query + ' MERGE (p1:' + graphConst.NODE_PERSON + ' {' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
  query = query + ' MERGE (p)-[ppr:' + graphConst.REL_JOB_LOOKING + ' {' + relAttributes + '} ]->(p1)';
  query = query + ' RETURN p,ppr,p1';

  let params = {
    personName: personName.toLowerCase(),
    looking: looking,
  };

  logger.debug('relatePersonToHimself::Query', query);

  const session = neo4jConn.connection();

  session
    .run(query, params)
    .then(result => {
      session.close();
      result.records.map(record => {
        callback(null, {
          Person: record.get('p'),
          Relation: record.get('ppr')
        });
      });
    })
    .catch(err => {
      session.close();
      logger.error('Error in relatePersonToHimself ', err);
      callback(err, null);
    });
  return true;

};

//relating person to jobrole and merge/create the nodes and relations
const relatePersonTojobRole = function (personName, jobRole, callback) {

  let query = '';
  query = query + ' MATCH (p:' + graphConst.NODE_PERSON + ' {' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
  query = query + ' MERGE (j:' + graphConst.NODE_JOBROLE + ' {' + graphConst.NODE_PROPERTY_NAME + ':{jobRole}})';
  query = query + ' MERGE (p)-[pjr:' + graphConst.REL_JOB_ROLE + ' ]->(j)';
  query = query + ' RETURN p,pjr,j';

  let params = {
    personName: personName.toLowerCase(),
    jobRole: jobRole.toLowerCase(),
  };

  logger.debug('relatePersonTojobRole::Query', query);

  const session = neo4jConn.connection();

  session
    .run(query, params)
    .then(result => {
      session.close();
      result.records.map(record => {
        callback(null, {
          Person: record.get('p'),
          Relation: record.get('pjr'),
          JobRole: record.get('j')
        });
      });
    })
    .catch(err => {
      session.close();
      logger.error('Error in relatePersonTojobRole ', err);
      callback(err, null);
    });
  return true;

};

//relating person to Skill and merge/create the nodes and relations
const relatePersonToSkill = function (personName, skills, callback) {

  let query = '';
  let results = [];
  query = query + ' MATCH (p:' + graphConst.NODE_PERSON + ' {' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
  query = query + ' MERGE (s:' + graphConst.NODE_SKILL + ' {' + graphConst.NODE_PROPERTY_NAME + ':{skill}})';
  query = query + ' MERGE (p)-[psr:' + graphConst.REL_SKILL + ' ]->(s)';
  query = query + ' RETURN p,psr,s';

  const session = neo4jConn.connection();
  async.map(skills, function (skill) {
    let params = {
      personName: personName.toLowerCase(),
      skill: skill.toLowerCase(),
    };

    logger.debug('relatePersonToSkill::Query', query);

    session
      .run(query, params)
      .then(result => {
        session.close();
        result.records.map(record => {
          results.push({
            Person: record.get('p'),
            Relation: record.get('psr'),
            Location: record.get('s')
          });
        });
      })
      .catch(err => {
        session.close();
        logger.error('Error in relatePersonToSkill ', err);
        callback(err, null);
      });

  })
  callback(null, results);
  return session;

};

//relating person to location and merge/create the nodes and relations
const relatePersonToPreferredLocation = function (personName, locations, callback) {
  let query = '';
  let results = [];
  query = query + ' MATCH (p:' + graphConst.NODE_PERSON + ' {' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
  query = query + ' MERGE (l:' + graphConst.NODE_LOCATION + ' {' + graphConst.NODE_PROPERTY_NAME + ':{location}})';
  query = query + ' MERGE (p)-[plr:' + graphConst.REL_PREFFERED_LOCATION + ' ]->(l)';
  query = query + ' RETURN p,plr,l';

  const session = neo4jConn.connection();

  async.map(locations, function (location) {
    let params = {
      personName: personName.toLowerCase(),
      location: location.toLowerCase(),
    };

    logger.debug('relatePersonToPreferredLocation::Query', query);

    session
      .run(query, params)
      .then(result => {
        session.close();
        result.records.map(record => {
          results.push({
            Person: record.get('p'),
            Relation: record.get('plr'),
            Location: record.get('l')
          });
        });
      })
      .catch(err => {
        session.close();
        logger.error('Error in relatePersonToPreferredLocation ', err);
        callback(err, null);
      });
  })
  callback(null, results);

  return session;
};

module.exports = {
  relatePersonToHimself: relatePersonToHimself,
  relatePersonTojobRole: relatePersonTojobRole,
  relatePersonToSkill: relatePersonToSkill,
  relatePersonToPreferredLocation: relatePersonToPreferredLocation

};
