const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    _id: Schema.ObjectId,
    id: {type: Number, required: true, unique: true},
    name: {type: String, required: true}
});

module.exports = mongoose.model('Role', roleSchema);