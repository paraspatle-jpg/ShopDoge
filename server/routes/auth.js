const { Router } = require('express');
const authController = require('../controllers/authControllers');
const auth = require('../middleswares/auth');
const router = Router();

router.post('/register', authController.signup);
router.post('/login', authController.login);
router.post('/logout',auth, authController.logout);
router.delete('/delete',auth, authController.deleteUser);

module.exports = router;