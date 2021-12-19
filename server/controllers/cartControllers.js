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
    const productId = req.body.product.id;
   // const price = req.body.product.price;

    try {
        let cart = await Cart.findOne({ userId });
        if (cart) {
            let index = cart.items.findIndex(p => p.productId == productId);
            if(index > -1)
            {
                return res.status(403).send("Product already in the cart")
            }
            else {
                cart.items.push({ productId});
            }
            cart = await cart.save();
            return res.status(201).send(cart);
        }
        else{
            const newCart = await Cart.create({
                userId,
                items: [{ productId }],
            });
            return res.status(201).send(newCart);
        }    
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong cannot connect to database");
    }
}

module.exports.deleteFromCart= async (req, res) => {
    const userId = req.params.userId
    const productId = req.params.productId

    try {
        let cart = await Cart.findOne({ userId });
        const index = cart.items.findIndex(p => p.productId == productId)
        if (index > -1) {
            cart.items.splice(index, 1)
        }
        cart = await cart.save()
        res.status(201).send(cart)
    }
    catch(err){
        console.log(err)
        res.status(500).send("Something went wrong");
    }
}