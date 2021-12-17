const { Router } = require('express');
const cartController = require('../controllers/cartControllers');
const router = Router();

router.get('/cart/:userId',cartController.get_cart_items);
router.post('/cart/:userId/:product',cartController.add_cart_item);
router.delete('/cart/:userId/:itemId',cartController.delete_item);

module.exports = router;