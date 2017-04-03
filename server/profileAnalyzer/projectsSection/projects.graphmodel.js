const graphConst = require('../../api/v1/common/graphConstants');
const neo4jConn = require('../../api/v1/neo4jcon/neo4jcon');
const logger = require('./../../../applogger');

const relatePersonToProject = function (person, project, callback) {
  let relAttributes = '';
  relAttributes = relAttributes + graphConst.PROP_ROLE + ': {role},';
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
    duration: project.duration,
    location: project.location.toLowerCase()
  };

  logger.debug("RelatePersonToProject debug"+query);

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
      logger.error("RelatePersonToProject error"+error);
      callback(err, null);
    });
  return true;
};

// relate the person to skills neo4j query
const relatePersonToSkills = function (person, project, callback) {
  let results = [];
  let query = '';
  query = query + ' MATCH (p:' + graphConst.NODE_PERSON + ' {' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
  query = query + ' MERGE (s:' + graphConst.NODE_SKILL + ' {' + graphConst.NODE_PROPERTY_NAME + ':{skill}})';
  query = query + ' MERGE (p)-[ps:' + graphConst.REL_WORKED_ON + ' ]->(s)';
  query = query + ' RETURN p,ps,s';
  console.log(project + "pppp")
  project.forEach(function (skill) {
    let params = {
      personName: person.toLowerCase(),
      skill: skill
    };

    logger.debug("relatePersonToSkills debug"+query);

    const session = neo4jConn.connection();

    session
      .run(query, params)
      .then(result => {
        session.close();
        result.records.map(record => {
          results.push(
            {
              Person: record.get('p'),
              Relation: record.get('ps'),
              Skill: record.get('s')
            }
          );
        });
      })
      .catch(error => {
        session.close();
        logger.error("relatePersonToSkills error"+error);
        callback(err, null);
      });
  })
  callback(null, results);
  return true;
};

// relate the project to skills neo4j query

const relateProjectToSkills = function (projectName, project, callback) {
  let results = [];
  let query = '';
  query = query + ' MATCH (proj:' + graphConst.NODE_PROJECT + ' {' + graphConst.NODE_PROPERTY_NAME + ':{projectName}})';
  query = query + ' MERGE (s:' + graphConst.NODE_SKILL + ' {' + graphConst.NODE_PROPERTY_NAME + ':{skill}})';
  query = query + ' MERGE (proj)-[projs:' + graphConst.REL_USED + ' ]->(s)';
  query = query + ' RETURN proj,s,projs';
  project.forEach(function (skill) {
    let params = {
      projectName: projectName.toLowerCase(),
      skill: skill
    };
    logger.debug("RelateProjectToSkills debug"+query);

    const session = neo4jConn.connection();

    session
      .run(query, params)
      .then(result => {
        session.close();
        result.records.map(record => {
          results.push({
            Project: record.get('proj'),
            Relation: record.get('projs'),
            Skill: record.get('s')
          }
          );
        });
      })
      .catch(error => {
        session.close();
        logger.error("RelateProjectToSkills error"+error);
        callback(err, null);
      });
  });
  callback(null, {
    results
  });
  return true;
};

module.exports = {
  relatePersonToProject: relatePersonToProject,
  relatePersonToSkills: relatePersonToSkills,
  relateProjectToSkills: relateProjectToSkills
}