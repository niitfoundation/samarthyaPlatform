const logger = require('./../../../../applogger');
const candidateGraphmodel = require('./candidateSearch.graphmodel');
const stopword = require('stopword');
const constants = require('./../common/appConstants');

/*
 To search the candidate by the coordinator or supervisor and remove the stopwords,do the query search and return the candidate details
 */
const getCandidates = function (searchString, pageNo, pagelimit) {
    const oldString = searchString.split(' ');
    const newString = stopword.removeStopwords(oldString);
    const finalSearchString = stopword.removeStopwords(newString, constants.predefinedSW).toString();
    let promise = new Promise((resolve, reject) => {
        candidateGraphmodel.searchCandidates(finalSearchString, pageNo, pagelimit, function (err, result) {
            if (err)
                reject(err);

            resolve(result);

        });

    });
    return promise;
};


module.exports = {
    getCandidates: getCandidates
};