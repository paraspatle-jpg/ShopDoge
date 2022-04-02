const { Router } = require('express');
const cartController = require('../controllers/cartControllers');
const auth = require('../middleswares/auth');
const router = Router();

router.get('/cart/:userId', auth, cartController.getCart);
router.post('/cart/:userId', auth, cartController.addToCart);
router.put('/cart/:usedId/:itemId/:quantity', auth, cartController.updateProductCount)
router.delete('/cart/:userId/:itemId', auth, cartController.deleteFromCart);

module.exports = router