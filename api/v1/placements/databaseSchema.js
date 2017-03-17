var mongoose=require('./../databaseConfig');

var Schema = mongoose.Schema;


// create a schema
var userSchema = new Schema({
  FirstName: { type: String},
  LastName: { type: String},
  Gender:{ type: String},
  Email:{ type: String},
  AadharNumber:{type:String},
  RegistrationID:{type:String},
  MobileNumber:{type:Number},
  Role:{ type: String},
  Profession:{ type: String},
  Location:{type:String},
  PlacementCenter:{ type: String},
  Language:{ type: String},
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