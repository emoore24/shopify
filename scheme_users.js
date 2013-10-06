var mongoose = require('mongoose');
var CONNECTION_STRING = "mongodb://localhost";
mongoose.connect(CONNECTION_STRING);
var User;
var db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection error:'));
db.once('open', initialize);

function initialize(){

	var UserSchema = mongoose.Schema({
		name: String,
		email: String,
		address: {
			address: String,
			city: String,
			state: String,
			zip_code: String,
			mobile_number: String
		},
		biography: String,
		password: String,
		payment: {
			service: String,
			serial: String
		}
	});

	User = mongoose.model("User", UserSchema, "Users");

}

function findOneUser(email, callback){
	var output;
	User.findOne({"email" : email}, callback);
}

function findUsers(field, value, callback){
	var output;
	User.find({field: value}, callback);
	return output;
}

function removeUser(email){
	User.findOne({"email": email}).remove(function(){});
}

function insertUser(newObject){
	User.create([newObject], function(){});
}

function updateUser(email, field, update){
	User.update({"email" : email}, {field : update});
}