const mongoose = require('mongoose');

const {Schema} = mongoose;

const TownSchema = new Schema({
    code: String,
    department: String,
    name: String
});

const town = mongoose.model('town',TownSchema);

module.exports = town;
