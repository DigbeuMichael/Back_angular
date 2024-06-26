
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = Schema({
    username: String,
    email: String,
    password: String
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('users', UserSchema);
