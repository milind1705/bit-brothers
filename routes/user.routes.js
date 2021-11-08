const express = require('express');
const router = express.Router();

const user = require('../controller/user.controller');

router.post('/', user.createUser);
router.get('/', user.getUser);
router.get('/:id', user.getUserbyId);
router.put('/:id', user.updateUser);
router.delete('/:id', user.deleteUser);

module.exports = router;