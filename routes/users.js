const express = require('express');

const { addNewUser, fetchAllUsers } = require('../controllers/users');

const router = express.Router();

router.post('/add-user', addNewUser);

router.get('/allusers', fetchAllUsers);


module.exports = router;