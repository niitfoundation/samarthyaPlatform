// this is for creating the graph model in ne04j  
 const graphConst = require('../../api/v1/common/graphConstants');
 const neo4jConn = require('../../api/v1/neo4jcon/neo4jcon');
 const logger = require('./../../../applogger');

 const relatePersonTojobRole = function(person, jobRole) {
     let query = '';
     let user = 'user:' + graphConst.NODE_PERSON + '{'
       + graphConst.NODE_PROPERTY_NAME + ':"' + person.toLowerCase() + '"}';

let loc = 'loc:' + graphConst.NODE_LOCATION + '{'
         + graphConst.NODE_PROPERTY_NAME + ':"' + location.toLowerCase() + '"}';

};

const relatePersonToSkill = function() {

};

const relatePersonToPreferredLocation = function() {

};