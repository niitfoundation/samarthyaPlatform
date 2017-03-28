//config data for mongo database
const mongo = {
 host: process.env.MONGO_HOST || '127.0.0.1',
 port: process.env.MONGO_PORT || 27017,
 masterDB: process.env.MONGO_DB || 'samarthyaDB'
};
mongo['mongoURL'] = ('mongodb://' + mongo.host + ':' + mongo.port + '/' + mongo.masterDB);

//config data for Samarth app email 
const emailDetails = {
    serviceProvide: "Gmail",
    user: "samarthyawave16@gmail.com",
    password: "Samarthya@wave16",
    emailTokenSecret: "Email Token"
}
//config data for user details
const userDetails = {

    USER_STATUS: ["Active", "InActive", "Suspended"],
    USER_ROLE: ["Admin", "Supervisor", "Coordinator"],
}

// config data for secret token
const secret = "somethinghere";
// config object
 const config = {
MONGO : mongo,
EMAILDETAILS : emailDetails,
USERDETAILS : userDetails,
SECRET : secret
  }
// export the config object
module.exports = config;