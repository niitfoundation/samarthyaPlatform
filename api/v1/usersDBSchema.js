const  mongoose=require('./databaseConfig');
let Schema = mongoose.Schema;

// create a schema
let userSchema = new Schema({
  Email:{type:String,required:true},
  Password:{type:String,required:true},
  created_at: Date,
  updated_at: Date
});

let UserCredential = mongoose.model('UserCredential', userSchema);

module.exports = UserCredential;