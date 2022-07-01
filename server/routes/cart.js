const { Router } = require('express');
const cartController = require('../controllers/cartControllers');
const auth = require('../middleswares/auth');
const router = Router();

router.get('/cart', auth, cartController.getCart);
router.post('/cart', auth, cartController.addToCart);
router.put('/cart', auth, cartController.updateProductCount)
router.delete('/cart', auth, cartController.deleteFromCart);

module.exports = router
