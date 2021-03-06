const graphConst = require('../../api/v1/common/graphConstants');
const neo4jConn = require('../../api/v1/neo4jcon/neo4jcon');
const logger = require('./../../../applogger');
const async = require('async');


// this is to relate a person with its living location
const relatePersonToLocation = function(personName, personalInfo, callback) {
    logger.debug('Personal Info', personalInfo);
    logger.debug('Person Name Info', personName);
    let query = '';
    query = query + 'MATCH(p:' + graphConst.NODE_PERSON + '{' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
    query = query + 'MERGE(l:' + graphConst.NODE_LOCATION + '{' + graphConst.NODE_PROPERTY_NAME + ':{locationName}})';
    query = query + 'MERGE(p)-[plr:' + graphConst.REL_LIVES_IN + ']->(l)';
    query = query + 'RETURN p,plr,l';

    let params = {
        personName: personName.toLowerCase(),
        locationName: personalInfo.address.district.toLowerCase()
    };

    logger.debug('relatePersonToLocation QUERY :::', query);

    const session = neo4jConn.connection();

    session
        .run(query, params)
        .then(result => {
            session.close();
            let results = result.records.map(record => {
                return {
                    person: record.get('p'),
                    relation: record.get('plr'),
                    location: record.get('l')
                };
            });
            callback(null, results);
        })
        .catch(err => {
            session.close();
            logger.error('Error in relatePersonToLocation ', err);
            callback(err, null);
        });
    return true;
};

const relatePersonToLanguage = function(personName, personalInfo, callback) {
    let query = '';
    query = query + 'MATCH(p:' + graphConst.NODE_PERSON + '{' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
    query = query + 'MERGE(pref:' + graphConst.NODE_LANGUAGE + '{' + graphConst.NODE_PROPERTY_NAME + ':{prefLang}})';
    query = query + 'MERGE(native:' + graphConst.NODE_LANGUAGE + '{' + graphConst.NODE_PROPERTY_NAME + ':{nativeLang}})';
    query = query + 'MERGE(p)-[ppref:' + graphConst.REL_PREF_LANG + ']->(pref)';
    query = query + 'MERGE(p)-[pnative:' + graphConst.REL_NATIV_LANG + ']->(native)';
    query = query + 'RETURN p,pref,native,ppref,pnative';

    let params = {
        personName: personName.toLowerCase(),
        prefLang: personalInfo.prefLang.toLowerCase(),
        nativeLang: personalInfo.nativeLang.toLowerCase(),
    };

    logger.debug('relatePersonToLanguage QUERY :::', query);

    const session = neo4jConn.connection();

    session
        .run(query, params)
        .then(result => {
            session.close();
            let results = result.records.map(record => {
                return {
                    person: record.get('p'),
                    relation1: record.get('ppref'),
                    prefLang: record.get('pref'),
                    relation2: record.get('pnative'),
                    nativeLang: record.get('native')
                };
            });
            callback(null, results);
        })
        .catch(err => {
            session.close();
            logger.error('Error in relatePersonToLanguage ', err);
            callback(err, null);
        });
    return true;
};

const relatePersonToSpecificLanguage = function(personName, personalInfo, callback) {

    async.map(personalInfo.lang, function(lang) {
        let query = '';
        query = query + 'MATCH(p:' + graphConst.NODE_PERSON + '{' + graphConst.NODE_PROPERTY_NAME + ':{personName}})';
        query = query + 'MERGE(lang:' + graphConst.NODE_LANGUAGE + '{' + graphConst.NODE_PROPERTY_NAME + ':{langName}})';

        // conditions to check which relations we need to create
        if (lang.r) {
            query = query + 'MERGE(p)-[read:' + graphConst.REL_CAN_READ + ']->(lang)';
        }
        if (lang.w) {
            query = query + 'MERGE(p)-[write:' + graphConst.REL_CAN_WRITE + ']->(lang)';
        }
        if (lang.s) {
            query = query + 'MERGE(p)-[speak:' + graphConst.REL_CAN_SPEAK + ']->(lang)';
        }

        query = query + 'RETURN p';

        let params = {
            personName: personName.toLowerCase(),
            langName: lang.name.toLowerCase(),
        };

        logger.debug('relatePersonToMultiLanguage QUERY :::', query);

        const session = neo4jConn.connection();

        session
            .run(query, params)
            .then(result => {
                session.close();
                let results = result.records.map(record => {
                    return record.get('p');
                });
                callback(null, results);
            })
            .catch(err => {
                session.close();
                logger.error('Error in relatePersonToMultiLanguage ', err);
                callback(err, null);
            });
    });

};

// const relatePersonToLanguageColln = function (personName, personalInfo,callback) {
//   async.map(personalInfo.lang, function(lang) {
//     relatePersonToSpecificLanguage(personName, lang,function(err,result){
//       if(err)
//       callback(err,null);

//       callback(null,result) ;
//        });
//   });
// };

module.exports = {
    relatePersonToLocation: relatePersonToLocation,
    relatePersonToLanguage: relatePersonToLanguage,
    relatePersonToSpecificLanguage: relatePersonToSpecificLanguage
};