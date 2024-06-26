const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    userName: {type: String, unique: true},
    password: String,
});

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;