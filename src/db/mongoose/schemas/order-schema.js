const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    user: {type: Schema.ObjectId, ref: 'User'},
    comment: {type: String},
    state: {type: Schema.ObjectId, ref: 'OrderState'},
    discounts:[{type: Schema.ObjectId, ref: 'Discount'}],
});

module.exports = mongoose.model('Order', orderSchema);