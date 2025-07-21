const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getAllUsers, updateUser } = require('../controllers/usersController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/:id', updateUser);
router.get('/', getAllUsers);

module.exports = router;
