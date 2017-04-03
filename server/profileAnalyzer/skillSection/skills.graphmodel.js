// const neo4jConn = require('../../api/v1/neo4jcon/neo4jcon');
// const graphConst = require('../../api/v1/common/graphConstants');
// const session = neo4jConn.connection();

// const addSkill = function (name, limit) {
//     let promise = new Promise((resolve, reject) => {
//         let query = '';
//         query = query + 'MERGE (s:' + graphConst.NODE_SKILL + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + name + '"})';
//         query = query + ' RETURN s';

//         session
//             .run(query)
//             .then(function (result) {
//                 var data = [];
//                 result.records.forEach(function (record) {
//                     data.push(record._fields[0].properties);
//                 });
//                 resolve(data);
//             })
//             .catch(function (err) {
//                 reject(err);
//             });
//     });
//     return promise;
// };

// module.exports = {
//     addSkill: addSkill
// };
// -------------------------------------------------------------------------------
const graphConst = require('../../api/v1/common/graphConstants');
const neo4jConn = require('../../api/v1/neo4jcon/neo4jcon');
const logger = require('./../../../applogger');

// this is to relate a person with its living location
const relatePersonToSkills = function (person, skill, years, callback) {
    let query = '';
    let user = 'user:' + graphConst.NODE_PERSON + '{'
        + graphConst.NODE_PROPERTY_NAME + ':"' + person.toLowerCase() + '"}';

    let skl = 'skl:' + graphConst.NODE_SKILL + '{'
        + graphConst.NODE_PROPERTY_NAME + ':"' + skill.toLowerCase() + '"}';

    query = query + 'merge(' + user + ')-[:' + graphConst.REL_KNOWS + '{' + graphConst.REL_PROPERTY_YEARS + ':' +
    years + '}]->('
        + skl + ')';

    logger.debug(query);

    const session = neo4jConn.connection();

    return session.run(query).then(result => {
        session.close();
        callback('first query');
    })
        .catch(error => {
            session.close();
            logger.error(error);
        });
};

// const relatePersonToSkillsExperience = function (person, skill, years, callback) {
//     let query = '';
//     let user = 'user:' + graphConst.NODE_PERSON + '{'
//         + graphConst.NODE_PROPERTY_NAME + ':"' + person.toLowerCase() + '"}';

//     let skl = 'skl:' + graphConst.NODE_SKILL + '{'
//         + graphConst.NODE_PROPERTY_NAME + ':"' + skill.toLowerCase() + '"}';

//     query = query + 'merge(' + user + ')-[:' + graphConst.REL_HAS_EXPERIENCE_OF + '{' + graphConst.REL_PROPERTY_YEARS + ':' +
//     years + '}]->('
//         + skl + ')';

//     logger.debug(query);

//     const session = neo4jConn.connection();

//     return session.run(query).then(result => {
//         session.close();
//         callback('first query');
//     })
//         .catch(error => {
//             session.close();
//             logger.error(error);
//         });
// };


module.exports = {
    relatePersonToSkills: relatePersonToSkills,
    // relatePersonToSkillsExperience: relatePersonToSkillsExperience
};
