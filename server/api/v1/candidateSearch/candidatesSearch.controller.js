const logger = require('./../../../../applogger');
const candidateGraphmodel = require('./candidateSearch.graphmodel');


/*
 *
 */
const getCandidates = function(searchString, pageNo, pagelimit) {

    // console.log(candidateObj.toLowerCase());
    let promise = new Promise((resolve, reject) => {
        candidateGraphmodel.searchCandidates(searchString, pageNo, pagelimit, function(err, result) {
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