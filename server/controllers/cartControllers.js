const Cart = require('../models/Cart');

module.exports.getCart = async (req, res) => {
    const userId = req.params.userId;
    try {
        let cart = await Cart.findOne({ userId });
        if (cart && cart.items.length > 0) {
            res.send(cart);
        }
        else {
            res.send(null);
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong cannot connect to database");
    }
}

module.exports.addToCart = async (req, res) => {
    const userId = req.params.userId;
    const productId = req.params.product.id;
    const price = req.params.product.price;

    try {
        let cart = await Cart.findOne({ userId });
        if (cart) {
            let index = cart.items.findIndex(p => p.productId == productId);
            if(index > -1)
            {
                let productItem = cart.items[index];
                productItem.quantity += quantity;
                cart.items[index] = productItem;
            }
            else {
                cart.items.push({ productId, quantity});
            }
            cart.bill += quantity*price;
            cart = await cart.save();
            return res.status(201).send(cart);
        }
        else{
            const newCart = await Cart.create({
                userId,
                items: [{ productId, quantity }],
                bill: quantity*price
            });
            return res.status(201).send(newCart);
        }    
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong cannot connect to database");
    }
}