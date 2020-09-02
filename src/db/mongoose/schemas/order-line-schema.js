const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderLineSchema = new Schema({
    _id: Schema.ObjectId,
    order: {type: Schema.ObjectId, ref: 'Order'},
    product: {type: Schema.ObjectId, ref: 'Product'},
    amount: {type: String, required: true}
});

module.exports = mongoose.model('OrderLine', orderLineSchema);