// this is for creating the graph model in ne04j  
const graphConst = require('../../api/v1/common/graphConstants');
const neo4jConn = require('../../api/v1/neo4jcon/neo4jcon');
const logger = require('./../../../applogger');

const relatePersonTojobRole = function (person, jobRole) {
  let query = '';
  let user = 'user:' + graphConst.NODE_PERSON + '{' +
    graphConst.NODE_PROPERTY_NAME + ':"' + person.toLowerCase() + '"}';

  let role = 'rol:' + graphConst.NODE_JOBROLE + '{' +
    graphConst.NODE_PROPERTY_NAME + ':"' + jobRole.toLowerCase() + '"}';

  query = query + 'merge (' + user + ')-[:' + graphConst.REL_JOB_ROLE + ']->(' +
    role + ')';

  logger.debug(query);

  const session = neo4jConn.connection();

  return session.run(query).then(result => {
      session.close();
      logger.info('coming')
      callback('first query');
    })
    .catch(error => {
      session.close();
      logger.error(error);
    });

};

const relatePersonToSkill = function (person, skills) {

  let query = '';
  let user = 'user:' + graphConst.NODE_PERSON + '{' +
    graphConst.NODE_PROPERTY_NAME + ':"' + person.toLowerCase() + '"}';

  let skill = 'skill:' + graphConst.NODE_SKILL + '{' +
    graphConst.NODE_PROPERTY_NAME + ':"' + skills.toLowerCase() + '"}';

  query = query + 'merge(' + user + ')-[:' + graphConst.REL_Skill + ']->(' +
    skill + ')';

  logger.debug(query);

  const session = neo4jConn.connection();

  return session.run(query).then(result => {
      session.close();
      callback('Second query');
    })
    .catch(error => {
      session.close();
      logger.error(error);
    });


};

const relatePersonToPreferredLocation = function (person, location) {

  let query = '';
  let user = 'user:' + graphConst.NODE_PERSON + '{' +
    graphConst.NODE_PROPERTY_NAME + ':"' + person.toLowerCase() + '"}';


  let loc = 'loc:' + graphConst.NODE_LOCATION + '{' +
    graphConst.NODE_PROPERTY_NAME + ':"' + location.toLowerCase() + '"}';

  query = query + 'merge(' + user + ')-[:' + graphConst.REL_PREFFERED_LOCATION + ']->(' +
    loc + ')';

  logger.debug(query);

  const session = neo4jConn.connection();

  session.run(query).then(result => {
      session.close();
      callback('Third query');
    })
    .catch(error => {
      session.close();
      logger.error(error);
    });


};

module.exports = {
  relatePersonTojobRole: relatePersonTojobRole,
  relatePersonToSkill: relatePersonToSkill,
  relatePersonToPreferredLocation: relatePersonToPreferredLocation

}