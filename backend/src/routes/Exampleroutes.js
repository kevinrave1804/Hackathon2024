const express = require('express');
const router = express.Router();
const controller = require('../controllers/ExampleController');

router.get('/datos', controller.getDatos);

module.exports = router;