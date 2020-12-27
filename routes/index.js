const router = require('express').Router();
router.use('/books', require('./book'));
router.use('/auth', require('./auth'));

module.exports = router;