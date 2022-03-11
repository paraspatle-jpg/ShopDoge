const { Router } = require('express');
const cartController = require('../controllers/cartControllers');
const auth = require('../middleswares/auth');
const router = Router();

router.get('/cart/:userId',cartController.getCart);
router.post('/cart/:userId',cartController.addToCart);
router.delete('/cart/:userId/:itemId',cartController.deleteFromCart);

module.exports = router;