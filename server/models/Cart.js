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
        url: {
            type: String,
        },
        price: {
            type: Number,
        },
        description: {
            type: String,
        },
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity can not be less then 1.'],
            deafult: 1
        },
    }]
});

module.exports = Cart = mongoose.model('cart',CartSchema);