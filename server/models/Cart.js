const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    userId: {
        type: String,
        ref: "user"
    },
    items: [{
        productId: {
            type: Number,
            ref: "item"
        },
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity can not be less then 1.'],
            deafult: 1
        },
    }],
    bill: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = Cart = mongoose.model('cart',CartSchema);