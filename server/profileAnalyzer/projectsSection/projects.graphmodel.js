const graphConst = require('../../api/v1/common/graphConstants');
const neo4jConn = require('../../api/v1/neo4jcon/neo4jcon');
const logger = require('./../../../applogger');
const async = require('async');
const moment = require('moment');
const relatePersonToProject = function (person, project, callback) {

  let durationInMonth = moment.utc(moment(project.duration.end, "YYYY-MM-DD HH:mm:ss").diff(moment(project.duration.start, "YYYY-MM-DD HH:mm:ss"))).format("MM");
  let relAttributes = '';
  relAttributes = relAttributes + graphConst.PROP_JOBROLE + ': {role},';
  relAttributes = relAttributes + graphConst.PROP_DURATION + ': {duration},';
  relAttributes = relAttributes + graphConst.PROP_LOCATION + ' : {location}';

  let query = '';
  query = query + ' MATCH (p:' + graphConst.NODE_PERSON + ' {' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
  query = query + ' MERGE (proj:' + graphConst.NODE_PROJECT + ' {' + graphConst.NODE_PROPERTY_NAME + ':{projectName}})';
  query = query + ' MERGE (p)-[pproj:' + graphConst.REL_WORKED_ON + ' {' + relAttributes + '} ]->(proj)';
  query = query + ' RETURN p,pproj,proj';

  let params = {
    personName: person.toLowerCase(),
    projectName: project.name.toLowerCase(),
    role: project.jobRole.toLowerCase(),
    duration: durationInMonth,
    location: project.location.toLowerCase()
  };

  logger.debug("RelatePersonToProject debug" + query);

  const session = neo4jConn.connection();

  session
    .run(query, params)
    .then(result => {
      session.close();
      result.records.map(record => {
        callback(null, {
          Person: record.get('p'),
          Relation: record.get('pproj'),
          Project: record.get('proj')
        });
      });
    })
    .catch(error => {
      session.close();
      logger.error("RelatePersonToProject error" + error);
      callback(err, null);
    });
  return true;
};

const relatePersonToSkills = function (person, skills, callback) {
  // We are using array based relationship creation, an Cypher example is as below
  // match (p:Person {name: 'murugavel'})
  // FOREACH (sk in ['s1', 's2', 's3'] | merge (s:Skill {name:sk}) merge (p)-[:WORKED_ON]->(s));

  let query = '';
  query = query + ' MATCH (p:' + graphConst.NODE_PERSON + ' {' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
  query = query + ' FOREACH (sk in {skills} | MERGE (s:' + graphConst.NODE_SKILL + ' {' + graphConst.NODE_PROPERTY_NAME + ': sk}) '; //continued to next line
  query = query + ' MERGE (p)-[ps:' + graphConst.REL_WORKED_ON + ']->(s) )';
  query = query + ' RETURN p';

  const session = neo4jConn.connection();
  skills = skills.map(function (skill) {
    return skill.toLowerCase();
  });

  let params = {
    personName: person.toLowerCase(),
    skills: skills
  };

  logger.debug("RelatePersonToSkills debug" + query);

  session
    .run(query, params)
    .then(result => {
      session.close();
      result.records.map(record => {
        callback(null, {
          person: record.get('p')
        });
      });
    })
    .catch(error => {
      session.close();
      logger.error("RelatePersonToSkills error" + error);
      callback(err, null);
    });

  return true;
}

const relateProjectToSkills = function (projectName, skills, callback) {
  let query = '';
  query = query + ' MATCH (p:' + graphConst.NODE_PROJECT + ' {' + graphConst.NODE_PROPERTY_NAME + ':{projectName}})';
  query = query + ' FOREACH (sk in {skills} | MERGE (s:' + graphConst.NODE_SKILL + ' {' + graphConst.NODE_PROPERTY_NAME + ': sk}) '; //continued to next line
  query = query + ' MERGE (p)-[ps:' + graphConst.REL_USED + ']->(s) )';
  query = query + ' RETURN p';

  const session = neo4jConn.connection();
  skills = skills.map(function (skill) {
    return skill.toLowerCase();
  });

  let params = {
    projectName: projectName.toLowerCase(),
    skills: skills
  };

  session
    .run(query, params)
    .then(result => {
      session.close();
      result.records.map(record => {
        callback(null, {
          projectName: record.get('p')
        });
      });
    })
    .catch(error => {
      session.close();
      logger.error("RelateProjectToSkills error" + error);
      callback(err, null);
    });

  return true;
}

module.exports = {
  relatePersonToProject: relatePersonToProject,
  relatePersonToSkills: relatePersonToSkills,
  relateProjectToSkills: relateProjectToSkills
}