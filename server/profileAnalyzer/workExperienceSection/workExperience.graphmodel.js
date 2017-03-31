const neo4jConn = require('../../api/v1/neo4jcon/neo4jcon');
const graphConst = require('../../api/v1/common/graphConstants');
const async = require('async');
const createGraphModel = function() {
    let query = '';
    let username = 'manish';
    let WorkExperienceArray = [{
        workplace: 'Wipro',
        designation: 'Engineer',
        role: 'Developer',
        location: 'Bangalore',
        iscurrent: 'true'
    }, {
        workplace: 'Infosys',
        designation: 'Engineer',
        role: 'Tester',
        location: 'Pune',
        iscurrent: 'true'
    }, {
        workplace: 'TCS',
        designation: 'Developer',
        role: 'Tester',
        location: 'Chennai',
        iscurrent: 'true'
    }];
    if (username) {
        let user = 'user:' + graphConst.NODE_PERSON + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + username + '"}';
        query = query + 'MERGE(' + user + ' ) With user MATCH (' + user + ')';
        console.log("hi");
        async.parallel(WorkExperienceArray, function(err, element) {
            console.log(element);
            // let location = 'location' + index + ':' + graphConst.NODE_LOCATION + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + element.location + '"}';
            // let workPlace = 'workplace' + index + ':' + graphConst.NODE_WORKPLACE + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + element.workplace + '"}';
            // let designation = 'desg' + index + ':' + graphConst.NODE_DESG + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + element.designation + '"}';
            // let role = 'role' + index + ':' + graphConst.NODE_ROLE + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + element.role + '"} ';
            // query = query + 'MERGE(user)-[' + graphConst.NODE_RELATION_WORK_AT + ']->(' + location + `)
            //              MERGE(user)-[` + graphConst.NODE_RELATION_WORK_IN + ']->(' + workPlace + `) 
            //              MERGE(user)-[` + graphConst.NODE_RELATION_DESIGNATED_AS + ']->(' + designation + `) 
            //              MERGE(desg` + index + ')-[' + graphConst.NODE_RELATION_ROLE_AS + ']->(' + role + `)
            //              WITH workplace` + index + ', user, role' + index + ', desg' + index + ', location' + index + `
            //              MERGE(user) - [: Role_As] - > (role` + index + `)
            //              MERGE(location` + index + ') < -[: Company_Name] - > (workplace' + index + `)
            //              MERGE(workplace` + index + ') - [: Designated_As] - > (desg' + index + ')';
        });
        // WorkExperienceArray.forEach(function(element, index) {
        //     // if multiple location is there we can use foreach
        //     let location = 'location' + index + ':' + graphConst.NODE_LOCATION + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + element.location + '"}';
        //     let workPlace = 'workplace' + index + ':' + graphConst.NODE_WORKPLACE + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + element.workplace + '"}';
        //     let designation = 'desg' + index + ':' + graphConst.NODE_DESG + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + element.designation + '"}';
        //     let role = 'role' + index + ':' + graphConst.NODE_ROLE + '{' + graphConst.NODE_PROPERTY_NAME + ':"' + element.role + '"} ';
        //     query = query + `MERGE(user)-[` + graphConst.NODE_RELATION_WORK_AT + `]->(` + location + `)
        //                          MERGE(user)-[` + graphConst.NODE_RELATION_WORK_IN + `]->(` + workPlace + `)
        //                          MERGE(user)-[` + graphConst.NODE_RELATION_DESIGNATED_AS + `]->(` + designation + `)
        //                          MERGE(desg` + index + `)-[` + graphConst.NODE_RELATION_ROLE_AS + `]->(` + role + `)
        //                          WITH workplace` + index + `, user, role` + index + `, desg` + index + `, location` + index + `
        //                          MERGE(user) - [: Role_As] - > (role` + index + `)
        //                          MERGE(location` + index + `) < -[: Company_Name] - > (workplace` + index + `)
        //                          MERGE(workplace` + index + `) - [: Designated_As] - > (desg` + index + `)`;
        // });
    }
    console.log(query);
    return query;
    // const session = neo4jConn.connection();
    // return session
    //     .run(query)
    //     .then(result => {
    //         session.close();
    //     })
    //     .catch(error => {
    //         session.close();
    //         throw error;
    //     });
};

module.exports = {
    createGraphModel: createGraphModel
};