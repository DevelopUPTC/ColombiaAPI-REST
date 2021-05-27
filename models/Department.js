const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const DepartmentSchema = new Schema({
    code: String,
    name: String
});

const department = mongoose.model('department',DepartmentSchema);

module.exports = department;
