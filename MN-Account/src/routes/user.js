const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

// router.get('/:slug', tvController.detail);
router.get('/:slug', userController.getUsers);

module.exports = router;
