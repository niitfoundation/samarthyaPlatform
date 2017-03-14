var mongoose = require('./../databaseConfig');

var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true, },
  Gender: { type: String, required: true },
  Email: { type: String, required: true },
  MobileNumber: { type: Number, required: true },
  Role: { type: String, required: true },
  Profession: { type: String, required: true },
  Location: { type: String },
  PlacementCenter: { type: String, required: true },
  Status: { type: String, required: true },
  Language: { type: String, required: true },
  created_at: Date,
  updated_at: Date
});
// custom method to add string to end of name
// you can create more important methods like name validations or formatting
// you can also do queries and find similar users 

// the schema is useless so far
// we need to create a model using it
var UserDetail = mongoose.model('UserDetailPlacement', userSchema);
// create a new user called chris
// var chris = new User({
//   name: this.name,
//   username: this.username,
//   password: this.password ,
// 	created_at:Date.now()
// });
// call the built-in save method to save to the database

// make this available to our users in our Node applications
module.exports = UserDetail;